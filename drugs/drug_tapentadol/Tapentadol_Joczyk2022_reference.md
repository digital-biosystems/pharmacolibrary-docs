# tapentadol — `Tapentadol_Joczyk2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Jończyk R; Beuter C; Bulawa B; Buller S; Eibl C; Elling C; et al. et al. (2022). Journal of pain research 15
  ·  DOI: [10.2147/JPR.S364902](https://doi.org/10.2147/JPR.S364902)

## Model component
<dbs-pgx drug="tapentadol" model-id="Tapentadol_Joczyk2022_reference" status="rejected" stale="false" population="children aged 2 to &lt;7 years with acute pain" measured-compound="tapentadol" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax,sd (ng/mL) | `Q32` · Cmax | —(suppressed) | ng/mL | — | [ng] / [ml] | 51.6 | llm_confirmed (0.6) | t0003:row0:col3, t0003:row0:col4, t0003:row0:col5, t0003:row0:col6, t0003:row0:col8, t0003:row0:col9, t0003:row0:col10, t0003:row0:col11, t0003:row0:col13, t0003:row0:col14, t0003:row0:col15, t0003:row0:col16 | — | not captured |
| Cmin,sd (ng/mL) | `Q36` · Cmin | —(suppressed) | ng/mL | — | [ng] / [ml] | 72.9 | llm_confirmed (0.6) | t0003:row1:col3, t0003:row1:col4, t0003:row1:col5, t0003:row1:col6, t0003:row1:col8, t0003:row1:col9, t0003:row1:col10, t0003:row1:col11, t0003:row1:col13, t0003:row1:col14, t0003:row1:col15, t0003:row1:col16 | — | not captured |
| AUCτ,sd (h•ng/mL) | `Q19` · AUCt | —(suppressed) | h•ng/mL | — | [[h] · [ng]] / [ml] | 34.9 | llm_confirmed (0.6) | t0003:row2:col3, t0003:row2:col4, t0003:row2:col5, t0003:row2:col6, t0003:row2:col8, t0003:row2:col9, t0003:row2:col10, t0003:row2:col11, t0003:row2:col13, t0003:row2:col14, t0003:row2:col15, t0003:row2:col16 | — | not captured |
| AUCτ,ss (h•ng/mL) | `Q18` · AUCSS | —(suppressed) | h•ng/mL | — | [[h] · [ng]] / [ml] | 41.4 | llm_corrected (0.6) | t0003:row5:col3, t0003:row5:col4, t0003:row5:col5, t0003:row5:col6, t0003:row5:col8, t0003:row5:col9, t0003:row5:col10, t0003:row5:col11, t0003:row5:col13, t0003:row5:col14, t0003:row5:col15, t0003:row5:col16 | — | not captured |
| Tapentadol mature CL | `Q22` · CL | —(suppressed) | L/h | — | L/h | not captured | boundary (0.8) | Jończyk_2022:other_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'h•ng/mL' (AUCt)
- dropped duplicate Q32 ('Cmax,ss (ng/mL)', value '201.2') — already have one for this compound
- dropped duplicate Q36 ('Cmin,ss (ng/mL)', value '29.3') — already have one for this compound
- unit_dimension_unknown: 'h•ng/mL' (AUCSS)
- dropped unlinked row (NIL): 'AF' — extend the ontology if this is a real PK parameter (source ['t0003:row6:col3', 't0003:row6:col4', 't0003:row6:col5', 't0003:row6:col6', 't0003:row6:col8', 't0003:row6:col9', 't0003:row6:col10', 't0003:row6:col11', 't0003:row6:col13', 't0003:row6:col14', 't0003:row6:col15', 't0003:row6:col16'])
- salvaged Q22 ('Tapentadol mature CL'=93.7) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tapentadol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- transposed table t0003: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['t0003:row0:col3', 't0003:row0:col4', 't0003:row0:col5', 't0003:row0:col6', 't0003:row0:col8', 't0003:row0:col9', 't0003:row0:col10', 't0003:row0:col11', 't0003:row0:col13', 't0003:row0:col14', 't0003:row0:col15', 't0003:row0:col16'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['t0003:row1:col3', 't0003:row1:col4', 't0003:row1:col5', 't0003:row1:col6', 't0003:row1:col8', 't0003:row1:col9', 't0003:row1:col10', 't0003:row1:col11', 't0003:row1:col13', 't0003:row1:col14', 't0003:row1:col15', 't0003:row1:col16'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 93.7 | not captured | not captured | ['Jończyk_2022:other_prose'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 93.7 L/h | not captured | not captured | ['Jończyk_2022:other_prose'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tapentadol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jończyk_2022` / `Jończyk_2022::reference`)


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
