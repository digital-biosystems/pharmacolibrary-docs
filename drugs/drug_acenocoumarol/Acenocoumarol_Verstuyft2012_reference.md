# acenocoumarol — `Acenocoumarol_Verstuyft2012_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `fluindione, acenocoumarol`, measured `fluindione, S-acenocoumarol`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Verstuyft C; Delavenne X; Rousseau A; Robert A; Tod M; Diquet B; et al. et al. (2012). Clinical pharmacokinetics 51
  ·  DOI: [10.2165/11595560-000000000-00000](https://doi.org/10.2165/11595560-000000000-00000)

## Model component
<dbs-pgx drug="acenocoumarol" model-id="Acenocoumarol_Verstuyft2012_reference" status="extracted" stale="false" population="healthy adults" measured-compound="fluindione, S-acenocoumarol" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (h-1) | `Q49` · kabs | 1.83 | h-1 | 0.0005083333333333334 | [1] / [h] | 26 | exact (1.0) | Verstuyft_2012_table_p7_1:row1:col1, Verstuyft_2012_table_p7_1:row1:col2 | — | not captured |
| θ2 | `Q900` · equation variable | 0.17 | not captured | not captured | not captured | 8 | llm (0.6) | Verstuyft_2012_table_p7_1:row3:col1, Verstuyft_2012_table_p7_1:row3:col2 | — | not captured |
| Q (L/h) | `Q30` · Q | 0.173 | L/h | 4.8055555555555554e-08 | [l] / [h] | 27 | exact (1.0) | Verstuyft_2012_table_p7_1:row10:col1, Verstuyft_2012_table_p7_1:row10:col2 | — | not captured |
| V2 (L) | `Q64` · V2 | 2.77 | L | 0.00277 | [l] | 20 | exact (1.0) | Verstuyft_2012_table_p7_1:row11:col1, Verstuyft_2012_table_p7_1:row11:col2 | — | not captured |
| ωCL | `Q22` · CL | 0.18 | not captured | not captured | not captured | 40 | llm_confirmed (0.6) | Verstuyft_2012_table_p7_1:row20:col1, Verstuyft_2012_table_p7_1:row20:col2 | — | not captured |
| volume of distribution | `Q61` · V | 4.7 | L/kg | 0.329 | L | not captured | review_gapfill (0.7) | Chen_2024:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q900 ('θ3', value '0.75') — already have one for this compound
- dropped duplicate Q900 ('θ4', value '0.617') — already have one for this compound
- dropped duplicate Q900 ('θ5', value '-0.363') — already have one for this compound
- dropped unlinked row (NIL): 'θ6' — extend the ontology if this is a real PK parameter (source ['Verstuyft_2012_table_p7_1:row8:col1', 'Verstuyft_2012_table_p7_1:row8:col2'])
- dropped unlinked row (NIL): 'θ7' — extend the ontology if this is a real PK parameter (source ['Verstuyft_2012_table_p7_1:row9:col1'])
- dropped unlinked row (NIL): 'θ10' — extend the ontology if this is a real PK parameter (source ['Verstuyft_2012_table_p7_1:row13:col1', 'Verstuyft_2012_table_p7_1:row13:col2'])
- dropped duplicate Q900 ('θ11', value '0.3') — already have one for this compound
- dropped PD-category row 'kin (h-1)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Verstuyft_2012_table_p7_1:row15:col1', 'Verstuyft_2012_table_p7_1:row15:col2'])
- dropped PD-category row 'kout (h-1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Verstuyft_2012_table_p7_1:row16:col1', 'Verstuyft_2012_table_p7_1:row16:col2'])
- dropped PD-category row 'γ' → Q343 (weibull_shape, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Verstuyft_2012_table_p7_1:row17:col1', 'Verstuyft_2012_table_p7_1:row17:col2'])
- routed 'ωka' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'ωV1' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped PD-category row 'ωC50' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Verstuyft_2012_table_p7_1:row22:col1', 'Verstuyft_2012_table_p7_1:row22:col2'])
- dropped PD-category row 'ωkin' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Verstuyft_2012_table_p7_1:row23:col1', 'Verstuyft_2012_table_p7_1:row23:col2'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q30 (Q (L/h)); Q64 (V2 (L)); Q22 (ωCL)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fluindione, S-acenocoumarol
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- gap-filled Q61 (V) from Chen_2024's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Verstuyft_2012_table_p7_1:row10:col1', 'Verstuyft_2012_table_p7_1:row10:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Verstuyft_2012_table_p7_1:row1:col1', 'Verstuyft_2012_table_p7_1:row1:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Chen_2024:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Verstuyft_2012_table_p7_1:row11:col1', 'Verstuyft_2012_table_p7_1:row11:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.18 | not captured | not captured | ['Verstuyft_2012_table_p7_1:row20:col1', 'Verstuyft_2012_table_p7_1:row20:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 329 L | not captured | not captured | ['Chen_2024:review'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.77 L | not captured | not captured | ['Verstuyft_2012_table_p7_1:row11:col1', 'Verstuyft_2012_table_p7_1:row11:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_acenocoumarol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Verstuyft_2012` / `Verstuyft_2012::reference`)


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
