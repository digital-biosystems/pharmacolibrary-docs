# abacavir — `Abacavir_Chandasana2024v2_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `abacavir/dolutegravir/lamivudine`, measured `abacavir, dolutegravir, lamivudine`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Chandasana H; van Dijkman SC; Mehta R; Bush M; Rabie H; Flynn P; et al. et al. (2024). Infectious diseases and therapy 13
  ·  DOI: [10.1007/s40121-024-01008-y](https://doi.org/10.1007/s40121-024-01008-y)

## Model component
<dbs-pgx drug="abacavir" model-id="Abacavir_Chandasana2024v2_reference" status="needs_review" stale="false" population="children with HIV-1" measured-compound="abacavir, dolutegravir, lamivudine" parameterization="apparent" topology="3C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, V/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Apparent clearance, CL/F [L/h] | `Q27` · CL/F | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Chandasana_2024_2_table_1:row0:col1 | — | not captured |
| Apparent central volume of distribution, V2/F [l] | `Q82` · V2/F | —(suppressed) | not captured | — | not captured | not captured | llm_corrected (0.6) | Chandasana_2024_2_table_1:row1:col1 | — | not captured |
| Absorption rate constant, KA [h−1] | `Q49` · kabs | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Chandasana_2024_2_table_1:row2:col1, Chandasana_2024_2_table_3:row0:col1 | — | not captured |
| Intercompartment clearance, Q/F [l/h] | `Q69` · Q/F | —(suppressed) | not captured | — | not captured | not captured | llm_corrected (0.6) | Chandasana_2024_2_table_1:row3:col1 | — | not captured |
| Apparent peripheral compartment volume of distribution, V3/F [l] | `Q78` · V3/F | —(suppressed) | not captured | — | not captured | not captured | llm_corrected (0.6) | Chandasana_2024_2_table_1:row4:col1 | — | not captured |
| F, tablet ARROW PK Substudy Part 2 | `Q40` · Fab | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | Chandasana_2024_2_table_1:row5:col1 | — | not captured |
| Apparent central volume of distribution, V/F [l] | `Q290` · V1/F | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Chandasana_2024_2_table_2:row1:col1, Chandasana_2024_2_table_3:row2:col1 | — | not captured |
| V/F | `Q76` · V/F | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | Chandasana_2024_2_table_2:row14:col1, Chandasana_2024_2_table_3:row11:col1 | — | not captured |
| Lag time ALAG1 (h) | `Q83` · tlag | —(suppressed) | h | — | [h] | not captured | llm_confirmed (0.6) | Chandasana_2024_2_table_3:row1:col1 | — | not captured |
| theta_cl_f_wt_power | `Q900` · theta_cl_f_wt_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Chandasana_2024_2_table_1:row7:col1 | — | not captured |
| theta_q61_wt_power | `Q900` · theta_q61_wt_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Chandasana_2024_2_table_1:row8:col1 | — | not captured |
| theta_cl_f_wt_power | `Q900` · theta_cl_f_wt_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Chandasana_2024_2_table_2:row7:col1 | — | not captured |
| theta_v_f_wt_power | `Q900` · theta_v_f_wt_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Chandasana_2024_2_table_2:row8:col1 | — | not captured |
| theta_cl_f_wt_power | `Q900` · theta_cl_f_wt_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Chandasana_2024_2_table_3:row6:col1 | — | not captured |
| theta_v_f_wt_power | `Q900` · theta_v_f_wt_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Chandasana_2024_2_table_3:row7:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Weight bands' — extend the ontology if this is a real PK parameter (source ['Tab4:row0:col3', 'Tab4:row0:col4'])
- dropped duplicate Q69 ('Q/F', value '67.9') — already have one for this compound
- dropped duplicate Q82 ('V2/F', value '51.9') — already have one for this compound
- dropped duplicate Q78 ('V3/F', value '91.9') — already have one for this compound
- dropped duplicate Q27 ('CL/F', value '28.6') — already have one for this compound
- dropped duplicate Q27 ('Apparent clearance, CL/F [l/h]', value '9.16') — already have one for this compound
- dropped duplicate Q49 ('Absorption rate constant, KA, FCT [h−1]', value '0.854') — already have one for this compound
- dropped duplicate Q49 ('Absorption rate constant, KA ~ DT and granules [h−1]', value '2.04') — already have one for this compound
- dropped unlinked row (NIL): 'Maturation half time, TM50 [PMA weeks]' — extend the ontology if this is a real PK parameter (source ['Chandasana_2024_2_table_2:row10:col1'])
- dropped PD-category row 'Hill coefficient related to the slope of the enzyme maturation process' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Chandasana_2024_2_table_2:row11:col1'])
- dropped duplicate Q49 ('KA', value '76.5') — already have one for this compound
- covariate effect for Q61 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=abacavir, dolutegravir, lamivudine

**Extraction notes:**
- companion parameter table 1 transcribed (14 record(s))
- companion parameter table 2 transcribed (18 record(s))
- companion parameter table 3 transcribed (16 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 15 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_center_consistency_wt | fail | not captured | [15.6, 18.5, 70.0] | not captured | not captured | not captured |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Chandasana_2024_2_table_3:row1:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_abacavir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chandasana_2024_2` / `Chandasana_2024_2::reference`)


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
