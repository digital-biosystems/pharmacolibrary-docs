<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;cladribine&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/&quot;},{&quot;label&quot;:&quot;Lindemalm_2005 \u00b7 interindividual_variability&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cladribine_Lu2024_reference&quot;,&quot;label&quot;:&quot;Lu_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lu2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cladribine_Lindemalm2005_interindividual_variability&quot;,&quot;label&quot;:&quot;Lindemalm_2005_interindividual_variability&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lindemalm2005_interindividual_variability.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Cladribine_Lindemalm2005_population_average&quot;,&quot;label&quot;:&quot;Lindemalm_2005_population_average&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lindemalm2005_population_average.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cladribine_Savic2017_reference&quot;,&quot;label&quot;:&quot;Savic_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Savic2017_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cladribine — `Cladribine_Lindemalm2005_interindividual_variability`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** T1_t_half_beta
**How to address:** Open the paper's reported table and confirm the target value and its units.
<sub>owner: **scholar**</sub>

## Citation
Lindemalm S; Savic RM; Karlsson MO; Juliusson G; Liliemark J; Albertioni F et al. (2005). BMC pharmacology 5
  ·  DOI: [10.1186/1471-2210-5-4](https://doi.org/10.1186/1471-2210-5-4)

## Model component
<dbs-pgx drug="cladribine" model-id="Cladribine_Lindemalm2005_interindividual_variability" status="needs_review" stale="false" population="patients with indolent B- and T-cell lymphoid malignancies" measured-compound="cladribine" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance (L/h) | `Q22` · CL | 54 | L/h | 1.5e-05 | [l] / [h] | not captured | exact (1.0) | T3:row2:col3 | — | not captured |
| V1 (L) | `Q63` · V1 | 34 | L | 0.034 | [l] | not captured | exact (1.0) | T3:row3:col3 | — | not captured |
| Q2 (L/h) | `Q30` · Q | 61 | L/h | 1.6944444444444446e-05 | [l] / [h] | not captured | special_case (0.95) | T3:row4:col3 | — | not captured |
| V2 (L) | `Q64` · V2 | 70 | L | 0.07 | [l] | not captured | exact (1.0) | T3:row5:col3 | — | not captured |
| Q3 (L/h) | `Q308` · Q3 | 61 | L/h | 1.6944444444444446e-05 | [l] / [h] | not captured | exact (1.0) | T3:row6:col3 | — | not captured |
| V3 (L) | `Q77` · V3 | 61 | L | 0.061 | [l] | not captured | exact (1.0) | T3:row7:col3 | — | not captured |
| Oral Ka (h-1) | `Q49` · kabs | 75 | h-1 | 0.020833333333333332 | [1] / [h] | not captured | llm_confirmed (0.6) | T3:row8:col3 | — | not captured |
| Oral F | `Q40` · Fab | 4.1 | not captured | not captured | not captured | not captured | llm (0.6) | T3:row9:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']

**Interpretation flags:**
- routed 'Proportional' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cladribine
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- population split: 'interindividual variability' subgroup of Lindemalm_2005 (paper reports 2 populations: interindividual variability, population average)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T3:row2:col2 = '(4.9)'
- unparsed cell T3:row2:col4 = '(17)'
- unparsed cell T3:row3:col2 = '(13)'
- unparsed cell T3:row3:col4 = '(62)'
- unparsed cell T3:row4:col2 = '(6.8)'
- unparsed cell T3:row4:col4 = '(17)'
- unparsed cell T3:row5:col2 = '(1.8)'
- unparsed cell T3:row5:col4 = '(31)'
- unparsed cell T3:row6:col2 = '(21)'
- unparsed cell T3:row6:col4 = '(17)'
- unparsed cell T3:row7:col2 = '(13)'
- unparsed cell T3:row7:col4 = '(17)'
- unparsed cell T3:row8:col2 = '(14)'
- unparsed cell T3:row8:col4 = '(50)'
- unparsed cell T3:row9:col2 = '(7.9)'
- unparsed cell T3:row9:col4 = '(63)'
- unparsed cell T3:row10:col2 = '(9,6)'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q22 | fail | 54.0 | 39.3 | 0.7278 | 0.05 | footnote reference category |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T3:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T3:row4:col3'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T3:row6:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['T3:row8:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['T3:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T3:row5:col3'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['T3:row7:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 54.0 | not captured | not captured | ['T3:row2:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 54 L/h | not captured | not captured | ['T3:row2:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 34 L | not captured | not captured | ['T3:row3:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 70 L | not captured | not captured | ['T3:row5:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=cladribine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_alpha | reference | skipped | 0.2 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 1.3 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | fail | 16.0 | 5.48158071932417 | 0.3426 | hours→SI vs simulated h |
| T1_t_half_beta | reference | fail | 58.0 | 5.48158071932417 | 0.0945 | hours→SI vs simulated h |
| T1_t_half_beta | reference | pass | 5.0 | 5.48158071932417 | 1.0963 | hours→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_cladribine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lindemalm_2005` / `Lindemalm_2005::interindividual_variability`)
- model: `../../../knowledgebase/drugs/drug_cladribine/models/modelica/Cladribine_Lindemalm2005_interindividual_variability.mo`
- deviation: `../../../knowledgebase/drugs/drug_cladribine/models/modelica/Cladribine_Lindemalm2005_interindividual_variability.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_cladribine/models/modelica/Cladribine_Lindemalm2005_interindividual_variability.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_cladribine/Cladribine_Lindemalm2005_interindividual_variability/Cladribine_Lindemalm2005_interindividual_variability_modelica.zip" download>Cladribine_Lindemalm2005_interindividual_variability_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_cladribine/Cladribine_Lindemalm2005_interindividual_variability/Cladribine_Lindemalm2005_interindividual_variability_matlab.zip" download>Cladribine_Lindemalm2005_interindividual_variability_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_cladribine/Cladribine_Lindemalm2005_interindividual_variability/Cladribine_Lindemalm2005_interindividual_variability_matlab_simbio.zip" download>Cladribine_Lindemalm2005_interindividual_variability_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_cladribine/Cladribine_Lindemalm2005_interindividual_variability/Cladribine_Lindemalm2005_interindividual_variability_sbml.zip" download>Cladribine_Lindemalm2005_interindividual_variability_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_cladribine/Cladribine_Lindemalm2005_interindividual_variability/Cladribine_Lindemalm2005_interindividual_variability_cellml.zip" download>Cladribine_Lindemalm2005_interindividual_variability_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_cladribine/Cladribine_Lindemalm2005_interindividual_variability/Cladribine_Lindemalm2005_interindividual_variability.svg" alt="Cladribine_Lindemalm2005_interindividual_variability diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v25.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_cladribine/Cladribine_Lindemalm2005_interindividual_variability/Cladribine_Lindemalm2005_interindividual_variability_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_cladribine/Cladribine_Lindemalm2005_interindividual_variability/Cladribine_Lindemalm2005_interindividual_variability_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C_enteral` · parameters `Cladribine_Lindemalm2005_interindividual_variability_params.json` · controls `Cladribine_Lindemalm2005_interindividual_variability_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-15 06:24 UTC</sub>
