# gabapentin — `Gabapentin_Zhou2026_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `λ2`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** a structural parameter has the wrong dimension.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Compare unit_verbatim with unit_canonical in _interpretv2.yaml for that parameter.
3. A misread unit in transcribe is the usual cause.

<sub>owner: **curator** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Zhou L; Yamamoto PA; Walker M; Conchon Costa AC; Lauretti GR; Dach F; et al. et al. (2026). Frontiers in pharmacology 17
  ·  DOI: [10.3389/fphar.2026.1760901](https://doi.org/10.3389/fphar.2026.1760901)

## Model component
<dbs-pgx drug="gabapentin" model-id="Gabapentin_Zhou2026_reference" status="rejected" stale="false" population="adults with chronic neuropathic pain" measured-compound="gabapentin" parameterization="apparent" topology="3C"></dbs-pgx>

**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tlag (h) | `Q83` · tlag | —(suppressed) | h | — | [h] | not captured | exact (1.0) | T1:row2:col1 | — | not captured |
| ka (h-1) | `Q49` · kabs | —(suppressed) | h-1 | — | [1] / [h] | not captured | exact (1.0) | T1:row3:col1 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | T1:row4:col1 | — | not captured |
| V1/F (L) | `Q290` · V1/F | —(suppressed) | L | — | [l] | not captured | exact (1.0) | T1:row6:col1 | — | not captured |
| Q (L/h) | `Q30` · Q | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | T1:row7:col1 | — | not captured |
| V2/F (L) | `Q82` · V2/F | —(suppressed) | L | — | [l] | not captured | exact (1.0) | T1:row8:col1 | — | not captured |
| ke1 (h-1) | `Q47` · kel | —(suppressed) | h-1 | — | [1] / [h] | not captured | llm (0.6) | T1:row9:col1 | — | not captured |
| ke2 (h-1) | `Q68` · λ2 | —(suppressed) | h-1 | — | [1] / [h] | not captured | llm (0.6) | T1:row13:col1 | — | not captured |
| ωCL | `Q22` · CL | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | T1:row18:col1 | — | not captured |
| ωV1 | `Q63` · V1 | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | T1:row19:col1 | — | not captured |
| theta_cl_f_egfr_power | `Q900` · theta_cl_f_egfr_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | T1:row5:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'OCT2 on ke1' — extend the ontology if this is a real PK parameter (source ['T1:row10:col1'])
- dropped PD-category row 'E0' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T1:row11:col1'])
- dropped PD-category row 'IC50 (ng/mL)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T1:row12:col1'])
- unit_dimension_mismatch: 'ke2 (h-1)' → Q68 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped PD-category row 'Imax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T1:row14:col1'])
- dropped duplicate Q83 ('ωTlag', value '0.52') — already have one for this compound
- dropped duplicate Q49 ('ωka', value '0.15') — already have one for this compound
- dropped duplicate Q30 ('ωQ', value '0.64') — already have one for this compound
- dropped unlinked row (NIL): 'ωke1' — extend the ontology if this is a real PK parameter (source ['T1:row21:col1'])
- dropped PD-category row 'ωE0' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T1:row22:col1'])
- routed 'Additive (a)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- routed 'Proportional (b)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=gabapentin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell T1:row2:col2 = '0.32 (0.23–0.42)'
- unparsed cell T1:row3:col2 = '0.15 (0.13–0.19)'
- unparsed cell T1:row4:col2 = '10.06 (6.57–13.40)'
- unparsed cell T1:row5:col2 = '1.35 (0.56–2.20)'
- unparsed cell T1:row6:col2 = '20.98 (14.43–30.72)'
- unparsed cell T1:row7:col2 = '7.25 (3.82–11.49)'
- unparsed cell T1:row8:col2 = '335.79 (149.49–854.09)'
- unparsed cell T1:row9:col2 = '0.47 (0.14–1.38)'
- unparsed cell T1:row10:col2 = '−2.42 (−4.81–−0.80)'
- unparsed cell T1:row11:col2 = '7.27 (6.01–8.23)'
- unparsed cell T1:row16:col2 = '0.56 (0.37–0.81)'
- unparsed cell T1:row17:col2 = '0.11 (0.037–0.29)'
- unparsed cell T1:row18:col2 = '0.46 (0.32–0.61)'
- unparsed cell T1:row19:col2 = '0.53 (0.30–0.70)'
- unparsed cell T1:row20:col2 = '0.57 (0.34–0.84)'
- unparsed cell T1:row21:col2 = '2.02 (0.91–3.19)'
- unparsed cell T1:row22:col2 = '1.03 (0.47–1.76)'
- unparsed cell T1:row24:col2 = '0.18 (0.13–0.24)'
- unparsed cell T1:row26:col2 = '0.53 (0.36–0.97)'
- unparsed cell T1:row27:col2 = '0.29 (0-0.48)'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q27 | fail | 10.16 | 12.66 | 1.2461 | 0.05 | footnote reference category |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row4:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['T1:row6:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row7:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['T1:row9:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['T1:row3:col1'] |
| C5_dimension_Q68 | fail | 1 / [time] | h-1 | not captured | not captured | ['T1:row13:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['T1:row8:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['T1:row2:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 10.2 L/h | not captured | not captured | ['T1:row4:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 18.2 L | not captured | not captured | ['T1:row6:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 358 L | not captured | not captured | ['T1:row8:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_gabapentin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhou_2026` / `Zhou_2026::adults with chronic neuropathic pain`)


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
