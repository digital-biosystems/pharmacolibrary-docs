# ciprofloxacin — `Ciprofloxacin_Alihodzic2022_reference`

> ## <span class="pk-badge pk-badge--neutral">not modelled</span>

### Reviewer guidance

**What is wrong:** no model exists yet, so there is nothing to judge

**Steps:**
1. No curator action. Run the engineer for this drug.

<sub>owner: **engineer** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
not matched (stem Alihodzic_2022)

## Model component
<dbs-pgx drug="ciprofloxacin" model-id="Ciprofloxacin_Alihodzic2022_reference" status="not_modelled" stale="false" population="critically ill adults undergoing ECMO" measured-compound="ciprofloxacin" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | tab_2:row3:col1, tab_2:row3:col3, tab_2:row3:col5 | — | 18.7 (None% RSE) |
| V 1 (L) | `Q63` · V1 | —(suppressed) | L | — | [l] | not captured | llm (0.5) | tab_2:row4:col1, tab_2:row4:col3, tab_2:row4:col5 | — | not captured |
| Q (L/h) | `Q30` · Q | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | tab_2:row5:col1, tab_2:row5:col3, tab_2:row5:col5 | — | 4.2 (None% RSE) |
| V 2 (L) | `Q64` · V2 | —(suppressed) | L | — | [l] | not captured | llm (0.5) | tab_2:row6:col1, tab_2:row6:col3, tab_2:row6:col5 | — | not captured |
| Ka (h−1) | `Q49` · kabs | —(suppressed) | h−1 | — | 1/h | not captured | review_gapfill (0.7) | Alonso_2021:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped unlinked row (NIL): 'COV_CL_BICARB (L/mmol)' — extend the ontology if this is a real PK parameter (source ['tab_2:row7:col3', 'tab_2:row7:col5'])
- unit_dimension_mismatch: 'COV_CL_eGFR (min/mL)' → Q22 (unit '[time] / [length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('COV_CL_eGFR (min/mL)', value '0.0003') — already have one for this compound
- dropped value-less row: 'OFV'
- dropped value-less row: 'CL'
- dropped value-less row: 'V1'
- dropped value-less row: 'Q'
- dropped value-less row: 'V2'
- dropped value-less row: 'COV_CL_BICARB'
- dropped value-less row: 'COV_CL_eGFR'
- dropped value-less row: 'Prop. σ 2'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['tab_2:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'RSE'
- dropped value-less row: 'LLP-SIR'
- dropped value-less row: 'CI'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ciprofloxacin
- gap-filled Q49 (kabs) from Alonso_2021's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_2:row13:col1 = '3.2 FIX'
- LLM region Alihodzic_2022:discussion_prose: no JSON records returned

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q22 | fail | 11.2 | 12.9 | 1.1518 | 0.05 | footnote reference category |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row3:col1', 'tab_2:row3:col3', 'tab_2:row3:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row5:col1', 'tab_2:row5:col3', 'tab_2:row5:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Alonso_2021:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row4:col1', 'tab_2:row4:col3', 'tab_2:row4:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row6:col1', 'tab_2:row6:col3', 'tab_2:row6:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 11.2 | not captured | not captured | ['tab_2:row3:col1', 'tab_2:row3:col3', 'tab_2:row3:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 11.2 L/h | not captured | not captured | ['tab_2:row3:col1', 'tab_2:row3:col3', 'tab_2:row3:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 53.3 L | not captured | not captured | ['tab_2:row4:col1', 'tab_2:row4:col3', 'tab_2:row4:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 66.1 L | not captured | not captured | ['tab_2:row6:col1', 'tab_2:row6:col3', 'tab_2:row6:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ciprofloxacin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Alihodzic_2022` / `Alihodzic_2022::critically ill adults undergoing ECMO`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_2C_enteral.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ciprofloxacin/Ciprofloxacin_Alihodzic2022_reference/Ciprofloxacin_Alihodzic2022_reference_modelica.zip" download>Ciprofloxacin_Alihodzic2022_reference_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ciprofloxacin/Ciprofloxacin_Alihodzic2022_reference/Ciprofloxacin_Alihodzic2022_reference_fmi.zip" download>Ciprofloxacin_Alihodzic2022_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ciprofloxacin/Ciprofloxacin_Alihodzic2022_reference/Ciprofloxacin_Alihodzic2022_reference_matlab.zip" download>Ciprofloxacin_Alihodzic2022_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ciprofloxacin/Ciprofloxacin_Alihodzic2022_reference/Ciprofloxacin_Alihodzic2022_reference_matlab_simbio.zip" download>Ciprofloxacin_Alihodzic2022_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ciprofloxacin/Ciprofloxacin_Alihodzic2022_reference/Ciprofloxacin_Alihodzic2022_reference_sbml.zip" download>Ciprofloxacin_Alihodzic2022_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ciprofloxacin/Ciprofloxacin_Alihodzic2022_reference/Ciprofloxacin_Alihodzic2022_reference_cellml.zip" download>Ciprofloxacin_Alihodzic2022_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
