<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;encorafenib&quot;,&quot;href&quot;:&quot;drugs/drug_encorafenib/&quot;},{&quot;label&quot;:&quot;Yang_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Encorafenib_Yang2026_reference&quot;,&quot;label&quot;:&quot;Yang_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_encorafenib/Encorafenib_Yang2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# encorafenib — `Encorafenib_Yang2026_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Yang DZ et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2026)
  ·  DOI: [10.1007/s40262-025-01608-y](https://doi.org/10.1007/s40262-025-01608-y)

## Model component
<dbs-pgx drug="encorafenib" model-id="Encorafenib_Yang2026_reference" status="extracted" stale="false" population="healthy participants and patients with melanoma, metastatic CRC, NSCLC, or other solid tumors" measured-compound="encorafenib" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θKa (h−1) | `Q49` · kabs | 0.954 | h−1 | 0.000265 | [1] / [h] | 3.342 | llm_confirmed (0.6) | Tab2:row1:col1, Tab2:row1:col2 | — | not captured |
| θCL/F day 1 (L/h) | `Q27` · CL/F | 12.238 | L/h | 3.3994444444444444e-06 | [l] / [h] | 3.015 | llm_confirmed (0.6) | Tab2:row2:col1, Tab2:row2:col2 | — | not captured |
| θVc/F (L) | `Q290` · V1/F | 61.73 | L | 0.06173 | [l] | 2.583 | llm_confirmed (0.6) | Tab2:row3:col1, Tab2:row3:col2 | — | not captured |
| θQ/F (L/h) | `Q69` · Q/F | 1.045 | L/h | 2.9027777777777775e-07 | [l] / [h] | 2.391 | llm_confirmed (0.6) | Tab2:row4:col1, Tab2:row4:col2 | — | not captured |
| θVp/F (L) | `Q82` · V2/F | 54.549 | L | 0.054549 | [l] | 2.376 | llm_confirmed (0.6) | Tab2:row5:col1, Tab2:row5:col2 | — | not captured |
| θTurnover HL (h) | `Q57` · t1/2z | 64.279 | h | 231404.4 | [h] | 5.882 | llm (0.6) | Tab2:row6:col1, Tab2:row6:col2 | — | not captured |
| θAge on CL/F day 1 (L/h) | `Q900` · equation variable | -0.326 | L/h | not captured | [l] / [h] | 20.74 | llm_corrected (0.6) | Tab2:row14:col1, Tab2:row14:col2 | — | not captured |
| θGamma | `Q900` · θGamma | 10.0 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped PD-category row 'θEmax' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row7:col1', 'Tab2:row7:col2'])
- dropped PD-category row 'θEC50 (ng/mL)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row8:col1', 'Tab2:row8:col2'])
- kept covariate coefficient θGamma=10 (covariate Gamma) — not an ontology parameter
- routed 'θProp err' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped duplicate Q27 ('θmCRC tumor on CL/F day 1 (L/h)', value '-0.175') — already have one for this compound
- dropped duplicate Q27 ('θOther tumor type on CL/F day 1 (L/h)', value '-0.094') — already have one for this compound
- dropped duplicate Q290 ('θBWT on c(Vc/F) day 1 (L)', value '0.588') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=encorafenib
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row1:col4 = '(0.892 to 1.017)'
- unparsed cell Tab2:row1:col5 = '0.970 (0.877 to 1.083)'
- unparsed cell Tab2:row2:col4 = '(11.515 to 12.961)'
- unparsed cell Tab2:row2:col5 = '11.951 (11.066 to 12.653)'
- unparsed cell Tab2:row3:col4 = '(58.606 to 64.855)'
- unparsed cell Tab2:row3:col5 = '62.48 (58.78 to 66.99)'
- unparsed cell Tab2:row4:col4 = '(0.996 to 1.094)'
- unparsed cell Tab2:row4:col5 = '1.095 (1.023 to 1.165)'
- unparsed cell Tab2:row5:col4 = '(52.008 to 57.090)'
- unparsed cell Tab2:row5:col5 = '52.677 (49.125 to 90.174)'
- unparsed cell Tab2:row6:col4 = '(56.869 to 71.689)'
- unparsed cell Tab2:row6:col5 = '55.569 (52.816 to 60.591)'
- unparsed cell Tab2:row7:col4 = '(1.768 to 1.953)'
- unparsed cell Tab2:row7:col5 = '1.931 (1.840 to 2.398)'
- unparsed cell Tab2:row8:col4 = '(8.381 to 9.813)'
- unparsed cell Tab2:row8:col5 = '8.386 (8.033 to 9.833)'
- unparsed cell Tab2:row10:col4 = '(0.577 to 0.601)'
- unparsed cell Tab2:row10:col5 = '0.590 (0.577 to 0.603)'
- unparsed cell Tab2:row11:col4 = '(− 0.267 to − 0.083)'
- unparsed cell Tab2:row11:col5 = '− 0.178 (− 0.246 to − 0.101)'
- unparsed cell Tab2:row12:col4 = '(− 0.195 to 0.008)'
- unparsed cell Tab2:row12:col5 = '− 0.094 (− 0.171 to 0.016)'
- unparsed cell Tab2:row13:col4 = '(0.421 to 0.755)'
- unparsed cell Tab2:row13:col5 = '0.589 (0.416 to 0.757)'
- unparsed cell Tab2:row14:col4 = '(− 0.459 to − 0.194)'
- unparsed cell Tab2:row14:col5 = '− 0.325 (− 0.468 to − 0.184)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row3:col1', 'Tab2:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row1:col1', 'Tab2:row1:col2'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Tab2:row6:col1', 'Tab2:row6:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 12.2 L/h | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 61.7 L | not captured | not captured | ['Tab2:row3:col1', 'Tab2:row3:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 54.5 L | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_encorafenib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yang_2026` / `Yang_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_encorafenib/Encorafenib_Yang2026_reference/Encorafenib_Yang2026_reference_modelica.zip" download>Encorafenib_Yang2026_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_encorafenib/Encorafenib_Yang2026_reference/Encorafenib_Yang2026_reference_fmi.zip" download>Encorafenib_Yang2026_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_encorafenib/Encorafenib_Yang2026_reference/Encorafenib_Yang2026_reference_matlab.zip" download>Encorafenib_Yang2026_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_encorafenib/Encorafenib_Yang2026_reference/Encorafenib_Yang2026_reference_matlab_simbio.zip" download>Encorafenib_Yang2026_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_encorafenib/Encorafenib_Yang2026_reference/Encorafenib_Yang2026_reference_sbml.zip" download>Encorafenib_Yang2026_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_encorafenib/Encorafenib_Yang2026_reference/Encorafenib_Yang2026_reference_cellml.zip" download>Encorafenib_Yang2026_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_encorafenib/Encorafenib_Yang2026_reference/Encorafenib_Yang2026_reference.svg" alt="Encorafenib_Yang2026_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 50 mg, single dose, first-order absorption (ka 0.954 /h, F 1). Doses in the paper: 50–700 mg.

<dbs-fmusim paramsurl="drugs/drug_encorafenib/Encorafenib_Yang2026_reference/Encorafenib_Yang2026_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_encorafenib/Encorafenib_Yang2026_reference/Encorafenib_Yang2026_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C_enteral` · parameters `Encorafenib_Yang2026_reference_params.json` · controls `Encorafenib_Yang2026_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 23:38 UTC</sub>
