<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;butorphanol&quot;,&quot;href&quot;:&quot;drugs/drug_butorphanol/&quot;},{&quot;label&quot;:&quot;Knych_2024 \u00b7 shrinkage&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Butorphanol_Pypendop2021_reference&quot;,&quot;label&quot;:&quot;Pypendop_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_butorphanol/Butorphanol_Pypendop2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Butorphanol_Knych2024_estimate&quot;,&quot;label&quot;:&quot;Knych_2024_estimate&quot;,&quot;href&quot;:&quot;drugs/drug_butorphanol/Butorphanol_Knych2024_estimate.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Butorphanol_Knych2024_estimate&quot;,&quot;label&quot;:&quot;Knych_2024_estimate&quot;,&quot;href&quot;:&quot;drugs/drug_butorphanol/Butorphanol_Knych2024_estimate.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Butorphanol_Knych2024_shrinkage&quot;,&quot;label&quot;:&quot;Knych_2024_shrinkage&quot;,&quot;href&quot;:&quot;drugs/drug_butorphanol/Butorphanol_Knych2024_shrinkage.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Butorphanol_Knych2024_shrinkage&quot;,&quot;label&quot;:&quot;Knych_2024_shrinkage&quot;,&quot;href&quot;:&quot;drugs/drug_butorphanol/Butorphanol_Knych2024_shrinkage.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Butorphanol_Saeed2026_reference&quot;,&quot;label&quot;:&quot;Saeed_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_butorphanol/Butorphanol_Saeed2026_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# butorphanol — `Butorphanol_Knych2024_shrinkage`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

### Reviewer guidance

**What is wrong:** the simulated model does not reproduce a value the paper reports. Evidence: T1_cmax — expected 0.0001399 — got 7.930289994690939e-07 — ratio 0.0057; T1_tmax — expected 0.43 — got 1.6833667334669338 — ratio 3.9148

**Steps:**
1. Open the paper's reported table and confirm the target value and its units.
2. Compare with the transcribed value in _transcribev2.yaml for this stem.
3. If the transcription is right, the extracted parameters are suspect — check CL and volume in _interpretv2.yaml against the paper.
4. If the transcription is wrong, fix the extraction; the model rebuild follows.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Knych HK; Weiner D; McKemie DS; Traynham M; Blea J et al. (2024). Journal of veterinary pharmacology and therapeutics 47
  ·  DOI: [10.1111/jvp.13450](https://doi.org/10.1111/jvp.13450)

## Model component
<dbs-pgx drug="butorphanol" model-id="Butorphanol_Knych2024_shrinkage" status="needs_review" stale="false" population="exercised Thoroughbred horses" measured-compound="butorphanol" parameterization="apparent" topology="3C"></dbs-pgx>

**Parameterization:** CL/F, V/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tvKa (1/h) | `Q49` · kabs | 6.28 | 1/h | 0.0017444444444444445 | 1/h | not captured | tv_prefix (0.95) | Knych_2024:other_prose | — | not captured |
| tvV/F (L/kg) | `Q76` · V/F | 0.465 | L/kg | 0.03255 | L | not captured | tv_prefix (0.95) | Knych_2024:other_prose | — | not captured |
| tvV2/F (L/kg) | `Q82` · V2/F | 0.42 | L/kg | 0.029400000000000003 | L | not captured | tv_prefix (0.95) | Knych_2024:other_prose | — | not captured |
| tvCl/F (mL/min/kg) | `Q27` · CL/F | 9.85 | mL/min/kg | 1.1491666666666665e-05 | L/h | not captured | tv_prefix (0.95) | Knych_2024:other_prose | — | not captured |
| V | `Q61` · V | 0.144 | not captured | not captured | L | not captured | exact (1.0) | Knych_2024:other_prose | — | not captured |
| V2 | `Q64` · V2 | 0.295 | not captured | not captured | L | not captured | exact (1.0) | Knych_2024:other_prose | — | not captured |
| Cl | `Q22` · CL | 0.053 | not captured | not captured | L/h | not captured | exact (1.0) | Knych_2024:other_prose | — | not captured |
| Cl2 | `Q30` · Q | 0.71 | not captured | not captured | L/h | not captured | special_case (0.95) | Knych_2024:other_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag', 'k12', 'k21', 'k13', 'k31']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped value-less row: 'tvKa (1/h)' (captured trailing unit '1/h' for child rows)
- dropped value-less row: 'tvV/F (L/kg)' (captured trailing unit 'L/kg' for child rows)
- dropped value-less row: 'tvV2/F (L/kg)' (captured trailing unit 'L/kg' for child rows)
- dropped value-less row: 'tvV3/F (L/kg)' (captured trailing unit 'L/kg' for child rows)
- dropped value-less row: 'tvCl/F (mL/min/kg)' (captured trailing unit 'mL/min/kg' for child rows)
- dropped value-less row: 'tvCl2/F (mL/min/kg)' (captured trailing unit 'mL/min/kg' for child rows)
- dropped value-less row: 'tvCl3/F (mL/min/kg)' (captured trailing unit 'mL/min/kg' for child rows)
- salvaged Q49 ('tvKa (1/h)'=6.28) from results prose — parameter table was unreadable
- salvaged Q76 ('tvV/F (L/kg)'=0.465) from results prose — parameter table was unreadable
- salvaged Q82 ('tvV2/F (L/kg)'=0.42) from results prose — parameter table was unreadable
- salvaged Q27 ('tvCl/F (mL/min/kg)'=9.85) from results prose — parameter table was unreadable
- salvaged Q61 ('V'=0.144) from results prose — parameter table was unreadable
- salvaged Q64 ('V2'=0.295) from results prose — parameter table was unreadable
- salvaged Q22 ('Cl'=0.053) from results prose — parameter table was unreadable
- salvaged Q30 ('Cl2'=0.71) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=butorphanol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'shrinkage' subgroup of Knych_2024 (paper reports 2 populations: estimate, shrinkage)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 41.4 L/h | not captured | not captured | ['Knych_2024:other_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 32.6 L | not captured | not captured | ['Knych_2024:other_prose'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 29.4 L | not captured | not captured | ['Knych_2024:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=butorphanol) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 8 scholar param(s) emitted or defaulted | 8 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 3C → PK_3C* | PK_3C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.0001399 | 7.930289994690939e-07 | 0.0057 | ng/mL→SI vs simulated kg/m3 |
| T1_tmax | reference | fail | 0.43 | 1.6833667334669338 | 3.9148 | h→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_butorphanol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Knych_2024` / `Knych_2024::shrinkage`)
- model: `../../../knowledgebase/drugs/drug_butorphanol/models/modelica/Butorphanol_Knych2024_shrinkage.mo`
- deviation: `../../../knowledgebase/drugs/drug_butorphanol/models/modelica/Butorphanol_Knych2024_shrinkage.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_butorphanol/models/modelica/Butorphanol_Knych2024_shrinkage.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_butorphanol/Butorphanol_Knych2024_shrinkage/Butorphanol_Knych2024_shrinkage_modelica.zip" download>Butorphanol_Knych2024_shrinkage_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_butorphanol/Butorphanol_Knych2024_shrinkage/Butorphanol_Knych2024_shrinkage_fmi.zip" download>Butorphanol_Knych2024_shrinkage_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_3C_enteral.fmu" download>PK_3C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_butorphanol/Butorphanol_Knych2024_shrinkage/Butorphanol_Knych2024_shrinkage_matlab.zip" download>Butorphanol_Knych2024_shrinkage_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_butorphanol/Butorphanol_Knych2024_shrinkage/Butorphanol_Knych2024_shrinkage_matlab_simbio.zip" download>Butorphanol_Knych2024_shrinkage_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_butorphanol/Butorphanol_Knych2024_shrinkage/Butorphanol_Knych2024_shrinkage_sbml.zip" download>Butorphanol_Knych2024_shrinkage_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_butorphanol/Butorphanol_Knych2024_shrinkage/Butorphanol_Knych2024_shrinkage_cellml.zip" download>Butorphanol_Knych2024_shrinkage_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_3C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_butorphanol/Butorphanol_Knych2024_shrinkage/Butorphanol_Knych2024_shrinkage.svg" alt="Butorphanol_Knych2024_shrinkage diagram"><figcaption>The structure OpenModelica draws for this model, with this record's parameter values in the component labels.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_butorphanol/Butorphanol_Knych2024_shrinkage/Butorphanol_Knych2024_shrinkage_params.json" metaurl="assets/fmu/PK_3C_enteral.vr.json" wasmurl="assets/fmu/PK_3C_enteral.js" controlsurl="drugs/drug_butorphanol/Butorphanol_Knych2024_shrinkage/Butorphanol_Knych2024_shrinkage_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_3C_enteral` · parameters `Butorphanol_Knych2024_shrinkage_params.json` · controls `Butorphanol_Knych2024_shrinkage_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
