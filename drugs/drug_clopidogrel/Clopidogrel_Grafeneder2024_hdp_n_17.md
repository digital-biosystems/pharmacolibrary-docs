# clopidogrel — `Clopidogrel_Grafeneder2024_hdp_n_17`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `clopidogrel`, measured `clopidogrel active metabolite`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Grafeneder J; van Os W; Minichmayr IK; Kovacevic Miljevic KD; Reiter B; Säemann MD; et al. et al. (2024). Kidney international reports 9
  ·  DOI: [10.1016/j.ekir.2024.07.029](https://doi.org/10.1016/j.ekir.2024.07.029)

## Model component
<dbs-pgx drug="clopidogrel" model-id="Clopidogrel_Grafeneder2024_hdp_n_17" status="extracted" stale="false" population="hemodialysis patients and healthy volunteers" measured-compound="clopidogrel active metabolite" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| intermediate_metabolizer | `Q900` · intermediate_metabolizer | 3 | not captured | not captured | not captured | not captured | not captured (not captured) | tbl2:row20:col2 | — | not captured |
| normal_metabolizer | `Q900` · normal_metabolizer | 6 | not captured | not captured | not captured | not captured | not captured (not captured) | tbl2:row21:col2 | — | not captured |
| rapid_metabolizer | `Q900` · rapid_metabolizer | 7 | not captured | not captured | not captured | not captured | not captured (not captured) | tbl2:row22:col2 | — | not captured |
| ultrarapid_metabolizer | `Q900` · ultrarapid_metabolizer | 1 | not captured | not captured | not captured | not captured | not captured (not captured) | tbl2:row23:col2 | — | not captured |
| CL (L/h) | `Q22` · CL | 8.51 | L/h | 2.363888888888889e-06 | L/h | not captured | review_gapfill (0.7) | Henrich_2021:review | — | not captured |
| ka (1/h) | `Q49` · kabs | 5.95 | 1/h | 0.0016527777777777778 | 1/h | not captured | review_gapfill (0.7) | Henrich_2021:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameter' — extend the ontology if this is a real PK parameter (source ['tbl2:row0:col2'])
- covariate level 'Intermediate metabolizer' → Q900:intermediate_metabolizer = 3 (linear_fractional on the model)
- covariate level 'Normal metabolizer' → Q900:normal_metabolizer = 6 (linear_fractional on the model)
- covariate level 'Rapid metabolizer' → Q900:rapid_metabolizer = 7 (linear_fractional on the model)
- covariate level 'Ultrarapid metabolizer' → Q900:ultrarapid_metabolizer = 1 (linear_fractional on the model)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clopidogrel active metabolite
- population split: 'hdp n = 17' subgroup of Grafeneder_2024 (paper reports 4 populations: hdp, hdp n = 17, hv, hv n = 16)
- gap-filled Q22 (CL) from Henrich_2021's review values (primary lacked it)
- skipped review gap-fill of V from Koh_2025: its label names a different analyte ('asa') — 'central volume of distribution for ASA (V3/F)'
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Henrich_2021's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Grafeneder_2024_table_3:row3:col1 = '1.9 (1.1–2.1)'
- unparsed cell Grafeneder_2024_table_3:row3:col2 = '3.1 (2.9–4.2)'
- unparsed cell Grafeneder_2024_table_3:row3:col4 = '4 (2.1–9.6)'
- unparsed cell Grafeneder_2024_table_3:row3:col5 = '7.6 (4.1–7.9)'
- unparsed cell Grafeneder_2024_table_3:row3:col6 = '10.2 (6.7–19.9)'
- unparsed cell Grafeneder_2024_table_3:row4:col1 = '22.1 (13.3–30.1)'
- unparsed cell Grafeneder_2024_table_3:row4:col2 = '24.8 (17.8–49.5)'
- unparsed cell Grafeneder_2024_table_3:row4:col4 = '5.3 (1.2–73.2)'
- unparsed cell Grafeneder_2024_table_3:row4:col5 = '12.2 (3.6–35.2)'
- unparsed cell Grafeneder_2024_table_3:row4:col6 = '12.2 (5.1–23.4)'
- unparsed cell Grafeneder_2024_table_3:row5:col1 = '13.5 (10.5–18)'
- unparsed cell Grafeneder_2024_table_3:row5:col2 = '8.1 (3.7–28.6)'
- unparsed cell Grafeneder_2024_table_3:row5:col4 = '2.6 (0.1–18.2)'
- unparsed cell Grafeneder_2024_table_3:row5:col5 = '1.6 (0.9–14.7)'
- unparsed cell Grafeneder_2024_table_3:row5:col6 = '1.4 (0.6–1.6)'
- unparsed cell Grafeneder_2024_table_3:row6:col1 = '160 (94–195)'
- unparsed cell Grafeneder_2024_table_3:row6:col2 = '279 (193–461)'
- unparsed cell Grafeneder_2024_table_3:row6:col4 = '389 (184–1599)'
- unparsed cell Grafeneder_2024_table_3:row6:col5 = '628 (525–1068)'
- unparsed cell Grafeneder_2024_table_3:row6:col6 = '641 (594–1729)'
- unparsed cell Grafeneder_2024_table_3:row7:col1 = '1601 (987–1929)'
- unparsed cell Grafeneder_2024_table_3:row7:col2 = '1354 (1124–2452)'
- unparsed cell Grafeneder_2024_table_3:row7:col4 = '994 (527–1731)'
- unparsed cell Grafeneder_2024_table_3:row7:col5 = '156 (1044–2341)'
- unparsed cell Grafeneder_2024_table_3:row7:col6 = '1057 (458–4794)'
- unparsed cell Grafeneder_2024_table_3:row8:col1 = '87.5 (66.1–123)'
- unparsed cell Grafeneder_2024_table_3:row8:col2 = '82 (60.7–139)'
- unparsed cell Grafeneder_2024_table_3:row8:col4 = '132 (132–132)'
- unparsed cell Grafeneder_2024_table_3:row8:col5 = '81.8 (65.6–121)'
- unparsed cell Grafeneder_2024_table_3:row8:col6 = '138 (112–150)'
- unparsed cell Grafeneder_2024_table_3:row9:col1 = '33 (30.6–42.4)'
- unparsed cell Grafeneder_2024_table_3:row9:col2 = '43.2 (35–53.2)'
- unparsed cell Grafeneder_2024_table_3:row9:col4 = '161 (35.8–287)'
- unparsed cell Grafeneder_2024_table_3:row9:col5 = '49.2 (42.6–149)'
- unparsed cell Grafeneder_2024_table_3:row9:col6 = '197 (59.5–384)'
- unparsed cell Grafeneder_2024_table_3:row11:col1 = '12 (3.6–16.7)'
- unparsed cell Grafeneder_2024_table_3:row11:col2 = '6.8 (4.3–13.3)'
- unparsed cell Grafeneder_2024_table_3:row11:col4 = '3.9 (0.8–4.3)'
- unparsed cell Grafeneder_2024_table_3:row11:col5 = '3.2 (2.3–4.1)'
- unparsed cell Grafeneder_2024_table_3:row11:col6 = '2.7 (1–3.1)'
- unparsed cell Grafeneder_2024_table_3:row12:col1 = '423 (359–537)'
- unparsed cell Grafeneder_2024_table_3:row12:col2 = '363 (265–442)'
- unparsed cell Grafeneder_2024_table_3:row12:col4 = '391 (41.3–500)'
- unparsed cell Grafeneder_2024_table_3:row12:col5 = '417 (281 – 500)'
- unparsed cell Grafeneder_2024_table_3:row12:col6 = '329 (56–362)'
- unparsed cell Grafeneder_2024_table_3:row13:col1 = '83.9 (64.9–97.5)'
- unparsed cell Grafeneder_2024_table_3:row13:col2 = '69.3 (55.8–92.3)'
- unparsed cell Grafeneder_2024_table_3:row13:col4 = '129 (39.2–285)'
- unparsed cell Grafeneder_2024_table_3:row13:col5 = '195 (131–219)'
- unparsed cell Grafeneder_2024_table_3:row13:col6 = '112 (51.4–134)'
- unparsed cell Grafeneder_2024_table_3:row14:col1 = '81.9 (59–99.1)'
- unparsed cell Grafeneder_2024_table_3:row14:col2 = '99.8 (65–144)'
- unparsed cell Grafeneder_2024_table_3:row14:col4 = '61.2 (58.1–100)'
- unparsed cell Grafeneder_2024_table_3:row14:col5 = '89.7 (77.9–91.9)'
- unparsed cell Grafeneder_2024_table_3:row14:col6 = '78 (27.4–389)'
- unparsed cell Grafeneder_2024_table_3:row15:col1 = '8484 (5923–12,003)'
- unparsed cell Grafeneder_2024_table_3:row15:col2 = '7682 (3987–11,705)'
- unparsed cell Grafeneder_2024_table_3:row15:col4 = '17,774 (16,415–17,923'
- unparsed cell Grafeneder_2024_table_3:row15:col5 = '15,619 (11,837–21,927'
- unparsed cell Grafeneder_2024_table_3:row15:col6 = '20,376 (14,061–52,852)'
- unparsed cell Grafeneder_2024_table_3:row17:col1 = '15 (12–18)'
- unparsed cell Grafeneder_2024_table_3:row17:col2 = '11 (8–20)'
- unparsed cell Grafeneder_2024_table_3:row17:col4 = '34 (15–87)'
- unparsed cell Grafeneder_2024_table_3:row17:col5 = '14 (13–28)'
- unparsed cell Grafeneder_2024_table_3:row17:col6 = '27 (17–44)'
- unparsed cell Grafeneder_2024_table_3:row19:col1 = '71 (59–80)'
- unparsed cell Grafeneder_2024_table_3:row19:col2 = '41 (25–53)'
- unparsed cell Grafeneder_2024_table_3:row19:col4 = '60 (36–71)'
- unparsed cell Grafeneder_2024_table_3:row19:col5 = '44 (29–66)'
- unparsed cell Grafeneder_2024_table_3:row19:col6 = '70 (57–73)'
- companion parameter table 3 transcribed (33 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Henrich_2021:review'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Henrich_2021:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.51 | not captured | not captured | ['Henrich_2021:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.51 L/h | not captured | not captured | ['Henrich_2021:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_clopidogrel/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Grafeneder_2024` / `Grafeneder_2024::hdp_n_17`)


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
