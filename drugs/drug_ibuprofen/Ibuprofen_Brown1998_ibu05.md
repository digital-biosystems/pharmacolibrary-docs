<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;ibuprofen&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/&quot;},{&quot;label&quot;:&quot;Brown_1998 \u00b7 ibu05&quot;}]"></div>

# ibuprofen — `Ibuprofen_Brown1998_ibu05`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `AUC∞`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the model was built differently from what the record describes; the engineer's deviations are not documented and quantified. Evidence: T3_param_coverage — expected 5 scholar param(s) emitted or defaulted — got 4 covered; T6_deviations — got defaulted_parameters: structural deviation not quantified.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
3. If the paper never reports it, the record cannot become a model.
4. Open the emitted .mo and compare its base class and parameters with the record.
5. Check the .deviation.json beside it for what the engineer defaulted or assumed.
6. A wrong base class or a defaulted core parameter means rebuilding, not curating.

<sub>owner: **scholar** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Brown RD; Kearns GL; Wilson JT et al. (1998). Journal of pharmacokinetics and biopharmaceutics 26
  ·  DOI: [10.1023/a:1023225217108](https://doi.org/10.1023/a:1023225217108)

## Model component
<dbs-pgx drug="ibuprofen" model-id="Ibuprofen_Brown1998_ibu05" status="model_quarantined" stale="false" population="febrile children" measured-compound="ibuprofen" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tlag (hr) x̄ | `Q83` · tlag | —(suppressed) | hr | — | [h] | not captured | exact (1.0) | Brown_1998_table_3:row0:col2 | — | not captured |
| ka (hr-1) x̄ | `Q49` · kabs | —(suppressed) | hr-1 | — | [1] / [h] | not captured | exact (1.0) | Brown_1998_table_3:row2:col2 | — | not captured |
| β (hr-1) x̄ | `Q47` · kel | —(suppressed) | hr-1 | — | [1] / [h] | not captured | exact (1.0) | Brown_1998_table_3:row4:col2 | — | not captured |
| T1/2 (hr) x̄ | `Q57` · t1/2z | —(suppressed) | hr | — | [h] | not captured | exact (1.0) | Brown_1998_table_3:row6:col2 | — | not captured |
| AUC0→∞ (µg/ml*hr) x̄ | `Q17` · AUC∞ | —(suppressed) | µg/ml*hr | — | [µg] / [[h] · [ml]] | not captured | exact (1.0) | Brown_1998_table_4:row0:col2 | — | not captured |
| Va/F (L/kg) x̄ | `Q76` · V/F | —(suppressed) | L/kg | — | [l] / [kg] | not captured | llm (0.6) | Brown_1998_table_4:row2:col2 | — | not captured |
| CLp/F (L/kg/hr) x̄ | `Q27` · CL/F | —(suppressed) | L/kg/hr | — | [l] / [[h] · [kg]] | not captured | special_case (0.95) | Brown_1998_table_4:row4:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'tlag (hr) SE' — extend the ontology if this is a real PK parameter (source ['Brown_1998_table_3:row1:col2'])
- dropped unlinked row (NIL): 'ka (hr-1) SE' — extend the ontology if this is a real PK parameter (source ['Brown_1998_table_3:row3:col2'])
- dropped unlinked row (NIL): 'β (hr-1) SE' — extend the ontology if this is a real PK parameter (source ['Brown_1998_table_3:row5:col2'])
- dropped unlinked row (NIL): 'T1/2 (hr) SE' — extend the ontology if this is a real PK parameter (source ['Brown_1998_table_3:row7:col2'])
- dropped unlinked row (NIL): 'Total n' — extend the ontology if this is a real PK parameter (source ['Brown_1998_table_3:row8:col2', 'Brown_1998_table_4:row6:col2'])
- dropped unlinked row (NIL): 'AUC0→∞ (µg/ml*hr) SE' — extend the ontology if this is a real PK parameter (source ['Brown_1998_table_4:row1:col2'])
- dropped unlinked row (NIL): 'Va/F (L/kg) SE' — extend the ontology if this is a real PK parameter (source ['Brown_1998_table_4:row3:col2'])
- dropped unlinked row (NIL): 'CLp/F (L/kg/hr) SE' — extend the ontology if this is a real PK parameter (source ['Brown_1998_table_4:row5:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ibuprofen
- population split: 'ibu05' subgroup of Brown_1998 (paper reports 2 populations: ibu05, ibu10)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 3, 4
- transposed table Brown_1998_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- transposed table Brown_1998_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- skipped illustrative/example figure caption(s) fig_1, fig_2, fig_3 — per-individual fit, not model parameters

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 1.82 | 1.386 | 0.7615 | 0.25 | reported t½β |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Brown_1998_table_4:row0:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Brown_1998_table_4:row4:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Brown_1998_table_3:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Brown_1998_table_3:row2:col2'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Brown_1998_table_3:row6:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Brown_1998_table_4:row2:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Brown_1998_table_3:row0:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 5.6 L/h | not captured | not captured | ['Brown_1998_table_4:row4:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 11.2 L | not captured | not captured | ['Brown_1998_table_4:row2:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | fail | 5 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['tlag'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: structural deviation not quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | skipped | 1.82 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.44 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.37 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.83 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.75 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 2.15 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ibuprofen/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Brown_1998` / `Brown_1998::ibu05`)
- model: `../../../knowledgebase/drugs/drug_ibuprofen/models/modelica/_needs_review/Ibuprofen_Brown1998_ibu05.mo`
- deviation: `../../../knowledgebase/drugs/drug_ibuprofen/models/modelica/_needs_review/Ibuprofen_Brown1998_ibu05.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ibuprofen/Ibuprofen_Brown1998_ibu05/Ibuprofen_Brown1998_ibu05_matlab.zip" download>Ibuprofen_Brown1998_ibu05_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ibuprofen/Ibuprofen_Brown1998_ibu05/Ibuprofen_Brown1998_ibu05_matlab_simbio.zip" download>Ibuprofen_Brown1998_ibu05_matlab_simbio.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ibuprofen/Ibuprofen_Brown1998_ibu05/Ibuprofen_Brown1998_ibu05_sbml.zip" download>Ibuprofen_Brown1998_ibu05_sbml.zip</a> <span class="pk-size">(2.3 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ibuprofen/Ibuprofen_Brown1998_ibu05/Ibuprofen_Brown1998_ibu05_cellml.zip" download>Ibuprofen_Brown1998_ibu05_cellml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
