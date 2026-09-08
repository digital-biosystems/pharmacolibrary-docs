# paracetamol — `Paracetamol_Allegaert2015_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Allegaert K; Peeters MY; Beleyn B; Smits A; Kulo A; van Calsteren K; et al. et al. (2015). BMC anesthesiology 15
  ·  DOI: [10.1186/s12871-015-0144-3](https://doi.org/10.1186/s12871-015-0144-3)

## Model component
<dbs-pgx drug="paracetamol" model-id="Paracetamol_Allegaert2015_reference" status="extracted" stale="false" population="young women" measured-compound="paracetamol" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLPG (L/h) | `Q22` · CL | 2.02 | L/h | 5.611111111111111e-07 | [l] / [h] | not captured | llm (0.6) | Tab2:row5:col3, Tab2:row5:col4 | — | not captured |
| V1 (L) | `Q63` · V1 | 1.83 | L | 0.00183 | [l] | not captured | exact (1.0) | Tab2:row13:col2, Tab2:row13:col3, Tab2:row13:col4 | — | not captured |
| V2 (L) | `Q64` · V2 | 22.3 | L | 0.0223 | [l] | not captured | exact (1.0) | Tab2:row15:col1, Tab2:row15:col2, Tab2:row15:col3, Tab2:row15:col4 | — | not captured |
| Q (L/h) | `Q30` · Q | 1.34 | L/h | 3.722222222222222e-07 | [l] / [h] | not captured | exact (1.0) | Tab2:row17:col1, Tab2:row17:col2, Tab2:row17:col3, Tab2:row17:col4 | — | not captured |
| Tlag | `Q83` · tlag | 4.2 | min | 252.0 | h | not captured | review_gapfill (0.7) | Gibb_2008:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '2.03(8.8) × 7.33 = 14.9' — extend the ontology if this is a real PK parameter (source ['Tab2:row8:col3'])
- dropped duplicate Q22 ('CLPS (L/h)', value '3.82') — already have one for this compound
- dropped unlinked row (NIL): 'Preterm = 5.61 (7.9)' — extend the ontology if this is a real PK parameter (source ['Tab2:row10:col1'])
- dropped duplicate Q22 ('CLPU (L/h)', value '0.94') — already have one for this compound
- dropped unlinked row (NIL): '34.4' — extend the ontology if this is a real PK parameter (source ['Tab2:row14:col1'])
- dropped unlinked row (NIL): 'V8 (L)' — extend the ontology if this is a real PK parameter (source ['Tab2:row16:col1', 'Tab2:row16:col2', 'Tab2:row16:col3', 'Tab2:row16:col4'])
- dropped duplicate Q30 ('Q1 (L/h)', value '61.6') — already have one for this compound
- dropped unlinked row (NIL): 'MF' — extend the ontology if this is a real PK parameter (source ['Tab2:row20:col1', 'Tab2:row20:col2', 'Tab2:row20:col3', 'Tab2:row20:col4'])
- dropped duplicate Q22 ('ωCLpg2', value '0.12') — already have one for this compound
- routed 'ωV12' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ωCLpu2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): '−2LL' — extend the ontology if this is a real PK parameter (source ['Tab2:row33:col1', 'Tab2:row33:col2', 'Tab2:row33:col3', 'Tab2:row33:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=paracetamol
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- gap-filled Q83 (tlag) from Gibb_2008's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tab2:row11:col1 = '0.93 (6.3) + 0.0053 (28.2) × (UP-100)'
- unparsed cell Tab2:row11:col2 = '0.93 (6.3) + 0.0053 (28.2) × (UP-100)'
- unparsed cell Tab2:row11:col3 = '0.93 (6.3) + 0.0053 (28.2) × (UP-100)'
- unparsed cell Tab2:row13:col1 = '1.86 (6.3) × 18.5 ='
- unparsed cell Tab2:row18:col2 = '0.13 (17.9) × 61.1 = 7.9'
- unparsed cell Tab2:row28:col4 = '0.14 (23.5))'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row5:col3', 'Tab2:row5:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row17:col1', 'Tab2:row17:col2', 'Tab2:row17:col3', 'Tab2:row17:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row13:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row15:col1', 'Tab2:row15:col2', 'Tab2:row15:col3', 'Tab2:row15:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Gibb_2008:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.02 | not captured | not captured | ['Tab2:row5:col3', 'Tab2:row5:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.02 L/h | not captured | not captured | ['Tab2:row5:col3', 'Tab2:row5:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.83 L | not captured | not captured | ['Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row13:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 22.3 L | not captured | not captured | ['Tab2:row15:col1', 'Tab2:row15:col2', 'Tab2:row15:col3', 'Tab2:row15:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_paracetamol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Allegaert_2015` / `Allegaert_2015::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_paracetamol/Paracetamol_Allegaert2015_reference/Paracetamol_Allegaert2015_reference_matlab.zip" download>Paracetamol_Allegaert2015_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_paracetamol/Paracetamol_Allegaert2015_reference/Paracetamol_Allegaert2015_reference_matlab_simbio.zip" download>Paracetamol_Allegaert2015_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_paracetamol/Paracetamol_Allegaert2015_reference/Paracetamol_Allegaert2015_reference_sbml.zip" download>Paracetamol_Allegaert2015_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_paracetamol/Paracetamol_Allegaert2015_reference/Paracetamol_Allegaert2015_reference_cellml.zip" download>Paracetamol_Allegaert2015_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
