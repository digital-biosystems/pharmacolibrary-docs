# clopidogrel — `Clopidogrel_Jung2024_population_mean`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Jung YS; Jin BH; Park MS; Kim CO; Chae D et al. (2024). CPT: pharmacometrics & systems pharmacology 13
  ·  DOI: [10.1002/psp4.13053](https://doi.org/10.1002/psp4.13053)

## Model component
<dbs-pgx drug="clopidogrel" model-id="Clopidogrel_Jung2024_population_mean" status="needs_review" stale="false" population="healthy male participants" measured-compound="clopidogrel" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V c (=VH) (L) | `Q63` · V1 | —(suppressed) | L | — | [l] | not captured | space_fold (0.95) | psp413053-tbl-0002:row2:col1 | — | not captured |
| V p (L) | `Q64` · V2 | —(suppressed) | L | — | [l] | not captured | space_fold (0.95) | psp413053-tbl-0002:row3:col1 | — | not captured |
| CLc (L/h) | `Q22` · CL | —(suppressed) | L/h | — | [l] / [h] | not captured | central_subscript (0.9) | psp413053-tbl-0002:row4:col1 | — | not captured |
| Q c (L/h) | `Q30` · Q | —(suppressed) | L/h | — | [l] / [h] | not captured | llm (0.6) | psp413053-tbl-0002:row6:col1 | — | not captured |
| k a (h−1) | `Q49` · kabs | —(suppressed) | h−1 | — | [1] / [h] | not captured | space_fold (0.95) | psp413053-tbl-0002:row8:col1 | — | not captured |
| T lag (h) | `Q83` · tlag | —(suppressed) | h | — | [h] | not captured | space_fold (0.95) | psp413053-tbl-0002:row9:col1 | — | not captured |
| fm1 | `Q45` · fm | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | psp413053-tbl-0002:row12:col1 | — | not captured |
| V m2 (L) | `Q61` · V | —(suppressed) | L | — | [l] | not captured | llm (0.6) | psp413053-tbl-0002:row20:col1 | — | not captured |
| V p2 (L) | `Q77` · V3 | —(suppressed) | L | — | [l] | not captured | space_fold (0.95) | psp413053-tbl-0002:row21:col1 | — | not captured |
| theta_fm_im_power | `Q900` · theta_fm_im_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | psp413053-tbl-0002:row13:col1 | — | not captured |
| theta_fm_pm_power | `Q900` · theta_fm_pm_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | psp413053-tbl-0002:row14:col1 | — | not captured |
| theta_fm_im_power | `Q900` · theta_fm_im_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | psp413053-tbl-0002:row16:col1 | — | not captured |
| theta_fm_pm_power | `Q900` · theta_fm_pm_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | psp413053-tbl-0002:row17:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q30 ('Q p (L/h)', value '587.93') — already have one for this compound
- dropped unlinked row (NIL): 'fm2' — extend the ontology if this is a real PK parameter (source ['psp413053-tbl-0002:row15:col1'])
- dropped duplicate Q63 ('V m1 (L)', value '51.45') — already have one for this compound
- dropped duplicate Q22 ('CLm1 (L/h)', value '74.25') — already have one for this compound
- dropped duplicate Q22 ('CLm2 (L/h)', value '7.248') — already have one for this compound
- dropped duplicate Q30 ('Q m2 (L/h)', value '4.476') — already have one for this compound
- dropped PD-category row 'K in' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413053-tbl-0002:row27:col1'])
- dropped PD-category row 'K out (h−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413053-tbl-0002:row28:col1'])
- dropped PD-category row 'E max' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413053-tbl-0002:row29:col1'])
- dropped PD-category row 'EC50 (ng/mL)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413053-tbl-0002:row30:col1'])
- dropped PD-category row 'Hill' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413053-tbl-0002:row31:col1'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (V c (=VH) (L)); Q64 (V p (L)); Q22 (CLc (L/h)); Q30 (Q c (L/h)); Q61 (V m2 (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clopidogrel
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- population split: 'population mean' subgroup of Jung_2024 (paper reports 2 populations: population mean, standard deviation)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Ground-truth comparison:** <span class="pk-badge pk-badge--orange">unconfirmed</span>  (0/10 matched, agreement 0.0, tol 0.25)

| o_id | agreement | extracted | truth | fold |
|---|---|---|---|---|
| `Q22` · CL | missing_in_extraction | None | 9257.28 | not captured |
| `Q30` · Q | missing_in_extraction | None | 587.93 | not captured |
| `Q351` · CLm/F | missing_in_extraction | None | 74.25 | not captured |
| `Q367` · Vm/F | missing_in_extraction | None | 51.45 | not captured |
| `Q45` · fm | missing_in_extraction | None | 0.125 | not captured |
| `Q49` · kabs | missing_in_extraction | None | 19.64 | not captured |
| `Q63` · V1 | missing_in_extraction | None | 1463.92 | not captured |
| `Q64` · V2 | missing_in_extraction | None | 2823.98 | not captured |
| `Q83` · tlag | missing_in_extraction | None | 0.196 | not captured |
| `Q900` · equation variable | missing_in_extraction | None | 4.476 | not captured |

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413053-tbl-0002:row4:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413053-tbl-0002:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp413053-tbl-0002:row8:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413053-tbl-0002:row20:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413053-tbl-0002:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413053-tbl-0002:row3:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413053-tbl-0002:row21:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['psp413053-tbl-0002:row9:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 9257.28 | not captured | not captured | ['psp413053-tbl-0002:row4:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.26e+03 L/h | not captured | not captured | ['psp413053-tbl-0002:row4:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 17.3 L | not captured | not captured | ['psp413053-tbl-0002:row20:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.46e+03 L | not captured | not captured | ['psp413053-tbl-0002:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.82e+03 L | not captured | not captured | ['psp413053-tbl-0002:row3:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_clopidogrel/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jung_2024` / `Jung_2024::population_mean`)


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
