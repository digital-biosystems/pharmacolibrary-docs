# prednisolone — `Prednisolone_de2023_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `MTT`, `KD`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** a structural parameter has the wrong dimension; a parameter falls outside the physiological window.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Compare unit_verbatim with unit_canonical in _interpretv2.yaml for that parameter.
3. A misread unit in transcribe is the usual cause.
4. Confirm the value and unit against the paper before treating it as an error.

<sub>owner: **curator** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `prednisone`, measured `prednisolone`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
de Truchis C; Bouazza N; Foissac F; Charbit M; Dehoux L; Lui G; et al. et al. (2023). British journal of clinical pharmacology 89
  ·  DOI: [10.1111/bcp.15610](https://doi.org/10.1111/bcp.15610)

## Model component
<dbs-pgx drug="prednisolone" model-id="Prednisolone_de2023_reference" status="rejected" stale="false" population="paediatric kidney transplant recipients" measured-compound="prednisolone" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ktr (h-1) | `Q306` · ktr | —(suppressed) | h-1 | — | [1] / [h] | not captured | exact (1.0) | de_2023_table_p5_1:row1:col1, de_2023_table_p5_1:row1:col2 | — | not captured |
| Mtt (h) | `Q81` · MTT | —(suppressed) | h | — | [h] | not captured | exact (1.0) | de_2023_table_p5_1:row2:col1, de_2023_table_p5_1:row2:col2 | — | not captured |
| VU (L/70 kg) | `Q352` · Vnorm | —(suppressed) | L/70 kg | — | [l] / [70kg] | not captured | llm (0.6) | de_2023_table_p5_1:row3:col1, de_2023_table_p5_1:row3:col2 | — | not captured |
| CLU (L/h/70 kg) | `Q24` · CLu | —(suppressed) | L/h/70 kg | — | [l] / [[h] · [70kg]] | not captured | exact (1.0) | de_2023_table_p5_1:row4:col1, de_2023_table_p5_1:row4:col2 | — | not captured |
| Bmax | `Q332` · Bmax | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | de_2023_table_p5_1:row5:col1 | — | not captured |
| K1 (nmol) | `Q331` · KD | —(suppressed) | nmol | — | [nM] | not captured | llm (0.6) | de_2023_table_p5_1:row6:col1 | — | not captured |
| V Glu1 | `Q61` · V | —(suppressed) | L | — | L | not captured | review_gapfill (0.7) | Tan_2024:review | — | not captured |
| t lag,oral | `Q83` · tlag | —(suppressed) | hour | — | h | not captured | review_gapfill (0.7) | Tan_2024:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'K1 (nmol)' → Q331 (unit '[substance]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Kns' — extend the ontology if this is a real PK parameter (source ['de_2023_table_p5_1:row7:col1'])
- dropped unlinked row (NIL): 'βciclosporine/CLU' — extend the ontology if this is a real PK parameter (source ['de_2023_table_p5_1:row8:col1', 'de_2023_table_p5_1:row8:col2'])
- dropped duplicate Q81 ('Ω Mtt', value '0.755') — already have one for this compound
- dropped duplicate Q24 ('Ω CLU', value '0.429') — already have one for this compound
- dropped unlinked row (NIL): 'Ω K1' — extend the ontology if this is a real PK parameter (source ['de_2023_table_p5_1:row12:col1', 'de_2023_table_p5_1:row12:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=prednisolone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- gap-filled Q61 (V) from Tan_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Tan_2024's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q24 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['de_2023_table_p5_1:row4:col1', 'de_2023_table_p5_1:row4:col2'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['de_2023_table_p5_1:row1:col1', 'de_2023_table_p5_1:row1:col2'] |
| C5_dimension_Q331 | fail | [substance] | nmol | not captured | not captured | ['de_2023_table_p5_1:row6:col1'] |
| C5_dimension_Q352 | pass | [length] ** 3 | not captured | not captured | not captured | ['de_2023_table_p5_1:row3:col1', 'de_2023_table_p5_1:row3:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tan_2024:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tan_2024:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 27.6 | not captured | not captured | ['de_2023_table_p5_1:row4:col1', 'de_2023_table_p5_1:row4:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q24 | pass | clearance within physiological range | 27.6 L/h | not captured | not captured | ['de_2023_table_p5_1:row4:col1', 'de_2023_table_p5_1:row4:col2'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.3 L | not captured | not captured | ['Tan_2024:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_prednisolone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `de_2023` / `de_2023::paediatric kidney transplant recipients`)


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
