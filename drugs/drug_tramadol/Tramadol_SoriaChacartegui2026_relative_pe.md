# tramadol — `Tramadol_SoriaChacartegui2026_relative_pe`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Soria-Chacartegui P; Würthwein G; Zubiaur P; Almenara S; Ochoa D; Abad-Santos F; et al. et al. (2026). European journal of drug metabolism and pharmacokinetics 51
  ·  DOI: [10.1007/s13318-026-00986-3](https://doi.org/10.1007/s13318-026-00986-3)

## Model component
<dbs-pgx drug="tramadol" model-id="Tramadol_SoriaChacartegui2026_relative_pe" status="extracted" stale="false" population="healthy volunteers" measured-compound="tramadol" parameterization="mechanistic" topology="3C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 51.1 | L/h | 1.4194444444444445e-05 | L/h | not captured | exact (1.0) | Soria-Chacartegui_2026:other_prose | — | not captured |
| Vc (L) | `Q63` · V1 | 126 | L | 0.126 | L | not captured | exact (1.0) | Soria-Chacartegui_2026:other_prose | — | not captured |
| Ka (h−1) | `Q49` · kabs | 3.09 | h−1 | 0.0008583333333333333 | 1/h | not captured | exact (1.0) | Soria-Chacartegui_2026:other_prose | — | not captured |
| Q (L/h) | `Q30` · Q | 175 | L/h | 4.8611111111111115e-05 | L/h | not captured | exact (1.0) | Soria-Chacartegui_2026:other_prose | — | not captured |
| Vp (L) | `Q64` · V2 | 171 | L | 0.171 | L | not captured | exact (1.0) | Soria-Chacartegui_2026:other_prose | — | not captured |
| Vd (L) | `Q61` · V | 309 | L | 0.309 | L | not captured | exact (1.0) | Soria-Chacartegui_2026:other_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag', 'k13', 'k31']

**Interpretation flags:**
- dropped value-less row: 'AUC0→24 (ng × h/mL)' (captured trailing unit 'ng × h/mL' for child rows)
- dropped value-less row: 'AUC0→∞ (ng × h/mL)' (captured trailing unit 'ng × h/mL' for child rows)
- dropped value-less row: 'Cmax (ng/mL)' (captured trailing unit 'ng/mL' for child rows)
- dropped value-less row: 'tmax (h)' (captured trailing unit 'h' for child rows)
- dropped value-less row: 't1/2 (h)' (captured trailing unit 'h' for child rows)
- dropped value-less row: 'CL (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'Vd (L)' (captured trailing unit 'L' for child rows)
- salvaged Q22 ('CL (L/h)'=51.1) from results prose — parameter table was unreadable
- salvaged Q63 ('Vc (L)'=126) from results prose — parameter table was unreadable
- salvaged Q49 ('Ka (h−1)'=3.09) from results prose — parameter table was unreadable
- salvaged Q30 ('Q (L/h)'=175) from results prose — parameter table was unreadable
- salvaged Q64 ('Vp (L)'=171) from results prose — parameter table was unreadable
- salvaged Q61 ('Vd (L)'=309) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tramadol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'relative pe (%)' subgroup of Soria-Chacartegui_2026 (paper reports 3 populations: estimate, relative pe (%), shrinkage (%))
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row10:col5 = '−0.329 to −0.044'
- unparsed cell Soria-Chacartegui_2026_table_3:row0:col1 = '763 (35.4%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row0:col2 = '780 (35.9%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row0:col3 = '0.98 (0.97, 0.98)'
- unparsed cell Soria-Chacartegui_2026_table_3:row1:col1 = '793 (37.3%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row1:col2 = '810 (37.4%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row1:col3 = '0.98 (0.97, 0.98)'
- unparsed cell Soria-Chacartegui_2026_table_3:row2:col1 = '136 (33.7%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row2:col2 = '139 (37%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row2:col3 = '0.98 (0.95, 1.01)'
- unparsed cell Soria-Chacartegui_2026_table_3:row3:col1 = '0.81 (0.57–1.00)'
- unparsed cell Soria-Chacartegui_2026_table_3:row3:col2 = '0.75 (0.50–1.00)'
- unparsed cell Soria-Chacartegui_2026_table_3:row3:col3 = '1.04 (0.98, 1.17)'
- unparsed cell Soria-Chacartegui_2026_table_3:row4:col1 = '4.5 (18.6%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row4:col2 = '4.9 (17.1%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row4:col3 = '0.92 (0.89, 0.96)'
- unparsed cell Soria-Chacartegui_2026_table_3:row5:col1 = '47.5 (37.3%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row5:col2 = '46.3 (37.4%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row5:col3 = '1.03 (1.02, 1.03)'
- unparsed cell Soria-Chacartegui_2026_table_3:row6:col1 = '309 (25.6%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row6:col2 = '327 (29.7%)'
- unparsed cell Soria-Chacartegui_2026_table_3:row6:col3 = '0.94 (0.91, 0.99)'
- companion parameter table 3 transcribed (7 record(s))
- LLM selected parameter table(s) 3
- dropped sensitivity-analysis table(s) 2 from the LLM selection — perturbations of a model, not a model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 51.1 | not captured | not captured | ['Soria-Chacartegui_2026:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 51.1 L/h | not captured | not captured | ['Soria-Chacartegui_2026:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 309 L | not captured | not captured | ['Soria-Chacartegui_2026:other_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 126 L | not captured | not captured | ['Soria-Chacartegui_2026:other_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 171 L | not captured | not captured | ['Soria-Chacartegui_2026:other_prose'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tramadol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Soria-Chacartegui_2026` / `Soria-Chacartegui_2026::relative_pe`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_tramadol/Tramadol_SoriaChacartegui2026_relative_pe/Tramadol_SoriaChacartegui2026_relative_pe_modelica.zip" download>Tramadol_SoriaChacartegui2026_relative_pe_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tramadol/Tramadol_SoriaChacartegui2026_relative_pe/Tramadol_SoriaChacartegui2026_relative_pe_matlab.zip" download>Tramadol_SoriaChacartegui2026_relative_pe_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tramadol/Tramadol_SoriaChacartegui2026_relative_pe/Tramadol_SoriaChacartegui2026_relative_pe_matlab_simbio.zip" download>Tramadol_SoriaChacartegui2026_relative_pe_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tramadol/Tramadol_SoriaChacartegui2026_relative_pe/Tramadol_SoriaChacartegui2026_relative_pe_sbml.zip" download>Tramadol_SoriaChacartegui2026_relative_pe_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tramadol/Tramadol_SoriaChacartegui2026_relative_pe/Tramadol_SoriaChacartegui2026_relative_pe_cellml.zip" download>Tramadol_SoriaChacartegui2026_relative_pe_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
