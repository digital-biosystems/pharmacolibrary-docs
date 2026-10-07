<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;dexamfetamine&quot;,&quot;href&quot;:&quot;drugs/drug_dexamfetamine/&quot;},{&quot;label&quot;:&quot;Roberts_2015 \u00b7 final_final_plasma_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dexamfetamine_Roberts2015_final_final_plasma_model&quot;,&quot;label&quot;:&quot;Roberts_2015_final_final_plasma_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dexamfetamine — `Dexamfetamine_Roberts2015_final_final_plasma_model`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Roberts JK et al., A Population Pharmacokinetic Analysis o…, Clinical drug investigation (2015)
  ·  DOI: [10.1007/s40261-015-0323-5](https://doi.org/10.1007/s40261-015-0323-5)

## Model component
<dbs-pgx drug="dexamfetamine" model-id="Dexamfetamine_Roberts2015_final_final_plasma_model" status="extracted" stale="false" population="healthy adults" measured-compound="dextroamphetamine" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 4 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| K12 (h−1) | `Q301` · k12 | 0.533 | h−1 | 0.00014805555555555557 | [1] / [h] | not captured | exact (1.0) | Roberts_2015_table_2:row1:col1, Roberts_2015_table_2:row1:col2, Roberts_2015_table_2:row1:col3, Roberts_2015_table_2:row1:col4 | — | 0.0394 (None% RSE) |
| V1/F (L) | `Q76` · V/F | 377 | L | 0.377 | [l] | not captured | exact (1.0) | Roberts_2015_table_2:row2:col1, Roberts_2015_table_2:row2:col2, Roberts_2015_table_2:row2:col3, Roberts_2015_table_2:row2:col4 | — | 0.0407 (None% RSE) |
| θ1 | `Q319` · allometric_exponent | 0.800 | not captured | not captured | not captured | not captured | llm (0.6) | Roberts_2015_table_2:row3:col1, Roberts_2015_table_2:row3:col2, Roberts_2015_table_2:row3:col3, Roberts_2015_table_2:row3:col4, T3:footnote | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 28.3 | L/h | 7.861111111111112e-06 | [l] / [h] | not captured | exact (1.0) | Roberts_2015_table_2:row4:col1, Roberts_2015_table_2:row4:col2, Roberts_2015_table_2:row4:col3, Roberts_2015_table_2:row4:col4 | — | 0.0394 (None% RSE) |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- table section iiv: 'K12' routed out of structural estimates ('ω2-BSV')
- table section iiv: 'V1/F' routed out of structural estimates ('ω2-BSV')
- table section iiv: 'CL/F' routed out of structural estimates ('ω2-BSV')
- table section residual_error: 'Additive (ng/mL)' routed out of structural estimates ('σ2-RUV')
- table section residual_error: 'Proportional' routed out of structural estimates ('σ2-RUV')
- dropped duplicate Q319 ('θ2', value '0.512') — already have one for this compound
- dropped value-less row: 'SE'
- dropped value-less row: 'CI'
- dropped value-less row: 'NA'
- dropped value-less row: 'K12'
- dropped value-less row: 'V1/F'
- dropped value-less row: 'CL/F'
- dropped value-less row: 'K23'
- dropped value-less row: 'V2/F'
- dropped value-less row: 'θ3'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dextroamphetamine
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'V1/F (L)' is the general volume)
- model-stage split: 'final plasma model' is the final model of Roberts_2015 (paper reports 2 stages: final linked model, final plasma model); same population, different model-building step
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T3:row7:col1 = '1.60E−06'
- unparsed cell T3:row7:col2 = '2.76E−07'
- unparsed cell T3:row7:col3 = '1.06E−06'
- unparsed cell T3:row7:col4 = '2.14E−06'
- unparsed cell T3:row7:col6 = '2.70E−07'
- unparsed cell T3:row7:col7 = '1.02E−06'
- unparsed cell T3:row7:col8 = '2.07E−06'
- unparsed cell T3:row11:col7 = '1.00E–06'
- unparsed cell Roberts_2015_table_2:row7:col7 = '2.00E–06'
- companion parameter table 2 transcribed (79 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Roberts_2015_table_2:row4:col1', 'Roberts_2015_table_2:row4:col2', 'Roberts_2015_table_2:row4:col3', 'Roberts_2015_table_2:row4:col4'] |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Roberts_2015_table_2:row1:col1', 'Roberts_2015_table_2:row1:col2', 'Roberts_2015_table_2:row1:col3', 'Roberts_2015_table_2:row1:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Roberts_2015_table_2:row2:col1', 'Roberts_2015_table_2:row2:col2', 'Roberts_2015_table_2:row2:col3', 'Roberts_2015_table_2:row2:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 28.3 L/h | not captured | not captured | ['Roberts_2015_table_2:row4:col1', 'Roberts_2015_table_2:row4:col2', 'Roberts_2015_table_2:row4:col3', 'Roberts_2015_table_2:row4:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 377 L | not captured | not captured | ['Roberts_2015_table_2:row2:col1', 'Roberts_2015_table_2:row2:col2', 'Roberts_2015_table_2:row2:col3', 'Roberts_2015_table_2:row2:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_dexamfetamine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Roberts_2015` / `Roberts_2015::final_final_plasma_model`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model/Dexamfetamine_Roberts2015_final_final_plasma_model_modelica.zip" download>Dexamfetamine_Roberts2015_final_final_plasma_model_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model/Dexamfetamine_Roberts2015_final_final_plasma_model_fmi.zip" download>Dexamfetamine_Roberts2015_final_final_plasma_model_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model/Dexamfetamine_Roberts2015_final_final_plasma_model_matlab.zip" download>Dexamfetamine_Roberts2015_final_final_plasma_model_matlab.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model/Dexamfetamine_Roberts2015_final_final_plasma_model_matlab_simbio.zip" download>Dexamfetamine_Roberts2015_final_final_plasma_model_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model/Dexamfetamine_Roberts2015_final_final_plasma_model_sbml.zip" download>Dexamfetamine_Roberts2015_final_final_plasma_model_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model/Dexamfetamine_Roberts2015_final_final_plasma_model_cellml.zip" download>Dexamfetamine_Roberts2015_final_final_plasma_model_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model/Dexamfetamine_Roberts2015_final_final_plasma_model.svg" alt="Dexamfetamine_Roberts2015_final_final_plasma_model diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 10 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Dose in the paper: 10 mg.

<dbs-fmusim paramsurl="drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model/Dexamfetamine_Roberts2015_final_final_plasma_model_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model/Dexamfetamine_Roberts2015_final_final_plasma_model_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Dexamfetamine_Roberts2015_final_final_plasma_model_params.json` · controls `Dexamfetamine_Roberts2015_final_final_plasma_model_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:25 UTC</sub>
