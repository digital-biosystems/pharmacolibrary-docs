<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;flucytosine&quot;,&quot;href&quot;:&quot;drugs/drug_flucytosine/&quot;},{&quot;label&quot;:&quot;Hope_2006 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flucytosine_Hope2006_reference&quot;,&quot;label&quot;:&quot;Hope_2006_reference&quot;,&quot;href&quot;:&quot;drugs/drug_flucytosine/Flucytosine_Hope2006_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Flucytosine_Stott2023_reference&quot;,&quot;label&quot;:&quot;Stott_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_flucytosine/Flucytosine_Stott2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flucytosine_Stegman1999_reference&quot;,&quot;label&quot;:&quot;Stegman_1999_reference&quot;,&quot;href&quot;:&quot;drugs/drug_flucytosine/Flucytosine_Stegman1999_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# flucytosine — `Flucytosine_Hope2006_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `kabs`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** the engineer's deviations are not documented and quantified. Evidence: T6_deviations — got invented_absorption: not acceptable.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Read the .deviation.json and confirm each deviation names what changed and why.
3. Anything undocumented needs the engineer, not a curator.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Hope WW; Warn PA; Sharp A; Howard S; Kasai M; Louie A; et al. et al. (2006). Antimicrobial agents and chemotherapy 50
  ·  DOI: [10.1128/AAC.00369-06](https://doi.org/10.1128/AAC.00369-06)

## Model component
<dbs-pgx drug="flucytosine" model-id="Flucytosine_Hope2006_reference" status="needs_review" stale="false" population="neutropenic CD1 mice with disseminated candidiasis" measured-compound="flucytosine" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| volume of the central compartment | `Q61` · V | —(suppressed) | liter | — | L | not captured | boundary (0.8) | Hope_2006:other_prose | — | not captured |
| clearance | `Q22` · CL | —(suppressed) | liter/h | — | L/h | not captured | exact (1.0) | Hope_2006:other_prose | — | not captured |
| Ka | `Q49` · kabs | —(suppressed) | h Ϫ1 | — | h Ϫ1 | not captured | exact (1.0) | Hope_2006:other_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'ka', 'Tlag']
- `invented_absorption`: ka defaulted — not reported in source

**Interpretation flags:**
- dropped unlinked row (NIL): 'Isolate' — extend the ontology if this is a real PK parameter (source ['tab_1:row0:col1'])
- salvaged Q61 ('volume of the central compartment'=0.022) from results prose — parameter table was unreadable
- salvaged Q22 ('clearance'=0.021) from results prose — parameter table was unreadable
- salvaged Q49 ('Ka'=19.58) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=flucytosine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- unit re-normalised: CL 'liter/h' now converts (value unchanged)

**Extraction notes:**
- unparsed cell tab_1:row0:col2 = 'Growth constant K g (h Ϫ1 )'
- unparsed cell tab_1:row2:col1 = '0.06 0.125 0.5 4.0'
- unparsed cell tab_1:row2:col2 = '0.174 0.308 0.279 0.267'
- unparsed cell tab_1:row2:col3 = '1.64 ϫ 10 Ϫ4 6.97 ϫ 10 Ϫ5 1.33 ϫ 10 Ϫ9 3.35 ϫ 10 Ϫ2'
- unparsed cell tab_1:row2:col4 = '9.99 ϫ 10 8 1.33 ϫ 10 7 9.99 ϫ 10 8 9.99 ϫ 10 8'
- unparsed cell tab_1:row2:col5 = '9.60 ϫ 10 3 5.12 ϫ 10 5 5.77 2.79 ϫ 10 4'
- unparsed cell tab_1:row2:col6 = '2.71 ϫ 10 2 1.03 ϫ 10 2 16.3 45.79'
- unparsed cell tab_1:row2:col7 = '0.4 0.09 5.74 ϫ 10 Ϫ7 81.42'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.021 | not captured | not captured | ['Hope_2006:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=flucytosine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_flucytosine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hope_2006` / `Hope_2006::reference`)
- model: `../../../knowledgebase/drugs/drug_flucytosine/models/modelica/Flucytosine_Hope2006_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_flucytosine/models/modelica/Flucytosine_Hope2006_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_flucytosine/models/modelica/Flucytosine_Hope2006_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_flucytosine/Flucytosine_Hope2006_reference/Flucytosine_Hope2006_reference_modelica.zip" download>Flucytosine_Hope2006_reference_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_flucytosine/Flucytosine_Hope2006_reference/Flucytosine_Hope2006_reference_matlab.zip" download>Flucytosine_Hope2006_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_flucytosine/Flucytosine_Hope2006_reference/Flucytosine_Hope2006_reference_matlab_simbio.zip" download>Flucytosine_Hope2006_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_flucytosine/Flucytosine_Hope2006_reference/Flucytosine_Hope2006_reference_sbml.zip" download>Flucytosine_Hope2006_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_flucytosine/Flucytosine_Hope2006_reference/Flucytosine_Hope2006_reference_cellml.zip" download>Flucytosine_Hope2006_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_flucytosine/Flucytosine_Hope2006_reference/Flucytosine_Hope2006_reference.svg" alt="Flucytosine_Hope2006_reference diagram"><figcaption>The structure OpenModelica draws for this model, with this record's parameter values in the component labels.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_flucytosine/Flucytosine_Hope2006_reference/Flucytosine_Hope2006_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_flucytosine/Flucytosine_Hope2006_reference/Flucytosine_Hope2006_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Flucytosine_Hope2006_reference_params.json` · controls `Flucytosine_Hope2006_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
