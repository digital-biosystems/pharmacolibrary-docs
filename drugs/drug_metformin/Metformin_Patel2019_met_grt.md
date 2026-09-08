# metformin — `Metformin_Patel2019_met_grt`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `atorvastatin, metformin, green rooibos extract`, measured `atorvastatin, metformin`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Patel O; Muller CJF; Joubert E; Rosenkranz B; Taylor MJC; Louw J; et al. et al. (2019). Frontiers in pharmacology 10
  ·  DOI: [10.3389/fphar.2019.01243](https://doi.org/10.3389/fphar.2019.01243)

## Model component
<dbs-pgx drug="metformin" model-id="Metformin_Patel2019_met_grt" status="rejected" stale="false" population="Wistar rats" measured-compound="atorvastatin, metformin" parameterization="apparent" topology="3C"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| T max (h) | `Q56` · tmax | —(suppressed) | h | — | [h] | not captured | llm (0.6) | T4:row1:col4 | — | not captured |
| T 1/2 (h) | `Q57` · t1/2z | —(suppressed) | h | — | [h] | not captured | llm (0.6) | T4:row3:col4 | — | not captured |
| MRT0-∞ (h) | `Q53` · MRT | —(suppressed) | h | — | [h] | not captured | exact (1.0) | T4:row6:col4 | — | not captured |
| Vz/F (mg/kg)/(L/kg) | `Q76` · V/F | —(suppressed) | L/kg | — | [l] / [kg] | not captured | llm_confirmed (0.6) | T4:row7:col4 | — | not captured |
| CL/F (mg/kg)/(L/kg*hr) | `Q27` · CL/F | —(suppressed) | L/kg*hr | — | [l] / [[h] · [kg]] | not captured | llm_confirmed (0.6) | T4:row8:col4 | — | not captured |
| V1 (mg/kg)/(μg/mL) | `Q63` · V1 | —(suppressed) | μg/mL | — | [µg] / [ml] | not captured | llm_confirmed (0.6) | T4:row9:col4 | — | not captured |
| V2 (mg/kg)/(μg/mL) | `Q64` · V2 | —(suppressed) | μg/mL | — | [µg] / [ml] | not captured | llm_confirmed (0.6) | T4:row10:col4 | — | not captured |
| K12 (1/h) | `Q301` · k12 | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | T4:row11:col4 | — | not captured |
| K21 (1/h) | `Q302` · k21 | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | T4:row12:col4 | — | not captured |
| Ka (h -1 ) Absorption rate constant | `Q49` · kabs | —(suppressed) | h -1 | — | 1/h | not captured | review_gapfill (0.7) | Chae_2012:review | — | not captured |
| Tlag | `Q83` · tlag | —(suppressed) | h | — | h | not captured | review_gapfill (0.7) | Zhang_2024:review | — | not captured |
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
- unit_dimension_mismatch: 'CL/F (mg/kg)/(L/kg*hr)' → Q27 (unit '[length] ** 3 * [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'V1 (mg/kg)/(μg/mL)' → Q63 (unit '[mass] / [length] ** 3' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'V2 (mg/kg)/(μg/mL)' → Q64 (unit '[mass] / [length] ** 3' vs ontology '[length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=atorvastatin, metformin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'met + grt' subgroup of Patel_2019 (paper reports 3 populations: ator + grt, met, met + grt)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Chae_2012's review values (primary lacked it)
- gap-filled Q83 (tlag) from Zhang_2024's review values (primary lacked it)

**Extraction notes:**
- unparsed cell T4:row2:col2 = '48.72 ± 20.38*'
- unparsed cell T4:row2:col3 = '4, 727.97 ± 1471.97'
- unparsed cell T4:row2:col4 = '3, 530.64 ± 517.61'
- unparsed cell T4:row4:col2 = '135.66 ± 53.27*'
- unparsed cell T4:row4:col3 = '15, 983.48 ± 3529.52'
- unparsed cell T4:row4:col4 = '12, 538.03 ± 1919.92'
- unparsed cell T4:row5:col3 = '17, 856.48 ± 4797.19'
- unparsed cell T4:row5:col4 = '14, 667.16 ± 2696.19'
- unparsed cell T4:row7:col2 = '1.14 ± 0.55**'
- unparsed cell T4:row8:col2 = '0.25 ± 0.06**'
- unparsed cell T4:row10:col2 = '1.66 ± 0.93**'
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | fail | [length] ** 3 * [time] | L/kg*hr | not captured | not captured | ['T4:row8:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Chae_2012:review'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['T4:row6:col4'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['T4:row1:col4'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['T4:row3:col4'] |
| C5_dimension_Q63 | fail | [mass] / [length] ** 3 | μg/mL | not captured | not captured | ['T4:row9:col4'] |
| C5_dimension_Q64 | fail | [mass] / [length] ** 3 | μg/mL | not captured | not captured | ['T4:row10:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['T4:row7:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Zhang_2024:review'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q76 | pass | volume within physiological range | 2.8 L | not captured | not captured | ['T4:row7:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_metformin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Patel_2019` / `Patel_2019::met_grt`)


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
