# metformin — `Metformin_Choi2018_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Choi S; Jeon S; Han S et al. (2018). Translational and clinical pharmacology 26
  ·  DOI: [10.12793/tcp.2018.26.1.25](https://doi.org/10.12793/tcp.2018.26.1.25)

## Model component
<dbs-pgx drug="metformin" model-id="Metformin_Choi2018_reference" status="rejected" stale="false" population="healthy adults" measured-compound="metformin" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | —(suppressed) | L/h | — | [l] / [h] | 3.62 | exact (1.0) | T3:row2:col2, T3:row2:col3 | — | not captured |
| Vc/F (L) | `Q290` · V1/F | —(suppressed) | L | — | [l] | 10.2 | exact (1.0) | T3:row3:col2, T3:row3:col3 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | —(suppressed) | L/h | — | [l] / [h] | 14.1 | exact (1.0) | T3:row4:col2, T3:row4:col3 | — | not captured |
| Vp/F (L) | `Q82` · V2/F | —(suppressed) | L | — | [l] | 6.50 | exact (1.0) | T3:row5:col2, T3:row5:col3 | — | not captured |
| Ka1 (1/h) | `Q95` · t1/2ka | —(suppressed) | not captured | — | not captured | 15.3 | llm (0.6) | T3:row6:col2, T3:row6:col3 | — | not captured |
| F1 | `Q40` · Fab | —(suppressed) | not captured | — | not captured | 20.5 | exact (1.0) | T3:row8:col2, T3:row8:col3 | — | not captured |
| ωKa (%) | `Q49` · kabs | —(suppressed) | not captured | — | not captured | 24.4 | llm_confirmed (0.6) | T3:row15:col2, T3:row15:col3 | — | not captured |
| ABCG2 | `Q900` · ABCG2 | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC22A1 | `Q900` · SLC22A1 | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC22A3 | `Q900` · SLC22A3 | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC22A4 | `Q900` · SLC22A4 | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| SLC47A2 | `Q900` · SLC47A2 | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | pgx | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'D2 (1/h)' — extend the ontology if this is a real PK parameter (source ['T3:row9:col2', 'T3:row9:col3'])
- dropped unlinked row (NIL): 'ALAG2 (h)' — extend the ontology if this is a real PK parameter (source ['T3:row10:col2', 'T3:row10:col3'])
- dropped duplicate Q27 ('ωCL/F (%)', value '19.8') — already have one for this compound
- dropped duplicate Q290 ('ωVc/F (%)', value '32.8') — already have one for this compound
- dropped unlinked row (NIL): 'ρCL/F~Vc/F' — extend the ontology if this is a real PK parameter (source ['T3:row16:col2', 'T3:row16:col3'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=metformin
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T3:row2:col4 = '77.2 (71.7–83.0)'
- unparsed cell T3:row3:col4 = '194 (139–269)'
- unparsed cell T3:row4:col4 = '19.4 (11.1–29.8)'
- unparsed cell T3:row5:col4 = '105 (82.0–127)'
- unparsed cell T3:row6:col4 = '1.21 (0.873–1.66)'
- unparsed cell T3:row8:col4 = '0.314 (0.202–0.484)'
- unparsed cell T3:row9:col4 = '4.44 (3.07–4.75)'
- unparsed cell T3:row10:col4 = '0.250 (0.249–0.251)'
- unparsed cell T3:row11:col4 = '0.939 (0.888–0.991)'
- unparsed cell T3:row13:col4 = '19.6 (15.5–23.1)'
- unparsed cell T3:row14:col4 = '29.7 (21.4–40.7)'
- unparsed cell T3:row15:col4 = '56.7 (38.5–75.7)'
- unparsed cell T3:row16:col4 = '0.223 (0.190–0.268)'
- unparsed cell T3:row18:col4 = '0.254 (0.232–0.283)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T3:row2:col2', 'T3:row2:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['T3:row3:col2', 'T3:row3:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T3:row4:col2', 'T3:row4:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['T3:row5:col2', 'T3:row5:col3'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.94 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 76.7 L/h | not captured | not captured | ['T3:row2:col2', 'T3:row2:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 180 L | not captured | not captured | ['T3:row3:col2', 'T3:row3:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 109 L | not captured | not captured | ['T3:row5:col2', 'T3:row5:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_metformin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Choi_2018` / `Choi_2018::reference`)


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
