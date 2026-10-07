<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;abrocitinib&quot;,&quot;href&quot;:&quot;drugs/drug_abrocitinib/&quot;},{&quot;label&quot;:&quot;Wojciechowski_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Abrocitinib_Wojciechowski2022_reference&quot;,&quot;label&quot;:&quot;Wojciechowski_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# abrocitinib — `Abrocitinib_Wojciechowski2022_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Wojciechowski J et al., Population Pharmacokinetics of Abrociti…, Clinical pharmacokinetics (2022)
  ·  DOI: [10.1007/s40262-021-01104-z](https://doi.org/10.1007/s40262-021-01104-z)

## Model component
<dbs-pgx drug="abrocitinib" model-id="Abrocitinib_Wojciechowski2022_reference" status="extracted" stale="false" population="healthy individuals and patients with psoriasis or atopic dermatitis" measured-compound="abrocitinib" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 7 extracted, plus 5 covariate effects.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL, L/h | `Q22` · CL | 21.7 | L/h | 6.027777777777778e-06 | [l] / [h] | not captured | exact (1.0) | Tab2:row4:col1, Tab2:row4:col3 | — | not captured |
| Vc, L | `Q63` · V1 | 86.3 | L | 0.0863 | [l] | not captured | exact (1.0) | Tab2:row5:col1, Tab2:row5:col3 | — | not captured |
| Q, L/h | `Q30` · Q | 1.13 | L/h | 3.1388888888888887e-07 | [l] / [h] | not captured | exact (1.0) | Tab2:row6:col1, Tab2:row6:col3 | — | not captured |
| Vp, L | `Q64` · V2 | 8.11 | L | 0.00811 | [l] | not captured | exact (1.0) | Tab2:row7:col1, Tab2:row7:col3 | — | not captured |
| k0, mg/h | `Q307` · R1 | 73.1 | mg/h | not captured | [mg] / [h] | not captured | exact (1.0) | Tab2:row8:col1, Tab2:row8:col3 | — | not captured |
| ka, h−1 | `Q49` · kabs | 3.99 | h−1 | 0.0011083333333333333 | [1] / [h] | not captured | exact (1.0) | Tab2:row10:col1, Tab2:row10:col3 | — | not captured |
| Effect of fluconazole or fluvoxamine on F | `Q40` · Fab | 1.3 | not captured | not captured | not captured | not captured | llm (0.6) | Tab2:row20:col1, Tab2:row20:col3 | — | not captured |
| combined_effect_of_mild_and_moderate_hepatic_impairment_on_f | `Q900` · combined_effect_of_mild_and_moderate_hepatic_impairment_on_f | 1.36 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row32:col1, Tab2:row32:col3 | — | not captured |
| effect_of_female_sex_on_f | `Q900` · effect_of_female_sex_on_f | 0.348 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row37:col1, Tab2:row37:col3 | — | not captured |
| theta_q43_race | `Q900` · theta_q43_race | 0.737 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row30:col1, Tab2:row30:col3 | — | not captured |
| theta_q1_weight | `Q900` · theta_q1_weight | 0.472 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row33:col1, Tab2:row33:col3 | — | not captured |
| theta_q61_weight | `Q900` · theta_q61_weight | 0.524 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row34:col1, Tab2:row34:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- table section iiv: 'ωCL, % CV' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ωVc, % CV' routed out of structural estimates ('Interindividual variability')
- table section covariance: 'ρCL-Vc' routed out of structural estimates ('Correlation')
- dropped unlinked row (NIL): 'Objective function value' — extend the ontology if this is a real PK parameter (source ['Tab2:row1:col1'])
- dropped unlinked row (NIL): 'Condition numbera' — extend the ontology if this is a real PK parameter (source ['Tab2:row2:col1'])
- dropped unlinked row (NIL): 'AK1, mg' — extend the ontology if this is a real PK parameter (source ['Tab2:row9:col1', 'Tab2:row9:col3'])
- dropped unlinked row (NIL): 'Effect of tablet formulations on ALAG1' — extend the ontology if this is a real PK parameter (source ['Tab2:row15:col1', 'Tab2:row15:col3'])
- dropped duplicate Q22 ('Effect of rifampin on CL', value '0.24') — already have one for this compound
- dropped unlinked row (NIL): 'Effect of suspension on Ak1' — extend the ontology if this is a real PK parameter (source ['Tab2:row24:col1', 'Tab2:row24:col3'])
- dropped unlinked row (NIL): 'Effect of multiple dosing on F' — extend the ontology if this is a real PK parameter (source ['Tab2:row26:col1', 'Tab2:row26:col3'])
- dropped unlinked row (NIL): 'Rate of change in CL with respect to time (half-life), h' — extend the ontology if this is a real PK parameter (source ['Tab2:row28:col1', 'Tab2:row28:col3'])
- dropped duplicate Q40 ('Combined effect of psoriasis and AD on F', value '0.512') — already have one for this compound
- covariate level 'Combined effect of mild and moderate hepatic impairment on F' → Q900:combined_effect_of_mild_and_moderate_hepatic_impairment_on_f = 1.36 (linear_fractional on Q22)
- covariate level 'Effect of female sex on F' → Q900:effect_of_female_sex_on_f = 0.348 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'εres' — extend the ontology if this is a real PK parameter (source ['Tab2:row44:col1', 'Tab2:row44:col3'])
- covariate effect for Q43 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q61 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=abrocitinib
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row4:col2 = '20.2, 23.8'
- unparsed cell Tab2:row4:col4 = '17.9, 27.1'
- unparsed cell Tab2:row5:col2 = '81.1, 94.5'
- unparsed cell Tab2:row5:col4 = '73.7, 102'
- unparsed cell Tab2:row6:col2 = '0.994, 1.33'
- unparsed cell Tab2:row6:col4 = '0.718, 1.67'
- unparsed cell Tab2:row7:col2 = '7.6, 8.9'
- unparsed cell Tab2:row7:col4 = '5.41, 11.5'
- unparsed cell Tab2:row8:col2 = '71.2, 79.4'
- unparsed cell Tab2:row8:col4 = '55.1, 93.9'
- unparsed cell Tab2:row9:col2 = '109, 133'
- unparsed cell Tab2:row9:col4 = '102, 146'
- unparsed cell Tab2:row10:col2 = '3.48, 4.54'
- unparsed cell Tab2:row10:col4 = '3.02, 5.41'
- unparsed cell Tab2:row11:col2 = '0.429, 0.445'
- unparsed cell Tab2:row11:col4 = '0.406, 0.46'
- unparsed cell Tab2:row12:col2 = '0.48, 0.538'
- unparsed cell Tab2:row12:col4 = '0.416, 0.599'
- unparsed cell Tab2:row13:col2 = '0.434, 0.556'
- unparsed cell Tab2:row13:col4 = '0.382, 0.636'
- unparsed cell Tab2:row14:col2 = '1.05, 1.27'
- unparsed cell Tab2:row14:col4 = '0.921, 1.54'
- unparsed cell Tab2:row15:col2 = '0.167, 0.199'
- unparsed cell Tab2:row15:col4 = '0.141, 0.212'
- unparsed cell Tab2:row16:col2 = '0.169, 0.359'
- unparsed cell Tab2:row16:col4 = '− 0.0167, 1.19'
- unparsed cell Tab2:row20:col2 = '1.01, 1.61'
- unparsed cell Tab2:row20:col4 = '0.795, 2.13'
- unparsed cell Tab2:row24:col2 = '0.858, 1.48'
- unparsed cell Tab2:row24:col4 = '0.773, 2.34'
- unparsed cell Tab2:row26:col2 = '0.131, 0.351'
- unparsed cell Tab2:row26:col4 = '− 0.0216, 0.698'
- unparsed cell Tab2:row28:col2 = '14.5, 28.7'
- unparsed cell Tab2:row28:col4 = '8.31, 1189'
- unparsed cell Tab2:row30:col2 = '0.692, 0.938'
- unparsed cell Tab2:row30:col4 = '0.337, 1.92'
- unparsed cell Tab2:row31:col2 = '0.256, 0.722'
- unparsed cell Tab2:row31:col4 = '0.0678, 0.852'
- unparsed cell Tab2:row32:col2 = '0.783, 1.82'
- unparsed cell Tab2:row32:col4 = '0.489, 2.3'
- unparsed cell Tab2:row33:col2 = '0.278, 0.628'
- unparsed cell Tab2:row33:col4 = '0.238, 0.702'
- unparsed cell Tab2:row34:col2 = '0.379, 0.661'
- unparsed cell Tab2:row34:col4 = '0.341, 0.705'
- unparsed cell Tab2:row37:col2 = '0.24, 0.466'
- unparsed cell Tab2:row37:col4 = '0.103, 0.666'
- unparsed cell Tab2:row39:col2 = '51.8, 63.6'
- unparsed cell Tab2:row39:col4 = '54, 63.2'
- unparsed cell Tab2:row40:col2 = '34.8, 48'
- unparsed cell Tab2:row40:col4 = '37.4, 46.3'
- unparsed cell Tab2:row42:col2 = '0.22, 0.432'
- unparsed cell Tab2:row42:col4 = '0.211, 0.454'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q22 | fail | 21.7 | 0.453 | 0.0209 | 0.05 | footnote reference category |
| C2_base_Q30 | fail | 1.13 | 0.453 | 0.4009 | 0.05 | footnote reference category |
| C2_base_Q63 | fail | 86.3 | 0.52 | 0.006 | 0.05 | footnote reference category |
| C2_base_Q64 | fail | 8.11 | 0.52 | 0.0641 | 0.05 | footnote reference category |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row6:col1', 'Tab2:row6:col3'] |
| C5_dimension_Q307 | pass | [mass] / [time] | not captured | not captured | not captured | ['Tab2:row8:col1', 'Tab2:row8:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row10:col1', 'Tab2:row10:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row7:col1', 'Tab2:row7:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 21.7 | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 21.7 L/h | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 86.3 L | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 8.11 L | not captured | not captured | ['Tab2:row7:col1', 'Tab2:row7:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_abrocitinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wojciechowski_2022` / `Wojciechowski_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference/Abrocitinib_Wojciechowski2022_reference_modelica.zip" download>Abrocitinib_Wojciechowski2022_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference/Abrocitinib_Wojciechowski2022_reference_fmi.zip" download>Abrocitinib_Wojciechowski2022_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference/Abrocitinib_Wojciechowski2022_reference_matlab.zip" download>Abrocitinib_Wojciechowski2022_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference/Abrocitinib_Wojciechowski2022_reference_matlab_simbio.zip" download>Abrocitinib_Wojciechowski2022_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference/Abrocitinib_Wojciechowski2022_reference_sbml.zip" download>Abrocitinib_Wojciechowski2022_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference/Abrocitinib_Wojciechowski2022_reference_cellml.zip" download>Abrocitinib_Wojciechowski2022_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference/Abrocitinib_Wojciechowski2022_reference.svg" alt="Abrocitinib_Wojciechowski2022_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 200 mg, single dose, first-order absorption (ka 3.99 /h, F 0.9). Dose in the paper: 200 mg.

<dbs-fmusim paramsurl="drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference/Abrocitinib_Wojciechowski2022_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference/Abrocitinib_Wojciechowski2022_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C_enteral` · parameters `Abrocitinib_Wojciechowski2022_reference_params.json` · controls `Abrocitinib_Wojciechowski2022_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:43 UTC</sub>
