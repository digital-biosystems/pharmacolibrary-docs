<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;tegafur&quot;,&quot;href&quot;:&quot;drugs/drug_tegafur/&quot;},{&quot;label&quot;:&quot;Kim_2017 \u00b7 parameter&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tegafur_Kim2017_multiple_dose&quot;,&quot;label&quot;:&quot;Kim_2017_multiple_dose&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tegafur/Tegafur_Kim2017_multiple_dose.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tegafur_Kim2017_parameter&quot;,&quot;label&quot;:&quot;Kim_2017_parameter&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tegafur/Tegafur_Kim2017_parameter.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Tegafur_Kim2017_single_dose&quot;,&quot;label&quot;:&quot;Kim_2017_single_dose&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tegafur/Tegafur_Kim2017_single_dose.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tegafur — `Tegafur_Kim2017_parameter`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The tegafur rat model was rejected because it does not reproduce the paper's tmax (1.7 h reported vs 2.51 h simulated) or terminal half-life (2.3 h vs 2.08 h), and the builder invented an absorption rate ka not reported in the source.**

The model's output was the parent compartment rather than the measured analyte tegafur, and the model structure (one-compartment enteral) did not match the paper's parent–metabolite structure with tegafur metabolizing to 5-FU. The builder substituted library defaults for the unreported absorption rate constant ka and lag time, assumed F=1 and Fm=1 without molar correction, and used first-order depot input for the apparent (/F) parameterization. Some reported values, including tmax of 1.5 h, could not be converted to SI units, so those parameters entered the model without an SI value and some comparisons could not be fully evaluated. Extracted — tegafur: tmax 1.5 h, Cmax 9.33e+03 ng/mL, AUClast 5.54e+04 ng·h/mL, AUC∞ 5.57e+04 ng·h/mL, CL/F 1.7 mL/min/kg, V/F 0.3 L/kg, AUC ratio 2.5.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `S-1`, measured `tegafur`.

## Citation
Kim TH et al., Effect of Sipjeondaebo-Tang on the Phar…, Molecules (Basel, Switzerla… (2017)
  ·  DOI: [10.3390/molecules22091488](https://doi.org/10.3390/molecules22091488)

## Model component
<dbs-pgx drug="tegafur" model-id="Tegafur_Kim2017_parameter" status="rejected" stale="false" population="Sprague-Dawley rats" measured-compound="tegafur" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Tmax (h) | `Q56` · tmax | 1.5 | h | 5400.0 | [h] | not captured | exact (1.0) | Kim_2017_table_1:row2:col1, Kim_2017_table_1:row9:col1, Kim_2017_table_1:row15:col1 | — | not captured |
| Cmax (ng/mL) | `Q32` · Cmax | 9328.0 | ng/mL | not captured | [ng] / [ml] | not captured | exact (1.0) | Kim_2017_table_1:row3:col1, Kim_2017_table_1:row10:col1, Kim_2017_table_1:row16:col1 | — | not captured |
| AUCall (ng·h/mL) | `Q74` · AUClast | 55372.7 | ng·h/mL | not captured | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Kim_2017_table_1:row4:col1, Kim_2017_table_1:row11:col1, Kim_2017_table_1:row17:col1 | — | not captured |
| AUCinf (ng·h/mL) | `Q17` · AUC∞ | 55712.7 | ng·h/mL | not captured | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Kim_2017_table_1:row5:col1, Kim_2017_table_1:row12:col1, Kim_2017_table_1:row18:col1 | — | not captured |
| CL/F (mL/min/kg) | `Q27` · CL/F | 1.7 | mL/min/kg | 1.983333333333333e-06 | [ml] / [[min] · [kg]] | not captured | exact (1.0) | Kim_2017_table_1:row6:col1, Kim_2017_table_1:row19:col1 | — | not captured |
| Vz/F (L/kg) | `Q76` · V/F | 0.3 | L/kg | 0.020999999999999998 | [l] / [kg] | not captured | exact (1.0) | Kim_2017_table_1:row7:col1, Kim_2017_table_1:row20:col1 | — | not captured |
| AUCmeta/AUCparent (%) | `Q21` · AUC ratio | 2.5 | not captured | not captured | not captured | not captured | llm (0.6) | Kim_2017_table_1:row13:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Control (n = 5)' — extend the ontology if this is a real PK parameter (source ['Kim_2017_table_1:row0:col1'])
- dropped unlinked row (NIL): 'Tegafur' — extend the ontology if this is a real PK parameter (source ['Kim_2017_table_1:row1:col1'])
- dropped unlinked row (NIL): '5-FU' — extend the ontology if this is a real PK parameter (source ['Kim_2017_table_1:row8:col1'])
- dropped unlinked row (NIL): 'Gimeracil' — extend the ontology if this is a real PK parameter (source ['Kim_2017_table_1:row14:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tegafur
- population split: 'parameter' subgroup of Kim_2017 (paper reports 6 populations: multiple dose, parameter, population mean (bsv), single dose, symbol, unit)
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell Kim_2017_table_1:row1:col3 = '3.5 ± 0.7 *'
- unparsed cell Kim_2017_table_1:row2:col4 = '3.2 ± 1.6 *'
- unparsed cell Kim_2017_table_1:row3:col4 = '4960.0 ± 431.9 *'
- unparsed cell Kim_2017_table_1:row7:col2 = '0.6 ± 0.2 *'
- unparsed cell Kim_2017_table_1:row10:col4 = '64.3 ± 23.0 *'
- unparsed cell Kim_2017_table_1:row11:col4 = '362.7 ± 96.2 *'
- unparsed cell Kim_2017_table_1:row12:col4 = '429.6 ± 83.2 *'
- unparsed cell Kim_2017_table_1:row13:col4 = '1.5 ± 0.5 *'
- unparsed cell Kim_2017_table_1:row16:col4 = '142.3 ± 41.8 *'
- unparsed cell Kim_2017_table_1:row17:col4 = '180.2 ± 41.5 *'
- unparsed cell Kim_2017_table_1:row18:col4 = '247.4 ± 57.4 *'
- unparsed cell Kim_2017_table_1:row19:col4 = '101.9 ± 22.6 *'
- unparsed cell Kim_2017_table_1:row20:col4 = '6.8 ± 0.9 *'
- companion parameter table 1 transcribed (73 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Kim_2017_table_1:row5:col1', 'Kim_2017_table_1:row12:col1', 'Kim_2017_table_1:row18:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Kim_2017_table_1:row6:col1', 'Kim_2017_table_1:row19:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Kim_2017_table_1:row3:col1', 'Kim_2017_table_1:row10:col1', 'Kim_2017_table_1:row16:col1'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Kim_2017_table_1:row2:col1', 'Kim_2017_table_1:row9:col1', 'Kim_2017_table_1:row15:col1'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Kim_2017_table_1:row4:col1', 'Kim_2017_table_1:row11:col1', 'Kim_2017_table_1:row17:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kim_2017_table_1:row7:col1', 'Kim_2017_table_1:row20:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 7.14 L/h | not captured | not captured | ['Kim_2017_table_1:row6:col1', 'Kim_2017_table_1:row19:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 21 L | not captured | not captured | ['Kim_2017_table_1:row7:col1', 'Kim_2017_table_1:row20:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | fail | Metabolite_C (measured=tegafur) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | not captured | 0.007342508303644693 | not captured | non-numeric value |
| T1_cmax | reference | skipped | 72.6 | 0.007342508303644693 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 40.9 | 0.007342508303644693 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_t_half_terminal | reference | pass | 2.3 | 2.0825449132827307 | 0.9055 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.6 | 2.0825449132827307 | 0.801 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.2 | 2.0825449132827307 | 1.7355 | h→SI vs simulated h |
| T1_t_half_terminal | reference | skipped | not captured | 2.0825449132827307 | not captured | non-numeric value |
| T1_t_half_terminal | reference | fail | 0.32166666666666666 | 2.0825449132827307 | 6.4742 | min→SI vs simulated h |
| T1_t_half_terminal | reference | skipped | not captured | 2.0825449132827307 | not captured | non-numeric value |
| T1_tmax | reference | fail | 1.7 | 2.51165319605631 | 1.4774 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.6 | 2.51165319605631 | 4.1861 | h→SI vs simulated h |
| T1_tmax | reference | pass | 3.2 | 2.51165319605631 | 0.7849 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.2 | 2.51165319605631 | 2.093 | h→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tegafur/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kim_2017` / `Kim_2017::parameter`)
- model: `../../../knowledgebase/drugs/drug_tegafur/models/modelica/Tegafur_Kim2017_parameter.mo`
- deviation: `../../../knowledgebase/drugs/drug_tegafur/models/modelica/Tegafur_Kim2017_parameter.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_tegafur/models/modelica/Tegafur_Kim2017_parameter.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 350 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Dose in the paper: 350 mg.

<dbs-fmusim paramsurl="drugs/drug_tegafur/Tegafur_Kim2017_parameter/Tegafur_Kim2017_parameter_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_tegafur/Tegafur_Kim2017_parameter/Tegafur_Kim2017_parameter_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Tegafur_Kim2017_parameter_params.json` · controls `Tegafur_Kim2017_parameter_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-15 07:47 UTC</sub>
