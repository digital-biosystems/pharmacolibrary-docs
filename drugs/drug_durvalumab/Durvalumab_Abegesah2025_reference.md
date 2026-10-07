<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;durvalumab&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/&quot;},{&quot;label&quot;:&quot;Abegesah_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Durvalumab_Abegesah2025_reference&quot;,&quot;label&quot;:&quot;Abegesah_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Durvalumab_Zhao2026_reference&quot;,&quot;label&quot;:&quot;Zhao_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/Durvalumab_Zhao2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# durvalumab — `Durvalumab_Abegesah2025_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Abegesah A et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2025)
  ·  DOI: [10.1007/s00280-024-04743-8](https://doi.org/10.1007/s00280-024-04743-8)

## Model component
<dbs-pgx drug="durvalumab" model-id="Durvalumab_Abegesah2025_reference" status="extracted" stale="false" population="patients with advanced cancers, including biliary tract cancer" measured-compound="durvalumab" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 4 extracted, plus 4 covariate effects.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 0.298 | L/day | 3.449074074074074e-09 | L/h | 1.99 | exact (1.0) | Tab4:row2:col1, Tab4:row2:col2, Tab4:row2:col3 | — | 0.0795 (None% RSE) |
| V1 | `Q63` · V1 | 3.42 | L | 0.00342 | L | 0.931 | exact (1.0) | Tab4:row3:col1, Tab4:row3:col2, Tab4:row3:col3 | — | 0.0593 (None% RSE) |
| Q | `Q30` · Q | 0.453 | L/day | 5.243055555555556e-09 | L/h | 5.76 | exact (1.0) | Tab4:row4:col1, Tab4:row4:col2, Tab4:row4:col3 | — | not captured |
| V2 | `Q64` · V2 | 1.99 | L | 0.00199 | L | 2.23 | exact (1.0) | Tab4:row5:col1, Tab4:row5:col2, Tab4:row5:col3 | — | not captured |
| crcl_on_cl | `Q900` · crcl_on_cl | 0.134 | not captured | not captured | not captured | 15.6 | not captured (not captured) | Tab4:row11:col1, Tab4:row11:col2, Tab4:row11:col3 | — | not captured |
| Tumor type 1 on CL | `Q900` · equation variable | 0.0096 | not captured | not captured | not captured | 185 | llm_corrected (0.6) | Tab4:row18:col1, Tab4:row18:col2, Tab4:row18:col3 | — | not captured |
| sex_on_v1 | `Q900` · sex_on_v1 | -0.140 | not captured | not captured | not captured | 8.31 | not captured (not captured) | Tab4:row21:col1, Tab4:row21:col2 | — | not captured |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.342 | not captured | not captured | not captured | 9.96 | not captured (not captured) | Tab4:row17:col1, Tab4:row17:col2, Tab4:row17:col3 | — | not captured |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.518 | not captured | not captured | not captured | 5.39 | not captured (not captured) | Tab4:row22:col1, Tab4:row22:col2, Tab4:row22:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ETA CL' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Cov CL-V1' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ETA V1' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ETA Tmax' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'Proportional component' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive component' routed out of structural estimates ('Residual variability')
- dropped value-less row: 'Tmax change CL'
- dropped unlinked row (NIL): 'TC50 change CL' — extend the ontology if this is a real PK parameter (source ['Tab4:row7:col1', 'Tab4:row7:col2', 'Tab4:row7:col3'])
- dropped unlinked row (NIL): 'LAM' — extend the ontology if this is a real PK parameter (source ['Tab4:row8:col1'])
- dropped value-less row: 'Albumin on CL'
- covariate level 'CrCL on CL' → Q900:crcl_on_cl = 0.134 (linear_fractional on Q22)
- dropped value-less row: 'ECOG status on CL'
- dropped duplicate Q22 ('LDH on CL', value '0.0516') — already have one for this compound
- dropped value-less row: 'Sex on CL'
- dropped value-less row: 'COMB1 on CL'
- dropped value-less row: 'COMB2 on CL'
- dropped unlinked row (NIL): 'Tumor type 2 on CL' — extend the ontology if this is a real PK parameter (source ['Tab4:row19:col1', 'Tab4:row19:col2', 'Tab4:row19:col3'])
- dropped duplicate Q22 ('Tumor type 3 on CL', value '0.1661') — already have one for this compound
- covariate level 'Sex on V1' → Q900:sex_on_v1 = -0.140 (linear_fractional on Q22)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CL' → L/day (from the paper text: 'The paper states: “CL, 0.298 L/day” and identifies CL as clearance.')
- implicit units: 'V1' → L (from the paper text: 'The paper states: “V1, 3.42 L” and identifies V1 as the volume of distribution of the central compartment.')
- implicit units: 'Q' → L/day (from the paper text: 'The paper states: “Q, 0.452 L/day” and identifies Q as intercompartmental clearance.')
- implicit units: 'V2' → L (from the paper text: 'The paper states: “V2, 1.99 L” and identifies V2 as the volume of distribution of the peripheral compartment.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=durvalumab
- molar mass: none found for 'durvalumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell Tab4:row2:col4 = '[0.283; 0.315]'
- unparsed cell Tab4:row3:col4 = '[3.37; 3.47]'
- unparsed cell Tab4:row4:col4 = '[0.374; 0.535]'
- unparsed cell Tab4:row5:col4 = '[1.83; 2.15]'
- unparsed cell Tab4:row6:col1 = '− 0.498'
- unparsed cell Tab4:row6:col3 = '− 0.499'
- unparsed cell Tab4:row6:col4 = '[− 0.551; − 0.446]'
- unparsed cell Tab4:row7:col4 = '[44.5; 84.5]'
- unparsed cell Tab4:row10:col1 = '− 0.589'
- unparsed cell Tab4:row10:col3 = '− 0.596'
- unparsed cell Tab4:row10:col4 = '[− 0.772; − 0.430]'
- unparsed cell Tab4:row11:col4 = '[0.0925; 0.178]'
- unparsed cell Tab4:row12:col1 = '− 0.0501'
- unparsed cell Tab4:row12:col3 = '− 0.0495'
- unparsed cell Tab4:row12:col4 = '[− 0.0725; − 0.0232]'
- unparsed cell Tab4:row13:col4 = '[0.0262; 0.0740]'
- unparsed cell Tab4:row14:col1 = '− 0.161'
- unparsed cell Tab4:row14:col3 = '− 0.160'
- unparsed cell Tab4:row14:col4 = '[− 0.184; − 0.136]'
- unparsed cell Tab4:row15:col1 = '− 0.163'
- unparsed cell Tab4:row15:col3 = '− 0.1631'
- unparsed cell Tab4:row15:col4 = '[−0.192; − 0.132]'
- unparsed cell Tab4:row16:col1 = '− 0.0929'
- unparsed cell Tab4:row16:col3 = '− 0.0925'
- unparsed cell Tab4:row16:col4 = '[− 0.136; 0.0489]'
- unparsed cell Tab4:row17:col4 = '[0.270; 0.408]'
- unparsed cell Tab4:row18:col4 = '[− 0.0228; 0.0466]'
- unparsed cell Tab4:row19:col4 = '[0.00115; 0.143]'
- unparsed cell Tab4:row20:col4 = '[0.0973; 0.236]'
- unparsed cell Tab4:row21:col3 = '− 0.141'
- unparsed cell Tab4:row21:col4 = '[− 0.162; − 0.116]'
- unparsed cell Tab4:row22:col4 = '[0.463; 0.571]'
- unparsed cell Tab4:row24:col4 = '[0.0698; 0.0887]'
- unparsed cell Tab4:row25:col4 = '[0.0339; 0.0442]'
- unparsed cell Tab4:row26:col4 = '[0.0500; 0.0677]'
- unparsed cell Tab4:row27:col4 = '[0.0437; 0.0864]'
- unparsed cell Tab4:row29:col4 = '[0.246; 0.263]'
- unparsed cell Tab4:row30:col4 = '[3.55; 6.17]'
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row2:col1', 'Tab4:row2:col2', 'Tab4:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row4:col1', 'Tab4:row4:col2', 'Tab4:row4:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row3:col1', 'Tab4:row3:col2', 'Tab4:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row5:col1', 'Tab4:row5:col2', 'Tab4:row5:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.298 | not captured | not captured | ['Tab4:row2:col1', 'Tab4:row2:col2', 'Tab4:row2:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0124 L/h | not captured | not captured | ['Tab4:row2:col1', 'Tab4:row2:col2', 'Tab4:row2:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.42 L | not captured | not captured | ['Tab4:row3:col1', 'Tab4:row3:col2', 'Tab4:row3:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.99 L | not captured | not captured | ['Tab4:row5:col1', 'Tab4:row5:col2', 'Tab4:row5:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_durvalumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Abegesah_2025` / `Abegesah_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference/Durvalumab_Abegesah2025_reference_modelica.zip" download>Durvalumab_Abegesah2025_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference/Durvalumab_Abegesah2025_reference_fmi.zip" download>Durvalumab_Abegesah2025_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference/Durvalumab_Abegesah2025_reference_matlab.zip" download>Durvalumab_Abegesah2025_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference/Durvalumab_Abegesah2025_reference_matlab_simbio.zip" download>Durvalumab_Abegesah2025_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference/Durvalumab_Abegesah2025_reference_sbml.zip" download>Durvalumab_Abegesah2025_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference/Durvalumab_Abegesah2025_reference_cellml.zip" download>Durvalumab_Abegesah2025_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference/Durvalumab_Abegesah2025_reference.svg" alt="Durvalumab_Abegesah2025_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 7 mg infusion over 10 min, single dose. Doses in the paper: 7–1400 mg.

<dbs-fmusim paramsurl="drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference/Durvalumab_Abegesah2025_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference/Durvalumab_Abegesah2025_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C` · parameters `Durvalumab_Abegesah2025_reference_params.json` · controls `Durvalumab_Abegesah2025_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:18 UTC</sub>
