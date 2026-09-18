<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;acetylsalicylic acid&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/&quot;},{&quot;label&quot;:&quot;Koh_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AcetylsalicylicAcid_Thoueille2023_reference&quot;,&quot;label&quot;:&quot;Thoueille_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Thoueille2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AcetylsalicylicAcid_Zapadniuk1987_reference&quot;,&quot;label&quot;:&quot;Zapadniuk_1987_reference&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Zapadniuk1987_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AcetylsalicylicAcid_Cuny1979_reference&quot;,&quot;label&quot;:&quot;Cuny_1979_reference&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Cuny1979_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AcetylsalicylicAcid_Dziubina2026_reference&quot;,&quot;label&quot;:&quot;Dziubina_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Dziubina2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AcetylsalicylicAcid_Koh2025_reference&quot;,&quot;label&quot;:&quot;Koh_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Koh2025_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;AcetylsalicylicAcid_Shi2008_reference&quot;,&quot;label&quot;:&quot;Shi_2008_reference&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Shi2008_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AcetylsalicylicAcid_CuestaGragera2015_reference&quot;,&quot;label&quot;:&quot;Cuesta-Gragera_2015_reference&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_CuestaGragera2015_reference.md&quot;,&quot;status&quot;:&quot;not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# acetylsalicylic acid — `AcetylsalicylicAcid_Koh2025_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the model was built differently from what the record describes. Evidence: T3_param_coverage — expected 4 scholar param(s) emitted or defaulted — got 2 covered; T3_output_variable — expected Metabolite_C (measured=acetylsalicylic_acid) — got central.C; T3_topology_template — expected parent_metabolite → PK_Parent_Metabolite* — got PK_1C_enteral

**Steps:**
1. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
2. If the paper never reports it, the record cannot become a model.
3. Open the emitted .mo and compare its base class and parameters with the record.
4. Check the .deviation.json beside it for what the engineer defaulted or assumed.
5. A wrong base class or a defaulted core parameter means rebuilding, not curating.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Koh J; Khwarg J; Yu KS; Lee S; Jang IJ; Lee S et al. (2025). Drug design, development and therapy 19
  ·  DOI: [10.2147/dddt.s533428](https://doi.org/10.2147/dddt.s533428)

## Model component
<dbs-pgx drug="acetylsalicylic acid" model-id="AcetylsalicylicAcid_Koh2025_reference" status="model_quarantined" stale="false" population="healthy adults" measured-compound="acetylsalicylic_acid" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** CLm/F, Q/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| fr | `Q43` · FR | —(suppressed) | not captured | — | not captured | 4.99 | exact (1.0) | t0001:row2:col1, t0001:row2:col2 | — | 0.29 (16.5% RSE) |
| ka capsule (h−1) | `Q49` · kabs | —(suppressed) | h−1 | — | [1] / [h] | 21.8 | llm_confirmed (0.6) | t0001:row3:col1, t0001:row3:col2 | — | 1.09 (14.7% RSE) |
| Lag0 (h) | `Q83` · tlag | —(suppressed) | h | — | [h] | 8.26 | llm (0.6) | t0001:row6:col1, t0001:row6:col2 | — | not captured |
| k23 (h−1) | `Q48` · kcomp | —(suppressed) | h−1 | — | [1] / [h] | 4.11 | exact (1.0) | t0001:row7:col1, t0001:row7:col2 | — | 0.27 (15% RSE) |
| βweight_k34 | `Q304` · k31 | —(suppressed) | not captured | — | not captured | 30.9 | llm (0.6) | t0001:row10:col1, t0001:row10:col2 | — | not captured |
| CLm/F (L/h) | `Q351` · CLm/F | —(suppressed) | L/h | — | [l] / [h] | 3.86 | exact (1.0) | t0001:row11:col1, t0001:row11:col2 | — | 0.24 (11.9% RSE) |
| Q/F (L/h) | `Q69` · Q/F | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | t0001:row13:col1 | — | not captured |
| V3/F (L) | `Q78` · V3/F | —(suppressed) | L | — | [l] | 12.3 | exact (1.0) | t0001:row14:col1, t0001:row14:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q49 ('ka tablet (h−1)', value '0.053') — already have one for this compound
- dropped unlinked row (NIL): 'Tk0 (h)' — extend the ontology if this is a real PK parameter (source ['t0001:row5:col1', 't0001:row5:col2'])
- dropped duplicate Q48 ('k24 (h−1)', value '0.57') — already have one for this compound
- dropped duplicate Q48 ('k34 (h−1)', value '2.97') — already have one for this compound
- routed 'βweight_CLm' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q78 ('V4/F (L)', value '7.5') — already have one for this compound
- dropped duplicate Q78 ('V5/F (L)', value '1.98') — already have one for this compound
- dropped PD-category row 'R0 (μg/L)' → Q336 (R0, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0001:row17:col1', 't0001:row17:col2'])
- dropped PD-category row 'kout (h−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0001:row18:col1', 't0001:row18:col2'])
- dropped PD-category row 'Imax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0001:row19:col1'])
- dropped PD-category row 'IC50 (mol/L)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0001:row20:col1'])
- dropped PD-category row 'Gamma' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0001:row21:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=acetylsalicylic_acid
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['t0001:row11:col1', 't0001:row11:col2'] |
| C5_dimension_Q48 | pass | 1 / [time] | not captured | not captured | not captured | ['t0001:row7:col1', 't0001:row7:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['t0001:row3:col1', 't0001:row3:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['t0001:row13:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['t0001:row14:col1', 't0001:row14:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['t0001:row6:col1', 't0001:row6:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | fail | Metabolite_C (measured=acetylsalicylic_acid) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 4 scholar param(s) emitted or defaulted | 2 covered | not captured | neither emitted nor in defaulted[]: ['kcomp', 'Q/F'] |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | fail | parent_metabolite → PK_Parent_Metabolite* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_acetylsalicylic_acid/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Koh_2025` / `Koh_2025::reference`)
- model: `../../../knowledgebase/drugs/drug_acetylsalicylic_acid/models/modelica/_needs_review/AcetylsalicylicAcid_Koh2025_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_acetylsalicylic_acid/models/modelica/_needs_review/AcetylsalicylicAcid_Koh2025_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_acetylsalicylic_acid/models/modelica/AcetylsalicylicAcid_Koh2025_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Koh2025_reference/AcetylsalicylicAcid_Koh2025_reference_modelica.zip" download>AcetylsalicylicAcid_Koh2025_reference_modelica.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Koh2025_reference/AcetylsalicylicAcid_Koh2025_reference_fmi.zip" download>AcetylsalicylicAcid_Koh2025_reference_fmi.zip</a> <span class="pk-size">(4.0 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Koh2025_reference/AcetylsalicylicAcid_Koh2025_reference_matlab.zip" download>AcetylsalicylicAcid_Koh2025_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Koh2025_reference/AcetylsalicylicAcid_Koh2025_reference_matlab_simbio.zip" download>AcetylsalicylicAcid_Koh2025_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Koh2025_reference/AcetylsalicylicAcid_Koh2025_reference_sbml.zip" download>AcetylsalicylicAcid_Koh2025_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Koh2025_reference/AcetylsalicylicAcid_Koh2025_reference_cellml.zip" download>AcetylsalicylicAcid_Koh2025_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Koh2025_reference/AcetylsalicylicAcid_Koh2025_reference.svg" alt="AcetylsalicylicAcid_Koh2025_reference diagram"><figcaption>The structure OpenModelica draws for this model, with this record's parameter values in the component labels.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Koh2025_reference/AcetylsalicylicAcid_Koh2025_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Koh2025_reference/AcetylsalicylicAcid_Koh2025_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C` · parameters `AcetylsalicylicAcid_Koh2025_reference_params.json` · controls `AcetylsalicylicAcid_Koh2025_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
