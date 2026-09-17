<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;dapsone&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/&quot;},{&quot;label&quot;:&quot;Gatti_1996 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dapsone_Gatti1996_reference&quot;,&quot;label&quot;:&quot;Gatti_1996_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/Dapsone_Gatti1996_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Dapsone_Kotila2023_reference&quot;,&quot;label&quot;:&quot;Kotila_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/Dapsone_Kotila2023_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dapsone_Simpson2006v2_reference&quot;,&quot;label&quot;:&quot;Simpson_2006_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/Dapsone_Simpson2006v2_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dapsone_Falloon1994_reference&quot;,&quot;label&quot;:&quot;Falloon_1994_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/Dapsone_Falloon1994_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# dapsone — `Dapsone_Gatti1996_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `CL`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** the simulated model does not reproduce a value the paper reports; the engineer's deviations are not documented and quantified. Evidence: T1_t_half_terminal — expected 19.2 — got 26.420415970598686 — ratio 1.3761; T6_deviations — got invented_absorption: not acceptable.

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
Gatti G; Merighi M; Hossein J; Travaini S; Casazza R; Karlsson M; et al. et al. (1996). Antimicrobial agents and chemotherapy 40
  ·  DOI: [10.1128/AAC.40.12.2743](https://doi.org/10.1128/AAC.40.12.2743)

## Model component
<dbs-pgx drug="dapsone" model-id="Dapsone_Gatti1996_reference" status="needs_review" stale="false" population="HIV-infected patients" measured-compound="dapsone" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | —(suppressed) | liters/h | — | L/h | not captured | exact (1.0) | Gatti_1996:other_prose | — | not captured |
| V/F | `Q76` · V/F | —(suppressed) | liters | — | L | not captured | exact (1.0) | Gatti_1996:other_prose | — | not captured |
| decrease of clearance of dapsone by AZT | `Q22` · CL | —(suppressed) | % | — | % | not captured | boundary (0.8) | Gatti_1996:discussion_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameter' — extend the ontology if this is a real PK parameter (source ['tab_1:row0:col1', 'tab_1:row0:col4', 'tab_1:row0:col5'])
- dropped unlinked row (NIL): 'Mean' — extend the ontology if this is a real PK parameter (source ['tab_1:row1:col1', 'tab_1:row1:col2', 'tab_1:row1:col3', 'tab_1:row1:col4', 'tab_1:row1:col6', 'tab_1:row1:col7'])
- salvaged Q27 ('CL/F'=1.83) from results prose — parameter table was unreadable
- salvaged Q76 ('V/F'=69.6) from results prose — parameter table was unreadable
- salvaged Q22 ('decrease of clearance of dapsone by AZT'=25) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dapsone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- unit re-normalised: CL/F 'liters/h' now converts (value unchanged)
- unit re-normalised: V/F 'liters' now converts (value unchanged)

**Extraction notes:**
- unparsed cell tab_1:row0:col2 = '2 (liters)'
- unparsed cell tab_1:row0:col3 = '3 (h Ϫ1 )'
- unparsed cell tab_1:row1:col5 = 'Ϫ0.119'
- unparsed cell tab_1:row2:col1 = '1.57, 2.09'
- unparsed cell tab_1:row2:col2 = '57.4, 81.8'
- unparsed cell tab_1:row2:col3 = '0.72, 1.36'
- unparsed cell tab_1:row2:col4 = '0.318, 1.074'
- unparsed cell tab_1:row2:col5 = 'Ϫ0.08, Ϫ0.158'
- unparsed cell tab_1:row2:col6 = '20, 46'
- unparsed cell tab_1:row2:col7 = '45, 111'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C2_base_Q27 | fail | 1.83 | 2.01 | 1.0984 | 0.05 | footnote reference category |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=dapsone) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 1.42 | 0.0012200698240520458 | not captured | unresolved concentration unit (exp 'mg/liter', sim 'kg/m3') |
| T1_cmax | reference | skipped | 1.52 | 0.0012200698240520458 | not captured | unresolved concentration unit (exp 'mg/liter', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.84 | 0.0012200698240520458 | not captured | unresolved concentration unit (exp 'mg/liter', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.9 | 0.0012200698240520458 | not captured | unresolved concentration unit (exp 'mg/liter', sim 'kg/m3') |
| T1_cmax | reference | skipped | 3.7 | 0.0012200698240520458 | not captured | unresolved concentration unit (exp 'h', sim 'kg/m3') |
| T1_cmin_ss | reference | skipped | 0.24 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.14 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.14 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.08 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.075 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.033 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | fail | 19.2 | 26.420415970598686 | 1.3761 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 26.4 | 26.420415970598686 | 1.0008 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 26.4 | 26.420415970598686 | 1.0008 | h→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_dapsone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gatti_1996` / `Gatti_1996::reference`)
- model: `../../../knowledgebase/drugs/drug_dapsone/models/modelica/Dapsone_Gatti1996_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_dapsone/models/modelica/Dapsone_Gatti1996_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_dapsone/models/modelica/Dapsone_Gatti1996_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model diagram

The structure OpenModelica draws for this model, with **this record's parameter values** in the component labels.

<img src="drugs/drug_dapsone/Dapsone_Gatti1996_reference/Dapsone_Gatti1996_reference.svg" alt="Dapsone_Gatti1996_reference diagram" style="max-width:100%;height:auto;background:#fff;border-radius:6px;padding:8px">

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_1C_enteral.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_dapsone/Dapsone_Gatti1996_reference/Dapsone_Gatti1996_reference_modelica.zip" download>Dapsone_Gatti1996_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_dapsone/Dapsone_Gatti1996_reference/Dapsone_Gatti1996_reference_matlab.zip" download>Dapsone_Gatti1996_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_dapsone/Dapsone_Gatti1996_reference/Dapsone_Gatti1996_reference_matlab_simbio.zip" download>Dapsone_Gatti1996_reference_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_dapsone/Dapsone_Gatti1996_reference/Dapsone_Gatti1996_reference_sbml.zip" download>Dapsone_Gatti1996_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_dapsone/Dapsone_Gatti1996_reference/Dapsone_Gatti1996_reference_cellml.zip" download>Dapsone_Gatti1996_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

Runs **this record's model** in your browser as WebAssembly — nothing to install. The sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited.

<dbs-fmusim paramsurl="drugs/drug_dapsone/Dapsone_Gatti1996_reference/Dapsone_Gatti1996_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_dapsone/Dapsone_Gatti1996_reference/Dapsone_Gatti1996_reference_sim_controls.json"></dbs-fmusim>

<sub>Template `PK_1C_enteral` · parameters `Dapsone_Gatti1996_reference_params.json` · controls `Dapsone_Gatti1996_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
