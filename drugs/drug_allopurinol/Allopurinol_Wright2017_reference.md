# allopurinol — `Allopurinol_Wright2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `allopurinol`, measured `oxypurinol`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Wright DF; Doogue MP; Barclay ML; Chapman PT; Cross NB; Irvine JH; et al. et al. (2017). European journal of clinical pharmacology 73
  ·  DOI: [10.1007/s00228-016-2133-y](https://doi.org/10.1007/s00228-016-2133-y)

## Model component
<dbs-pgx drug="allopurinol" model-id="Allopurinol_Wright2017_reference" status="rejected" stale="false" population="" measured-compound="oxypurinol" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ CL (L/h/70 kg | `Q22` · CL | —(suppressed) | L/h/70 kg | — | [l] / [[h] · [70kg]] | not captured | boundary (0.8) | tab_1:row3:col1 | categorical_fractional on BCRP={'AA': 0.0, 'CA': 0.0539, 'CC': 0.0183} (AA) | not captured |
| θ CLHD (L/h) | `Q356` · CL_HD | —(suppressed) | L/h | — | [l] / [h] | not captured | boundary_relink (0.8) | tab_1:row5:col1 | categorical_fractional on BCRP={'AA': 0.0, 'CA': 0.0539, 'CC': 0.0183} (AA) | not captured |
| θ V (L/70 kg TBW) | `Q61` · V | —(suppressed) | L/70 kg TBW | — | [l] / [70kgtbw] | not captured | llm (0.5) | tab_1:row6:col1 | — | not captured |
| K a (h -1 ) | `Q95` · t1/2ka | —(suppressed) | h -1 | — | [1] / [h] | not captured | llm (0.5) | tab_1:row7:col1 | — | not captured |
| absorption rate | `Q49` · kabs | —(suppressed) | h−1 | — | 1/h | not captured | review_gapfill (0.7) | Ekobena_2025:review | — | not captured |
| lag time | `Q83` · tlag | —(suppressed) | h | — | h | not captured | review_gapfill (0.7) | Ekobena_2025:review | — | not captured |
| BCRP | `Q900` · BCRP | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | pgx | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'L/70 kg TBW' (V)
- unit_dimension_mismatch: 'K a (h -1 )' → Q95 (unit '1 / [time]' vs ontology '[time]') — route to review
- dropped unlinked row (NIL): 'θ RFexp' — extend the ontology if this is a real PK parameter (source ['tab_1:row8:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=oxypurinol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Ekobena_2025's review values (primary lacked it)
- gap-filled Q83 (tlag) from Ekobena_2025's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_1:row3:col2 = '1.25 [0.90-1.87]'
- unparsed cell tab_1:row5:col2 = '8.48 [7.29-11.4]'
- unparsed cell tab_1:row6:col2 = '48.6 [43.7-54.9]'
- unparsed cell tab_1:row7:col2 = '0.94 [0.67-1.33]'
- unparsed cell tab_1:row8:col2 = '0.59 [0.28-1.47]'
- unparsed cell tab_1:row10:col2 = '32.2 [8.9-53.0]'
- unparsed cell tab_1:row11:col2 = '19.8 [5.0-27.7]'
- unparsed cell tab_1:row12:col2 = '72.6 [43.2-96.0]'
- unparsed cell tab_1:row13:col2 = '0.014 [-0.026-0.094]'
- unparsed cell tab_1:row16:col2 = '9.9 [7.4-13.1]'
- unparsed cell tab_1:row18:col2 = '20.8 [17.1-25.4]'
- LLM region Wright_2017:results_prose: no JSON records returned
- LLM region Wright_2017:discussion_prose: no JSON records returned

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row3:col1'] |
| C5_dimension_Q356 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Ekobena_2025:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Ekobena_2025:review'] |
| C5_dimension_Q95 | fail | 1 / [time] | h -1 | not captured | not captured | ['tab_1:row7:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.2 | not captured | not captured | ['tab_1:row3:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.2 L/h | not captured | not captured | ['tab_1:row3:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_allopurinol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wright_2017` / `Wright_2017::reference`)


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
