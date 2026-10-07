<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;ribavirin&quot;,&quot;href&quot;:&quot;drugs/drug_ribavirin/&quot;},{&quot;label&quot;:&quot;Wade_2006 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ribavirin_Jin2012_mean_of_25_leverage_runs_cv&quot;,&quot;label&quot;:&quot;Jin_2012_mean_of_25_leverage_runs_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ribavirin_Jin2012_population_mean_in_final_pk_model&quot;,&quot;label&quot;:&quot;Jin_2012_population_mean_in_final_pk_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ribavirin/Ribavirin_Jin2012_population_mean_in_final_pk_model.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ribavirin_Wade2006_reference&quot;,&quot;label&quot;:&quot;Wade_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ribavirin/Ribavirin_Wade2006_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ribavirin — `Ribavirin_Wade2006_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Wade JR et al., Pharmacokinetics of ribavirin in patien…, British journal of clinical… (2006)
  ·  DOI: [10.1111/j.1365-2125.2006.02704.x](https://doi.org/10.1111/j.1365-2125.2006.02704.x)

## Model component
<dbs-pgx drug="ribavirin" model-id="Ribavirin_Wade2006_reference" status="extracted" stale="false" population="adults with hepatitis C virus" measured-compound="ribavirin" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 9 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL* (l h -1 ) | `Q22` · CL | 19.8 | l h -1 | 5.500000000000001e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | tab_0:row2:col2, tab_0:row2:col3, tab_0:row2:col5 | — | 16 (None% RSE) |
| LBW on CL | `Q900` · equation variable | 0.00869 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | tab_0:row3:col2, tab_0:row3:col3 | — | not captured |
| V 1 (l) | `Q63` · V1 | 472 | l | 0.47200000000000003 | [l] | not captured | space_fold (0.95) | tab_0:row4:col1, tab_0:row4:col2, tab_0:row4:col3 | — | 25 (None% RSE) |
| Q2 (l h -1 ) | `Q30` · Q | 34.4 | l h -1 | 9.555555555555555e-06 | [l] / [h] | not captured | special_case (0.95) | tab_0:row5:col2, tab_0:row5:col3, tab_0:row5:col5 | — | 19 (None% RSE) |
| V 2 * (l) | `Q64` · V2 | 4910 | l | 4.91 | [l] | not captured | llm (0.6) | tab_0:row6:col1, tab_0:row6:col2, tab_0:row6:col3 | — | not captured |
| Q3 (l h -1 ) | `Q308` · Q3 | 97.7 | l h -1 | 2.713888888888889e-05 | [l] / [h] | not captured | exact (1.0) | tab_0:row8:col2, tab_0:row8:col3, tab_0:row8:col5 | — | 35 (None% RSE) |
| V 3 (l) | `Q77` · V3 | 871 | l | 0.871 | [l] | not captured | space_fold (0.95) | tab_0:row9:col1, tab_0:row9:col2, tab_0:row9:col3 | — | 43 (None% RSE) |
| F 1 (fasting and standard meal) F 1 (high-fat meal) | `Q40` · Fab | 1 | high-fat meal | not captured | [h] · [fatmeal] · [igh] | not captured | llm (0.6) | tab_0:row10:col1, tab_0:row10:col2, tab_0:row10:col3, tab_0:row10:col5, tab_0:row10:col7 | — | not captured |
| D1 (fasting and standard meal) (h) D1 (high-fat meal) (h) | `Q310` · D1 | 710 | h | 2556000.0 | [h] | not captured | llm_confirmed (0.6) | tab_0:row11:col5, tab_0:row11:col7 | — | 8.5 (None% RSE) |
| K a (fasting) (h -1 ) | `Q49` · kabs | 1.45 | h -1 | 0.0004027777777777778 | [1] / [h] | not captured | space_fold (0.95) | tab_0:row12:col2, tab_0:row12:col3 | — | 30 (None% RSE) |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- table section iiv: 'CL* (l h -1 )' routed out of structural estimates ('Interindividual')
- table section iiv: 'V 1 (l)' routed out of structural estimates ('Interindividual')
- table section iiv: 'Q2 (l h -1 )' routed out of structural estimates ('Interindividual')
- table section iiv: 'V 2 * (l)' routed out of structural estimates ('Interindividual')
- table section iiv: 'Q3 (l h -1 )' routed out of structural estimates ('Interindividual')
- table section iiv: 'V 3 (l)' routed out of structural estimates ('Interindividual')
- table section iiv: 'F 1 (fasting and standard meal) F 1 (high-fat meal)' routed out of structural estimates ('Interindividual')
- table section iov: 'F 1 (fasting and standard meal) F 1 (high-fat meal)' routed out of structural estimates ('Interoccasion')
- table section iiv: 'D1 (fasting and standard meal) (h) D1 (high-fat meal) (h)' routed out of structural estimates ('Interindividual')
- table section iov: 'D1 (fasting and standard meal) (h) D1 (high-fat meal) (h)' routed out of structural estimates ('Interoccasion')
- table section iiv: 'K a (standard meal) (h -1 )' routed out of structural estimates ('Interindividual')
- table section iov: 'K a (standard meal) (h -1 )' routed out of structural estimates ('Interoccasion')
- dropped duplicate Q64 ('LBW on V 2', value '0.011') — already have one for this compound
- unit_dimension_unknown: 'high-fat meal' (Fab)
- dropped duplicate Q49 ('K a (standard meal) (h -1 )', value '0.767') — already have one for this compound
- dropped duplicate Q49 ('K a (high-fat meal) (h -1 )', value '0.99') — already have one for this compound
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['tab_0:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2' from footnote/prose loose number None (source ['tab_0:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ribavirin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_0:row11:col2 = '0.498 0.740'
- unparsed cell tab_0:row11:col3 = '8.5 11'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 303.0 | 281.538 | 0.9292 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row2:col2', 'tab_0:row2:col3', 'tab_0:row2:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row5:col2', 'tab_0:row5:col3', 'tab_0:row5:col5'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row8:col2', 'tab_0:row8:col3', 'tab_0:row8:col5'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['tab_0:row11:col5', 'tab_0:row11:col7'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_0:row12:col2', 'tab_0:row12:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row6:col1', 'tab_0:row6:col2', 'tab_0:row6:col3'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row9:col1', 'tab_0:row9:col2', 'tab_0:row9:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 19.8 | not captured | not captured | ['tab_0:row2:col2', 'tab_0:row2:col3', 'tab_0:row2:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 19.8 L/h | not captured | not captured | ['tab_0:row2:col2', 'tab_0:row2:col3', 'tab_0:row2:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 472 L | not captured | not captured | ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.91e+03 L | not captured | not captured | ['tab_0:row6:col1', 'tab_0:row6:col2', 'tab_0:row6:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ribavirin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wade_2006` / `Wade_2006::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ribavirin/Ribavirin_Wade2006_reference/Ribavirin_Wade2006_reference_modelica.zip" download>Ribavirin_Wade2006_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ribavirin/Ribavirin_Wade2006_reference/Ribavirin_Wade2006_reference_fmi.zip" download>Ribavirin_Wade2006_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ribavirin/Ribavirin_Wade2006_reference/Ribavirin_Wade2006_reference_matlab.zip" download>Ribavirin_Wade2006_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ribavirin/Ribavirin_Wade2006_reference/Ribavirin_Wade2006_reference_matlab_simbio.zip" download>Ribavirin_Wade2006_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ribavirin/Ribavirin_Wade2006_reference/Ribavirin_Wade2006_reference_sbml.zip" download>Ribavirin_Wade2006_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ribavirin/Ribavirin_Wade2006_reference/Ribavirin_Wade2006_reference_cellml.zip" download>Ribavirin_Wade2006_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_ribavirin/Ribavirin_Wade2006_reference/Ribavirin_Wade2006_reference.svg" alt="Ribavirin_Wade2006_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 600 mg, single dose, first-order absorption (ka 1.45 /h, F 0.9). Doses in the paper: 600, 800, 1000, 1200 mg.

<dbs-fmusim paramsurl="drugs/drug_ribavirin/Ribavirin_Wade2006_reference/Ribavirin_Wade2006_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_ribavirin/Ribavirin_Wade2006_reference/Ribavirin_Wade2006_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C_enteral` · parameters `Ribavirin_Wade2006_reference_params.json` · controls `Ribavirin_Wade2006_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:48 UTC</sub>
