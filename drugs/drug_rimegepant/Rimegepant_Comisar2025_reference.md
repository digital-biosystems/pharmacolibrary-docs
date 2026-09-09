# rimegepant — `Rimegepant_Comisar2025_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
not matched (stem Comisar_2025)

## Model component
<dbs-pgx drug="rimegepant" model-id="Rimegepant_Comisar2025_reference" status="extracted" stale="false" population="pediatric and adult patients with migraine" measured-compound="rimegepant" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q27` · CL/F | 25.2 | not captured | not captured | not captured | 32.3 | llm_confirmed (0.6) | cts70360-tbl-0002:row1:col1, cts70360-tbl-0002:row1:col2 | — | not captured |
| V1/F, L | `Q290` · V1/F | 113 | not captured | not captured | not captured | 41.0 | llm_confirmed (0.6) | cts70360-tbl-0002:row2:col1, cts70360-tbl-0002:row2:col2 | — | None (67.8% RSE) |
| V2/F, L | `Q82` · V2/F | 46.8 | not captured | not captured | not captured | 25.8 | llm_confirmed (0.6) | cts70360-tbl-0002:row3:col1, cts70360-tbl-0002:row3:col2 | — | not captured |
| Q/F, L/h | `Q69` · Q/F | 4.16 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | cts70360-tbl-0002:row4:col1 | — | not captured |
| k a, 1/h | `Q95` · t1/2ka | 3.05 | not captured | not captured | not captured | not captured | llm (0.6) | cts70360-tbl-0002:row6:col1 | — | not captured |
| fed_on_f1 | `Q900` · fed_on_f1 | -0.331 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70360-tbl-0002:row10:col1 | — | not captured |
| capsule_formulation_on_k_tr | `Q900` · capsule_formulation_on_k_tr | 2.19 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70360-tbl-0002:row13:col1 | — | not captured |
| body_weight_effect_on_cl_f_and_q_f | `Q900` · body_weight_effect_on_cl_f_and_q_f | 0.575 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70360-tbl-0002:row18:col1 | — | not captured |
| body_weight_effect_on_v1_f_and_v2_f | `Q900` · body_weight_effect_on_v1_f_and_v2_f | 1.18 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70360-tbl-0002:row19:col1 | — | not captured |
| theta_cl_f_hepatic | `Q900` · theta_cl_f_hepatic | -0.410 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70360-tbl-0002:row8:col1 | — | not captured |
| theta_q338_fed | `Q900` · theta_q338_fed | -0.698 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70360-tbl-0002:row11:col1 | — | not captured |
| theta_cl_f_hepatic | `Q900` · theta_cl_f_hepatic | -0.203 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70360-tbl-0002:row15:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'k tr, 1/h' → Q338 (ktr, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cts70360-tbl-0002:row5:col1', 'cts70360-tbl-0002:row5:col2'])
- dropped duplicate Q27 ('Fluconazole use on CL/F', value '-0.429') — already have one for this compound
- dropped duplicate Q27 ('Itraconazole use on CL/F', value '-0.744') — already have one for this compound
- covariate level 'Fed on F1' → Q900:fed_on_f1 = -0.331 (linear_fractional on Q27)
- dropped PD-category row 'ODT on k tr' → Q338 (ktr, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cts70360-tbl-0002:row12:col1'])
- covariate level 'Capsule formulation on k tr' → Q900:capsule_formulation_on_k_tr = 2.19 (linear_fractional on Q27)
- dropped PD-category row 'Itraconazole use on k tr' → Q338 (ktr, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cts70360-tbl-0002:row14:col1'])
- dropped unlinked row (NIL): 'Dose effect on F1' — extend the ontology if this is a real PK parameter (source ['cts70360-tbl-0002:row16:col1'])
- dropped PD-category row '10/25 mg dose effect on k tr a' → Q338 (ktr, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cts70360-tbl-0002:row17:col1'])
- covariate level 'Body weight effect on CL/F and Q/F' → Q900:body_weight_effect_on_cl_f_and_q_f = 0.575 (linear_fractional on Q27)
- covariate level 'Body weight effect on V1/F and V2/F' → Q900:body_weight_effect_on_v1_f_and_v2_f = 1.18 (linear_fractional on Q27)
- dropped value-less row: 'ω1,2: CL/F:V1/F'
- dropped value-less row: 'ω1,3: CL/F:V2/F'
- covariate effect for Q338 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=rimegepant

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_rimegepant/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Comisar_2025` / `Comisar_2025::reference`)


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
