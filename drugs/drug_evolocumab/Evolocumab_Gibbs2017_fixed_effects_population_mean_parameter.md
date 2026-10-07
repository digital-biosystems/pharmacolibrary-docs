<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;evolocumab&quot;,&quot;href&quot;:&quot;drugs/drug_evolocumab/&quot;},{&quot;label&quot;:&quot;Gibbs_2017 \u00b7 fixed_effects_population_mean_parameter&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter&quot;,&quot;label&quot;:&quot;Gibbs_2017_fixed_effects_population_mean_parameter&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_evolocumab/Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Evolocumab_Wang2019_reference&quot;,&quot;label&quot;:&quot;Wang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_evolocumab/Evolocumab_Wang2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# evolocumab — `Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.077). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has evolocumab, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Gibbs JP et al., Impact of Target-Mediated Elimination o…, Journal of clinical pharmac… (2017)
  ·  DOI: [10.1002/jcph.840](https://doi.org/10.1002/jcph.840)

## Model component
<dbs-pgx drug="evolocumab" model-id="Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter" status="extracted" stale="false" population="healthy subjects and statin-treated hypercholesterolemic patients" measured-compound="evolocumab" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka | `Q49` · kabs | 0.245 | 1/h | 6.805555555555555e-05 | 1/h | not captured | exact (1.0) | jcph840-tbl-0002:row2:col1, jcph840-tbl-0002:row2:col2, jcph840-tbl-0002:row2:col3 | — | not captured |
| V | `Q61` · V | 2.66 | L | 0.00266 | L | not captured | exact (1.0) | jcph840-tbl-0002:row3:col2, jcph840-tbl-0002:row3:col3 | — | not captured |
| CL | `Q22` · CL | 0.256 | L/day | 2.962962962962963e-09 | L/h | not captured | exact (1.0) | jcph840-tbl-0002:row4:col2, jcph840-tbl-0002:row4:col3 | — | not captured |
| kint | `Q334` · kint | 0.0529 | 1/h | 1.4694444444444445e-05 | 1/h | not captured | exact (1.0) | jcph840-tbl-0002:row8:col1, jcph840-tbl-0002:row8:col2, jcph840-tbl-0002:row8:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped PD-category row 'kdeg' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jcph840-tbl-0002:row5:col1', 'jcph840-tbl-0002:row5:col2', 'jcph840-tbl-0002:row5:col3'])
- dropped unlinked row (NIL): 'BASEPCSK9' — extend the ontology if this is a real PK parameter (source ['jcph840-tbl-0002:row6:col2', 'jcph840-tbl-0002:row6:col3'])
- dropped unlinked row (NIL): 'kss' — extend the ontology if this is a real PK parameter (source ['jcph840-tbl-0002:row7:col2', 'jcph840-tbl-0002:row7:col3'])
- dropped unlinked row (NIL): 'θ1' — extend the ontology if this is a real PK parameter (source ['jcph840-tbl-0002:row9:col2', 'jcph840-tbl-0002:row9:col3'])
- implicit units: 'ka' → 1/h (from the popPK convention: 'The paper does not explicitly state the unit for ka in the text or table footnotes. However, ka is a first-order absorpt')
- implicit units: 'V' → L (from the paper text: "The abstract states: 'The estimated linear clearance and volume of evolocumab were 0.256 L/day and 2.66 L, respectively'")
- implicit units: 'CL' → L/day (from the paper text: "The abstract states: 'The estimated linear clearance and volume of evolocumab were 0.256 L/day and 2.66 L, respectively'")
- implicit units: 'kint' → 1/h (from the popPK convention: 'The paper does not explicitly state the unit for kint. kint is a first-order rate constant (internalization/elimination ')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (V); Q22 (CL)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=evolocumab
- population split: 'fixed effects: population mean parameter' subgroup of Gibbs_2017 (paper reports 2 populations: fixed effects: population mean parameter, random effects: intersubject/residual variance)
- molar mass: none found for 'evolocumab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell jcph840-tbl-0002:row5:col4 = '0.00a'
- unparsed cell jcph840-tbl-0002:row8:col4 = '0.00a'
- unparsed cell jcph840-tbl-0002:row9:col4 = '0.00a'
- unparsed cell jcph840-tbl-0002:row11:col4 = '−0.671 (–78)'
- unparsed cell jcph840-tbl-0002:row12:col4 = '−0.183 (–48)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.077 (1/13 fields) | 12 |

<details><summary>12 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [] | [['evolocumab', 'pcsk9', 'interconversion']] | mismatch |
| `gpt-oss:120b` | `parameters[basepcsk9]` | not captured | 0.00583 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | 0.256 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | not captured | 0.260 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 0.245 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | not captured | 0.157 | only_one_extracted |
| `gpt-oss:120b` | `parameters[kint]` | 0.0529 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[kint]` | not captured | 0.00184 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v]` | 2.66 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v]` | not captured | 0.0362 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | evolocumab | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | evolocumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 8.0 | 7.202 | 0.9002 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph840-tbl-0002:row4:col2', 'jcph840-tbl-0002:row4:col3'] |
| C5_dimension_Q334 | pass | 1 / [time] | not captured | not captured | not captured | ['jcph840-tbl-0002:row8:col1', 'jcph840-tbl-0002:row8:col2', 'jcph840-tbl-0002:row8:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['jcph840-tbl-0002:row2:col1', 'jcph840-tbl-0002:row2:col2', 'jcph840-tbl-0002:row2:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph840-tbl-0002:row3:col2', 'jcph840-tbl-0002:row3:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.256 | not captured | not captured | ['jcph840-tbl-0002:row4:col2', 'jcph840-tbl-0002:row4:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0107 L/h | not captured | not captured | ['jcph840-tbl-0002:row4:col2', 'jcph840-tbl-0002:row4:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.66 L | not captured | not captured | ['jcph840-tbl-0002:row3:col2', 'jcph840-tbl-0002:row3:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_evolocumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gibbs_2017` / `Gibbs_2017::fixed_effects_population_mean_parameter`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_evolocumab/Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter/Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter_modelica.zip" download>Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter_modelica.zip</a> <span class="pk-size">(5.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_evolocumab/Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter/Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter_fmi.zip" download>Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_evolocumab/Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter/Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter_matlab.zip" download>Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_evolocumab/Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter/Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter_matlab_simbio.zip" download>Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_evolocumab/Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter/Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter_sbml.zip" download>Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_evolocumab/Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter/Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter_cellml.zip" download>Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_evolocumab/Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter/Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter.svg" alt="Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 7 mg, single dose, first-order absorption (ka 0.245 /h, F 0.9). Doses in the paper: 7, 14, 35, 140, 280, 420 mg.

<dbs-fmusim paramsurl="drugs/drug_evolocumab/Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter/Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_evolocumab/Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter/Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter_params.json` · controls `Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:09 UTC</sub>
