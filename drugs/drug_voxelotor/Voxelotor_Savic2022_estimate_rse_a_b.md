<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;voxelotor&quot;,&quot;href&quot;:&quot;drugs/drug_voxelotor/&quot;},{&quot;label&quot;:&quot;Savic_2022 \u00b7 estimate_rse_a_b&quot;}]"></div>

# voxelotor — `Voxelotor_Savic2022_estimate_rse_a_b`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

### Reviewer guidance

**What is wrong:** the engineer's deviations are not documented and quantified; the engineer did not exercise the covariate scenarios this record defines. Evidence: T2_covariates_not_exercised; T6_deviations — got defaulted_parameters: structural deviation not quantified; invented_absorption: not acceptable

**Steps:**
1. Read the .deviation.json and confirm each deviation names what changed and why.
2. Anything undocumented needs the engineer, not a curator.
3. Advisory only — the base model still replicates.
4. Check the record's covariate_definitions in _interpretv2.yaml.
5. Re-run the engineer for this drug if the covariate curves are wanted.

<sub>owner: **engineer** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Savic RM; Green ML; Jorga K; Zager M; Washington CB et al. (2022). CPT: pharmacometrics & systems pharmacology 11
  ·  DOI: [10.1002/psp4.12731](https://doi.org/10.1002/psp4.12731)

## Model component
<dbs-pgx drug="voxelotor" model-id="Voxelotor_Savic2022_estimate_rse_a_b" status="needs_review" stale="false" population="adults and adolescents with sickle cell disease" measured-compound="voxelotor" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | psp412731-tbl-0002:row1:col1 | — | 0.1 (None% RSE) |
| V c/F (L) | `Q290` · V1/F | —(suppressed) | L | — | [l] | not captured | space_fold (0.95) | psp412731-tbl-0002:row2:col1 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | psp412731-tbl-0002:row3:col1 | — | not captured |
| V p/F (L) | `Q82` · V2/F | —(suppressed) | L | — | [l] | not captured | space_fold (0.95) | psp412731-tbl-0002:row4:col1 | — | not captured |
| K bp (1/h) | `Q410` · Kp | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | psp412731-tbl-0002:row5:col1 | — | not captured |
| K a (1/h) | `Q49` · kabs | —(suppressed) | not captured | — | not captured | not captured | space_fold (0.95) | psp412731-tbl-0002:row7:col1 | — | not captured |
| cyp3a4_inducer_on_cl_f_expth | `Q900` · cyp3a4_inducer_on_cl_f_expth | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | psp412731-tbl-0002:row10:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source

**Interpretation flags:**
- dropped unlinked row (NIL): 'R bp' — extend the ontology if this is a real PK parameter (source ['psp412731-tbl-0002:row6:col1'])
- dropped unlinked row (NIL): 'Blood volume on V c/F, (BLV/3.89 c )TH' — extend the ontology if this is a real PK parameter (source ['psp412731-tbl-0002:row8:col1'])
- dropped unlinked row (NIL): 'Hematocrit on R bp, (HCT/27.8)TH' — extend the ontology if this is a real PK parameter (source ['psp412731-tbl-0002:row9:col1'])
- covariate level 'CYP3A4 inducer on CL/F, expTH' → Q900:cyp3a4_inducer_on_cl_f_expth = 0.39 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'Nominal dose on R bp, (dose/900)TH' — extend the ontology if this is a real PK parameter (source ['psp412731-tbl-0002:row11:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=voxelotor
- population split: 'estimate (rse [%]) a , b' subgroup of Savic_2022 (paper reports 2 populations: estimate (rse [%]) a , b, shrinkage)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412731-tbl-0002:row1:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412731-tbl-0002:row2:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412731-tbl-0002:row3:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412731-tbl-0002:row4:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.14 L/h | not captured | not captured | ['psp412731-tbl-0002:row1:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 333 L | not captured | not captured | ['psp412731-tbl-0002:row2:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 72.3 L | not captured | not captured | ['psp412731-tbl-0002:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=voxelotor) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: structural deviation not quantified; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_voxelotor/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Savic_2022` / `Savic_2022::estimate_rse_a_b`)
- model: `../../../knowledgebase/drugs/drug_voxelotor/models/modelica/Voxelotor_Savic2022_estimate_rse_a_b.mo`
- deviation: `../../../knowledgebase/drugs/drug_voxelotor/models/modelica/Voxelotor_Savic2022_estimate_rse_a_b.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_voxelotor/models/modelica/Voxelotor_Savic2022_estimate_rse_a_b.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model diagram

The structure OpenModelica draws for this model, with **this record's parameter values** in the component labels.

<img src="drugs/drug_voxelotor/Voxelotor_Savic2022_estimate_rse_a_b/Voxelotor_Savic2022_estimate_rse_a_b.svg" alt="Voxelotor_Savic2022_estimate_rse_a_b diagram" style="max-width:100%;height:auto;background:#fff;border-radius:6px;padding:8px">

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_2C_enteral.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_voxelotor/Voxelotor_Savic2022_estimate_rse_a_b/Voxelotor_Savic2022_estimate_rse_a_b_modelica.zip" download>Voxelotor_Savic2022_estimate_rse_a_b_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_voxelotor/Voxelotor_Savic2022_estimate_rse_a_b/Voxelotor_Savic2022_estimate_rse_a_b_fmi.zip" download>Voxelotor_Savic2022_estimate_rse_a_b_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_voxelotor/Voxelotor_Savic2022_estimate_rse_a_b/Voxelotor_Savic2022_estimate_rse_a_b_matlab.zip" download>Voxelotor_Savic2022_estimate_rse_a_b_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_voxelotor/Voxelotor_Savic2022_estimate_rse_a_b/Voxelotor_Savic2022_estimate_rse_a_b_matlab_simbio.zip" download>Voxelotor_Savic2022_estimate_rse_a_b_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_voxelotor/Voxelotor_Savic2022_estimate_rse_a_b/Voxelotor_Savic2022_estimate_rse_a_b_sbml.zip" download>Voxelotor_Savic2022_estimate_rse_a_b_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_voxelotor/Voxelotor_Savic2022_estimate_rse_a_b/Voxelotor_Savic2022_estimate_rse_a_b_cellml.zip" download>Voxelotor_Savic2022_estimate_rse_a_b_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

Runs **this record's model** in your browser as WebAssembly — nothing to install. The sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited.

<dbs-fmusim paramsurl="drugs/drug_voxelotor/Voxelotor_Savic2022_estimate_rse_a_b/Voxelotor_Savic2022_estimate_rse_a_b_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_voxelotor/Voxelotor_Savic2022_estimate_rse_a_b/Voxelotor_Savic2022_estimate_rse_a_b_sim_controls.json"></dbs-fmusim>

<sub>Template `PK_2C_enteral` · parameters `Voxelotor_Savic2022_estimate_rse_a_b_params.json` · controls `Voxelotor_Savic2022_estimate_rse_a_b_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
