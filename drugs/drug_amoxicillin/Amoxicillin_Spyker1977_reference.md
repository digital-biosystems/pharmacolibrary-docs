# amoxicillin — `Amoxicillin_Spyker1977_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Spyker DA; Rugloski RJ; Vann RL; O'Brien WM et al. (1977). Antimicrobial agents and chemotherapy 11
  ·  DOI: [10.1128/AAC.11.1.132](https://doi.org/10.1128/AAC.11.1.132)

## Model component
<dbs-pgx drug="amoxicillin" model-id="Amoxicillin_Spyker1977_reference" status="extracted" stale="false" population="healthy adult male volunteers" measured-compound="amoxicillin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Standard deviation 4.00 | `Q312` · IIV | 26.9 | mg | not captured | [mg] | not captured | llm (0.6) | tab_2:row7:col1, tab_2:row7:col2, tab_2:row7:col3, tab_2:row7:col4, tab_2:row7:col5, tab_2:row7:col6, tab_2:row7:col7, tab_2:row7:col8 | — | not captured |
| Cl | `Q22` · CL | 0.18 | L/h/kg | 3.5e-06 | L/h | not captured | review_gapfill (0.7) | Albanell-Fernández_2025:review | — | not captured |
| Vd | `Q61` · V | 1.73 | L/kg | 0.1211 | L | not captured | review_gapfill (0.7) | Albanell-Fernández_2025:review | — | not captured |
| ka (h−1) | `Q49` · kabs | 0.17 | h−1 | 4.722222222222223e-05 | 1/h | not captured | review_gapfill (0.7) | Baklouti_2026:review | — | not captured |
| T lagpo | `Q83` · tlag | 0.25 | h | 900.0 | h | not captured | review_gapfill (0.7) | Dubbelboer_2025:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- dropped unlinked row (NIL): '250' — extend the ontology if this is a real PK parameter (source ['tab_2:row2:col1', 'tab_2:row2:col2', 'tab_2:row2:col3', 'tab_2:row2:col4', 'tab_2:row2:col5', 'tab_2:row2:col6', 'tab_2:row2:col7', 'tab_2:row2:col8', 'tab_2:row2:col9'])
- dropped unlinked row (NIL): '500' — extend the ontology if this is a real PK parameter (source ['tab_2:row3:col1', 'tab_2:row3:col2', 'tab_2:row3:col3', 'tab_2:row3:col4', 'tab_2:row3:col5', 'tab_2:row3:col6', 'tab_2:row3:col7', 'tab_2:row3:col8', 'tab_2:row3:col9'])
- dropped unlinked row (NIL): '1000' — extend the ontology if this is a real PK parameter (source ['tab_2:row4:col1', 'tab_2:row4:col2', 'tab_2:row4:col3', 'tab_2:row4:col4', 'tab_2:row4:col5', 'tab_2:row4:col6', 'tab_2:row4:col7', 'tab_2:row4:col8', 'tab_2:row4:col9'])
- dropped unlinked row (NIL): 'Means' — extend the ontology if this is a real PK parameter (source ['tab_2:row6:col1', 'tab_2:row6:col2', 'tab_2:row6:col3', 'tab_2:row6:col4', 'tab_2:row6:col5', 'tab_2:row6:col6', 'tab_2:row6:col7', 'tab_2:row6:col8', 'tab_2:row6:col9'])
- dropped unlinked row (NIL): 'SEM' — extend the ontology if this is a real PK parameter (source ['tab_2:row8:col1', 'tab_2:row8:col2', 'tab_2:row8:col3', 'tab_2:row8:col4', 'tab_2:row8:col5', 'tab_2:row8:col6', 'tab_2:row8:col7', 'tab_2:row8:col8', 'tab_2:row8:col9'])
- dropped unlinked row (NIL): '0' — extend the ontology if this is a real PK parameter (source ['tab_2:row16:col1'])
- table mostly unlinked (6/7 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amoxicillin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q22 (CL) from Albanell-Fernández_2025's review values (primary lacked it)
- gap-filled Q61 (V) from Albanell-Fernández_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Baklouti_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Dubbelboer_2025's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_2:row16:col3 = 'e.0'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Albanell-Fernández_2025:review'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Baklouti_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Albanell-Fernández_2025:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Dubbelboer_2025:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.18 | not captured | not captured | ['Albanell-Fernández_2025:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 12.6 L/h | not captured | not captured | ['Albanell-Fernández_2025:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 121 L | not captured | not captured | ['Albanell-Fernández_2025:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amoxicillin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Spyker_1977` / `Spyker_1977::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_1C_enteral.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_amoxicillin/Amoxicillin_Spyker1977_reference/Amoxicillin_Spyker1977_reference_modelica.zip" download>Amoxicillin_Spyker1977_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_amoxicillin/Amoxicillin_Spyker1977_reference/Amoxicillin_Spyker1977_reference_fmi.zip" download>Amoxicillin_Spyker1977_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_amoxicillin/Amoxicillin_Spyker1977_reference/Amoxicillin_Spyker1977_reference_matlab.zip" download>Amoxicillin_Spyker1977_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_amoxicillin/Amoxicillin_Spyker1977_reference/Amoxicillin_Spyker1977_reference_matlab_simbio.zip" download>Amoxicillin_Spyker1977_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_amoxicillin/Amoxicillin_Spyker1977_reference/Amoxicillin_Spyker1977_reference_sbml.zip" download>Amoxicillin_Spyker1977_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_amoxicillin/Amoxicillin_Spyker1977_reference/Amoxicillin_Spyker1977_reference_cellml.zip" download>Amoxicillin_Spyker1977_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
