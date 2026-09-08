# hydrocodone — `Hydrocodone_Melhem2013_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Melhem MR; Rubino CM; Farr SJ; Robinson CY et al. (2013). Clinical pharmacokinetics 52
  ·  DOI: [10.1007/s40262-013-0081-6](https://doi.org/10.1007/s40262-013-0081-6)

## Model component
<dbs-pgx drug="hydrocodone" model-id="Hydrocodone_Melhem2013_reference" status="extracted" stale="false" population="unknown" measured-compound="hydrocodone" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL L/hr | `Q22` · CL | 64.3 | L/hr | 1.786111111111111e-05 | [l] / [h] | not captured | llm_confirmed (0.6) | Melhem_2013:abstract | — | not captured |
| Vc L | `Q63` · V1 | 713 | L | 0.713 | [l] | not captured | llm_confirmed (0.6) | Melhem_2013:abstract | — | not captured |
| KA1 1/hr | `Q49` · kabs | 2.28 | 1/hr | 0.0006333333333333333 | [1] / [h] | not captured | llm (0.6) | Melhem_2013:abstract | — | not captured |
| Vp L | `Q64` · V2 | 153 | L | 0.153 | [l] | not captured | llm_confirmed (0.6) | Melhem_2013:abstract | — | not captured |
| Q L/hr | `Q30` · Q | 0.9 | L/hr | 2.5000000000000004e-07 | [l] / [h] | not captured | llm (0.6) | Melhem_2013:abstract | — | not captured |
| KTR 1/hr | `Q306` · ktr | 8.5 | 1/hr | 0.002361111111111111 | [1] / [h] | not captured | llm_confirmed (0.6) | Melhem_2013:abstract | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped unlinked row (NIL): 'ALAG2 hr' — extend the ontology if this is a real PK parameter (source ['Melhem_2013:abstract'])
- dropped unlinked row (NIL): 'F1 %' — extend the ontology if this is a real PK parameter (source ['Melhem_2013:abstract'])
- dropped unlinked row (NIL): 'ALAG1 hr' — extend the ontology if this is a real PK parameter (source ['Melhem_2013:abstract'])
- dropped duplicate Q49 ('KA2 1/hr', value 0.434) — already have one for this compound
- dropped unlinked row (NIL): 'CRE none' — extend the ontology if this is a real PK parameter (source ['Melhem_2013:abstract'])
- dropped unlinked row (NIL): 'BSE none' — extend the ontology if this is a real PK parameter (source ['Melhem_2013:abstract'])
- dropped unlinked row (NIL): 'Log_RV SD' — extend the ontology if this is a real PK parameter (source ['Melhem_2013:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=hydrocodone
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from cached Melhem_2013_extracted.txt (13 record(s)); values are summary statistics, not a fitted model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Melhem_2013:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Melhem_2013:abstract'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['Melhem_2013:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Melhem_2013:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Melhem_2013:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Melhem_2013:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 64.3 | not captured | not captured | ['Melhem_2013:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 64.3 L/h | not captured | not captured | ['Melhem_2013:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 713 L | not captured | not captured | ['Melhem_2013:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 153 L | not captured | not captured | ['Melhem_2013:abstract'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_hydrocodone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Melhem_2013` / `Melhem_2013::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_hydrocodone/Hydrocodone_Melhem2013_reference/Hydrocodone_Melhem2013_reference_modelica.zip" download>Hydrocodone_Melhem2013_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_hydrocodone/Hydrocodone_Melhem2013_reference/Hydrocodone_Melhem2013_reference_matlab.zip" download>Hydrocodone_Melhem2013_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_hydrocodone/Hydrocodone_Melhem2013_reference/Hydrocodone_Melhem2013_reference_matlab_simbio.zip" download>Hydrocodone_Melhem2013_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_hydrocodone/Hydrocodone_Melhem2013_reference/Hydrocodone_Melhem2013_reference_sbml.zip" download>Hydrocodone_Melhem2013_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_hydrocodone/Hydrocodone_Melhem2013_reference/Hydrocodone_Melhem2013_reference_cellml.zip" download>Hydrocodone_Melhem2013_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
