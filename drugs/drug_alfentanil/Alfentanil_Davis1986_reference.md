<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;alfentanil&quot;,&quot;href&quot;:&quot;drugs/drug_alfentanil/&quot;},{&quot;label&quot;:&quot;Davis_1986 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alfentanil_Davis1986_reference&quot;,&quot;label&quot;:&quot;Davis_1986_reference&quot;,&quot;href&quot;:&quot;drugs/drug_alfentanil/Alfentanil_Davis1986_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Alfentanil_Vozeh1990_reference&quot;,&quot;label&quot;:&quot;Vozeh_1990_reference&quot;,&quot;href&quot;:&quot;drugs/drug_alfentanil/Alfentanil_Vozeh1990_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Alfentanil_MedinaAymerich2025_reference&quot;,&quot;label&quot;:&quot;Medina-Aymerich_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_alfentanil/Alfentanil_MedinaAymerich2025_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# alfentanil — `Alfentanil_Davis1986_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `V/F`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** the simulated model does not reproduce a value the paper reports; the engineer's deviations are not documented and quantified. Evidence: T1_t_half_beta — expected 2.4833333333333334 — got 969.8613172729558 — ratio 390.5482; T1_t_half_terminal — expected 0.035 — got 969.8613172729558 — ratio 27710.3234; T1_t_half_beta — expected 0.7833333333333333 — got 969.8613172729558 — ratio 1238.1208; T1_t_half_beta — expected 0.9083333333333333 — got 969.8613172729558 — ratio 1067.7372.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Open the paper's reported table and confirm the target value and its units.
3. Compare with the transcribed value in _transcribev2.yaml for this stem.
4. If the transcription is right, the extracted parameters are suspect — check CL and volume in _interpretv2.yaml against the paper.
5. If the transcription is wrong, fix the extraction; the model rebuild follows.
6. Read the .deviation.json and confirm each deviation names what changed and why.

<sub>owner: **scholar** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Davis PJ; Cook DR et al. (1986). Clinical pharmacokinetics 11
  ·  DOI: [10.2165/00003088-198611010-00002](https://doi.org/10.2165/00003088-198611010-00002)

## Model component
<dbs-pgx drug="alfentanil" model-id="Alfentanil_Davis1986_reference" status="needs_review" stale="false" population="patients undergoing coronary revascularisation procedures" measured-compound="sufentanil" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| clearance | `Q22` · CL | —(suppressed) | ml/min/kg | — | L/h | not captured | exact (1.0) | Davis_1986:other_prose | — | not captured |
| volumes of distribution | `Q61` · V | —(suppressed) | L/kg | — | L | not captured | fuzzy (0.98) | Davis_1986:other_prose | — | not captured |
| apparent volume of distribution | `Q76` · V/F | —(suppressed) | times bodyweight | — | times bodyweight | not captured | exact (1.0) | Davis_1986:other_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag', 'k12', 'k21']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- dropped value-less row: 'apparent volume of distribution'
- salvaged Q22 ('clearance'=11.3) from results prose — parameter table was unreadable
- salvaged Q61 ('volumes of distribution'=0.39) from results prose — parameter table was unreadable
- salvaged Q76 ('apparent volume of distribution'=4.5) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sufentanil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- text-pointer recovery: parsed 1 structural record(s) from the flattened table i sentence
- LLM region Davis_1986:other_prose: no JSON records returned

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=sufentanil) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_t_half_alpha | reference | skipped | 2.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 2.1 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 2.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | fail | 2.4833333333333334 | 969.8613172729558 | 390.5482 | minutes→SI vs simulated h |
| T1_t_half_beta | reference | skipped | not captured | 969.8613172729558 | not captured | non-numeric value |
| T1_t_half_beta | reference | fail | 0.7833333333333333 | 969.8613172729558 | 1238.1208 | minutes→SI vs simulated h |
| T1_t_half_beta | reference | fail | 0.9083333333333333 | 969.8613172729558 | 1067.7372 | minutes→SI vs simulated h |
| T1_t_half_beta | reference | fail | 3.65 | 969.8613172729558 | 265.7154 | min→SI vs simulated h |
| T1_t_half_beta | reference | fail | 1.6166666666666667 | 969.8613172729558 | 599.9142 | min→SI vs simulated h |
| T1_t_half_beta | reference | fail | 0.7283333333333334 | 969.8613172729558 | 1331.6174 | minutes→SI vs simulated h |
| T1_t_half_beta | reference | fail | 4.6 | 969.8613172729558 | 210.8394 | minutes→SI vs simulated h |
| T1_t_half_beta | reference | fail | 0.7866666666666667 | 969.8613172729558 | 1232.8746 | minutes→SI vs simulated h |
| T1_t_half_beta | reference | fail | 5.6 | 969.8613172729558 | 173.1895 | minutes→SI vs simulated h |
| T1_t_half_beta | reference | fail | 2.1 | 969.8613172729558 | 461.8387 | minutes→SI vs simulated h |
| T1_t_half_beta | reference | fail | 8.4 | 969.8613172729558 | 115.4597 | hours→SI vs simulated h |
| T1_t_half_beta | reference | fail | 2.7 | 969.8613172729558 | 359.2079 | hours→SI vs simulated h |
| T1_t_half_beta | reference | fail | 23.0 | 969.8613172729558 | 42.1679 | hours→SI vs simulated h |
| T1_t_half_beta | reference | fail | 0.9083333333333333 | 969.8613172729558 | 1067.7372 | minutes→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.035 | 969.8613172729558 | 27710.3234 | minutes→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_alfentanil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Davis_1986` / `Davis_1986::reference`)
- model: `../../../knowledgebase/drugs/drug_alfentanil/models/modelica/Alfentanil_Davis1986_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_alfentanil/models/modelica/Alfentanil_Davis1986_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_alfentanil/models/modelica/Alfentanil_Davis1986_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model diagram

The structure OpenModelica draws for this model, with **this record's parameter values** in the component labels.

<img src="drugs/drug_alfentanil/Alfentanil_Davis1986_reference/Alfentanil_Davis1986_reference.svg" alt="Alfentanil_Davis1986_reference diagram" style="max-width:100%;height:auto;background:#fff;border-radius:6px;padding:8px">

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_2C_enteral.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_alfentanil/Alfentanil_Davis1986_reference/Alfentanil_Davis1986_reference_modelica.zip" download>Alfentanil_Davis1986_reference_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_alfentanil/Alfentanil_Davis1986_reference/Alfentanil_Davis1986_reference_fmi.zip" download>Alfentanil_Davis1986_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_alfentanil/Alfentanil_Davis1986_reference/Alfentanil_Davis1986_reference_matlab.zip" download>Alfentanil_Davis1986_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_alfentanil/Alfentanil_Davis1986_reference/Alfentanil_Davis1986_reference_matlab_simbio.zip" download>Alfentanil_Davis1986_reference_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_alfentanil/Alfentanil_Davis1986_reference/Alfentanil_Davis1986_reference_sbml.zip" download>Alfentanil_Davis1986_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_alfentanil/Alfentanil_Davis1986_reference/Alfentanil_Davis1986_reference_cellml.zip" download>Alfentanil_Davis1986_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

Runs **this record's model** in your browser as WebAssembly — nothing to install. The sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited.

<dbs-fmusim paramsurl="drugs/drug_alfentanil/Alfentanil_Davis1986_reference/Alfentanil_Davis1986_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_alfentanil/Alfentanil_Davis1986_reference/Alfentanil_Davis1986_reference_sim_controls.json"></dbs-fmusim>

<sub>Template `PK_2C_enteral` · parameters `Alfentanil_Davis1986_reference_params.json` · controls `Alfentanil_Davis1986_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
