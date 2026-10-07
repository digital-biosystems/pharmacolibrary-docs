<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;asunaprevir&quot;,&quot;href&quot;:&quot;drugs/drug_asunaprevir/&quot;},{&quot;label&quot;:&quot;Zhu_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Asunaprevir_Osawa2018_reference&quot;,&quot;label&quot;:&quot;Osawa_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_asunaprevir/Asunaprevir_Osawa2018_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Asunaprevir_Zhu2018_reference&quot;,&quot;label&quot;:&quot;Zhu_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# asunaprevir — `Asunaprevir_Zhu2018_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**Kabs has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — asunaprevir: CL/F 50.8 L/h, V1/F 47.6 L, kabs 0.484, Q/F 21.6 L/h, V2/F 561 L, D1 1.12 h.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-07 14:32:43.663445+00:00) predates the upstream re-run (2026-10-07 15:17:41.068364+00:00). Current validate status: `extracted`.

## Citation
Zhu L et al., Population Pharmacokinetic Analysis of…, Infectious diseases and the… (2018)
  ·  DOI: [10.1007/s40121-018-0197-y](https://doi.org/10.1007/s40121-018-0197-y)

## Model component
<dbs-pgx drug="asunaprevir" model-id="Asunaprevir_Zhu2018_reference" status="extracted" stale="true" population="adults with chronic HCV infection" measured-compound="asunaprevir" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 7 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 50.8 | L/h | 1.411111111111111e-05 | [l] / [h] | 4.1 | exact (1.0) | Tab2:row2:col1, Tab2:row2:col2 | — | not captured |
| Vc/F (L) | `Q290` · V1/F | 47.6 | L | 0.0476 | [l] | 5.3 | exact (1.0) | Tab2:row3:col1, Tab2:row3:col2 | — | not captured |
| Ka (1/h) | `Q49` · kabs | 0.484 | 1/h | 0.00013444444444444444 | 1/h | 0.036 | exact (1.0) | Tab2:row4:col1, Tab2:row4:col2 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 21.6 | L/h | 6e-06 | [l] / [h] | 1.9 | exact (1.0) | Tab2:row5:col1, Tab2:row5:col2 | — | not captured |
| Vp/F (L) | `Q82` · V2/F | 561 | L | 0.561 | [l] | 45 | exact (1.0) | Tab2:row6:col1, Tab2:row6:col2 | — | not captured |
| D1 (h) | `Q310` · D1 | 1.12 | h | 4032.0000000000005 | [h] | 0.07 | exact (1.0) | Tab2:row7:col1, Tab2:row7:col2 | — | not captured |
| Relative F1 ~ 600 mg | `Q87` · Frel | 0.65 | not captured | not captured | not captured | 0.09 | llm_corrected (0.6) | Tab2:row23:col1, Tab2:row23:col2 | — | not captured |
| theta_q64_weight_power | `Q900` · theta_q64_weight_power | 1.42 | not captured | not captured | not captured | 0.416 | not captured (not captured) | Tab2:row14:col1, Tab2:row14:col2 | — | not captured |
| theta_q22_race_power | `Q900` · theta_q22_race_power | 0.0386 | not captured | not captured | not captured | 0.071 | not captured (not captured) | Tab2:row15:col1, Tab2:row15:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: 'ε' routed out of structural estimates ('Residual errorc')
- dropped duplicate Q27 ('CL/F ~ induction', value '0.355') — already have one for this compound
- dropped value-less row: 'Relative F ~ tablet'
- dropped duplicate Q310 ('D1 ~ tablet', value '0.864') — already have one for this compound
- dropped value-less row: 'CL ~ age'
- dropped value-less row: 'Vc ~ female'
- dropped value-less row: 'CL ~ female'
- dropped value-less row: 'CL ~ Asian Race'
- dropped value-less row: 'CL ~ Other Race'
- dropped value-less row: 'CL ~ baseline AST'
- dropped value-less row: 'CL ~ AST'
- dropped value-less row: 'Vc ~ cirrhosis'
- dropped value-less row: 'CL ~ cirrhosis'
- dropped value-less row: 'Ka ~ tablet'
- dropped duplicate Q27 ('CL/F', value '0.168') — already have one for this compound
- dropped duplicate Q290 ('Vc/F', value '2.19') — already have one for this compound
- dropped duplicate Q49 ('Ka', value '0.300') — already have one for this compound
- dropped duplicate Q82 ('Vp/F', value '0.777') — already have one for this compound
- dropped value-less row: 'aEstimates referenced to a non-cirrhotic, male, 70-kg, 55-year-old White subject with baseline AST of 60 IU/L receiving the soft-gel prior to induction'
- dropped value-less row: 'bBootstrap statistics derived from 449 out of 500 samples. RSE equals estimate/mean × 100 for non-transformed parameters, and equals SE × 100 for log-transformed parameters'
- covariate effect for Q64 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Ka (1/h)' → 1/h (from the popPK convention: 'The paper does not state a unit for Ka. As a first-order absorption rate constant in population PK, Ka is conventionally')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=asunaprevir
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row2:col3 = '43.3, 59.1'
- unparsed cell Tab2:row3:col3 = '39.4, 60.3'
- unparsed cell Tab2:row4:col3 = '0.42, 0.563'
- unparsed cell Tab2:row5:col3 = '18.3, 25.8'
- unparsed cell Tab2:row6:col3 = '483, 661'
- unparsed cell Tab2:row7:col3 = '1.00, 1.28'
- unparsed cell Tab2:row8:col3 = '0.199, 0.5'
- unparsed cell Tab2:row9:col1 = '− 0.215'
- unparsed cell Tab2:row9:col3 = '− 0.265, − 0.154'
- unparsed cell Tab2:row10:col3 = '0.7, 1.03'
- unparsed cell Tab2:row11:col1 = '− 0.341'
- unparsed cell Tab2:row11:col3 = '− 0.477, − 0.203'
- unparsed cell Tab2:row12:col1 = '− 0.608'
- unparsed cell Tab2:row12:col3 = '− 0.857, − 0.36'
- unparsed cell Tab2:row13:col1 = '− 0.117'
- unparsed cell Tab2:row13:col3 = '− 0.168, − 0.058'
- unparsed cell Tab2:row14:col3 = '0.686, 2.242'
- unparsed cell Tab2:row15:col3 = '− 0.095, 0.188'
- unparsed cell Tab2:row16:col1 = '− 0.255'
- unparsed cell Tab2:row16:col3 = '− 0.32, − 0.198'
- unparsed cell Tab2:row17:col1 = '− 0.0678'
- unparsed cell Tab2:row17:col3 = '− 0.276, 0.123'
- unparsed cell Tab2:row18:col1 = '− 0.46'
- unparsed cell Tab2:row18:col3 = '− 0.512, − 0.403'
- unparsed cell Tab2:row19:col1 = '− − 0.29'
- unparsed cell Tab2:row19:col3 = '− 0.325, − 0.251'
- unparsed cell Tab2:row20:col1 = '− 0.835'
- unparsed cell Tab2:row20:col3 = '− 1.251, − 0.475'
- unparsed cell Tab2:row21:col1 = '− 0.378'
- unparsed cell Tab2:row21:col3 = '− 0.447, − 0.298'
- unparsed cell Tab2:row22:col1 = '− 0.503'
- unparsed cell Tab2:row22:col3 = '− 0.635, − 0.356'
- unparsed cell Tab2:row23:col3 = '0.473, 0.825'
- unparsed cell Tab2:row25:col3 = '0.145, 0.186'
- unparsed cell Tab2:row26:col3 = '1.877, 2.519'
- unparsed cell Tab2:row27:col3 = '0.229, 0.395'
- unparsed cell Tab2:row28:col3 = '0.444, 1.101'
- unparsed cell Tab2:row30:col3 = '0.36, 0.407'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row3:col1', 'Tab2:row3:col2'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['Tab2:row7:col1', 'Tab2:row7:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row6:col1', 'Tab2:row6:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 50.8 L/h | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 47.6 L | not captured | not captured | ['Tab2:row3:col1', 'Tab2:row3:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 561 L | not captured | not captured | ['Tab2:row6:col1', 'Tab2:row6:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_asunaprevir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhu_2018` / `Zhu_2018::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference/Asunaprevir_Zhu2018_reference_modelica.zip" download>Asunaprevir_Zhu2018_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference/Asunaprevir_Zhu2018_reference_fmi.zip" download>Asunaprevir_Zhu2018_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference/Asunaprevir_Zhu2018_reference_matlab.zip" download>Asunaprevir_Zhu2018_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference/Asunaprevir_Zhu2018_reference_matlab_simbio.zip" download>Asunaprevir_Zhu2018_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference/Asunaprevir_Zhu2018_reference_sbml.zip" download>Asunaprevir_Zhu2018_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference/Asunaprevir_Zhu2018_reference_cellml.zip" download>Asunaprevir_Zhu2018_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference/Asunaprevir_Zhu2018_reference.svg" alt="Asunaprevir_Zhu2018_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.484 /h, F 1). Doses in the paper: 100, 200, 600 mg.

<dbs-fmusim paramsurl="drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference/Asunaprevir_Zhu2018_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference/Asunaprevir_Zhu2018_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C_enteral` · parameters `Asunaprevir_Zhu2018_reference_params.json` · controls `Asunaprevir_Zhu2018_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:17 UTC</sub>
