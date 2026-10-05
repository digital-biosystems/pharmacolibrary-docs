<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;citalopram&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/&quot;},{&quot;label&quot;:&quot;Weisskopf_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Citalopram_Friberg2006_reference&quot;,&quot;label&quot;:&quot;Friberg_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/Citalopram_Friberg2006_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Citalopram_Weisskopf2020_reference&quot;,&quot;label&quot;:&quot;Weisskopf_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/Citalopram_Weisskopf2020_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# citalopram — `Citalopram_Weisskopf2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The citalopram (escitalopram) record was rejected because the model was built as a one-compartment PK model instead of the required three-compartment parent–metabolite structure, the output was not the measured escitalopram compartment, the k12 transfer constant (0.73 h⁻¹) was not extracted, and Vss (1310 L) was substituted for the central distribution volume.**

The paper's structure is parent–metabolite with a three-compartment PK model, but the record used a one-compartment model, so the S-desmethylcitalopram metabolism link (Kfm) and the metabolite output could not be represented; the output was set to the central parent compartment rather than the measured escitalopram compartment. Parameter coverage expected 2 parameters but only 1 was covered, with k12 (0.73 h⁻¹) neither emitted nor defaulted. The builder used Vss (1310 L) as the distribution volume because no central volume was reported, which reproduces AUC and terminal half-life but not the early distribution phase; this substitution was judged not acceptable. The residual error σ of 35.3% and clearance CL of 28.7 L/h were reported, but the structure and deviation checks failed. Extracted — citalopram: CL 28.7 L/h, Vss 1.31e+03 L, k12 0.73 h⁻¹, k31 0.54 h⁻¹, sigma 35.3.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Weisskopf E et al., A population pharmacokinetic model for…, British journal of clinical… (2020)
  ·  DOI: [10.1111/bcp.14278](https://doi.org/10.1111/bcp.14278)

## Model component
<dbs-pgx drug="citalopram" model-id="Citalopram_Weisskopf2020_reference" status="rejected" stale="false" population="depressive patients during the perinatal period" measured-compound="escitalopram" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL(SCIT) (L/h) | `Q22` · CL | 28.7 | L/h | 7.972222222222223e-06 | [l] / [h] | 8 | boundary (0.8) | Weisskopf_2020_table_p7_1:row0:col1, Weisskopf_2020_table_p7_1:row0:col2, Weisskopf_2020_table_p7_1:row0:col3, Weisskopf_2020_table_p7_1:row0:col4, Weisskopf_2020_table_p7_1:row0:col5, Weisskopf_2020_table_p7_1:row0:col6 | — | not captured |
| V(SCIT) (L) | `Q65` · Vss | 1310 | L | 1.31 | [l] | 24 | llm (0.5) | Weisskopf_2020_table_p7_1:row1:col1, Weisskopf_2020_table_p7_1:row1:col2, Weisskopf_2020_table_p7_1:row1:col3, Weisskopf_2020_table_p7_1:row1:col4, Weisskopf_2020_table_p7_1:row1:col5, Weisskopf_2020_table_p7_1:row1:col6 | — | not captured |
| k12 (h⁻¹) | `Q301` · k12 | 0.73 | h⁻¹ | 0.00020277777777777777 | [1] / [h] | 60 | exact (1.0) | Weisskopf_2020_table_p7_1:row2:col1, Weisskopf_2020_table_p7_1:row2:col2, Weisskopf_2020_table_p7_1:row2:col3, Weisskopf_2020_table_p7_1:row2:col4, Weisskopf_2020_table_p7_1:row2:col5, Weisskopf_2020_table_p7_1:row2:col6 | — | not captured |
| k30 (h⁻¹) | `Q304` · k31 | 0.54 | h⁻¹ | 0.00015000000000000001 | [1] / [h] | 162 | llm (0.5) | Weisskopf_2020_table_p7_1:row3:col3, Weisskopf_2020_table_p7_1:row3:col4, Weisskopf_2020_table_p7_1:row3:col5, Weisskopf_2020_table_p7_1:row3:col6 | — | not captured |
| σ SCIT(plasma) (%) | `Q315` · sigma | 35.3 | not captured | not captured | not captured | 10 | llm (0.5) | Weisskopf_2020_table_p7_1:row9:col1, Weisskopf_2020_table_p7_1:row9:col2, Weisskopf_2020_table_p7_1:row9:col3, Weisskopf_2020_table_p7_1:row9:col4, Weisskopf_2020_table_p7_1:row9:col5, Weisskopf_2020_table_p7_1:row9:col6 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `vss_as_v`: Vss (Q65) used as the distribution volume — no Vc/V reported

**Interpretation flags:**
- dropped unlinked row (NIL): 'VMR' — extend the ontology if this is a real PK parameter (source ['Weisskopf_2020_table_p7_1:row4:col1', 'Weisskopf_2020_table_p7_1:row4:col2', 'Weisskopf_2020_table_p7_1:row4:col3', 'Weisskopf_2020_table_p7_1:row4:col4'])
- dropped unlinked row (NIL): 'MPRD' — extend the ontology if this is a real PK parameter (source ['Weisskopf_2020_table_p7_1:row5:col3', 'Weisskopf_2020_table_p7_1:row5:col4'])
- dropped unlinked row (NIL): 'MPRM' — extend the ontology if this is a real PK parameter (source ['Weisskopf_2020_table_p7_1:row6:col5', 'Weisskopf_2020_table_p7_1:row6:col6'])
- dropped duplicate Q22 ('α(CL) (%)', value '35.4') — already have one for this compound
- dropped unlinked row (NIL): 'ω(VMR) (%)' — extend the ontology if this is a real PK parameter (source ['Weisskopf_2020_table_p7_1:row8:col3', 'Weisskopf_2020_table_p7_1:row8:col4', 'Weisskopf_2020_table_p7_1:row8:col5', 'Weisskopf_2020_table_p7_1:row8:col6'])
- dropped duplicate Q315 ('σ SDCIT(plasma) (%)', value '21.0') — already have one for this compound
- dropped duplicate Q315 ('σ SCIT(milk) (%)', value '31.5') — already have one for this compound
- dropped duplicate Q315 ('σ SDCIT(milk) (%)', value '22.8') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=escitalopram
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Weisskopf_2020_table_p7_1:row0:col1', 'Weisskopf_2020_table_p7_1:row0:col2', 'Weisskopf_2020_table_p7_1:row0:col3', 'Weisskopf_2020_table_p7_1:row0:col4', 'Weisskopf_2020_table_p7_1:row0:col5', 'Weisskopf_2020_table_p7_1:row0:col6'] |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Weisskopf_2020_table_p7_1:row2:col1', 'Weisskopf_2020_table_p7_1:row2:col2', 'Weisskopf_2020_table_p7_1:row2:col3', 'Weisskopf_2020_table_p7_1:row2:col4', 'Weisskopf_2020_table_p7_1:row2:col5', 'Weisskopf_2020_table_p7_1:row2:col6'] |
| C5_dimension_Q304 | pass | 1 / [time] | not captured | not captured | not captured | ['Weisskopf_2020_table_p7_1:row3:col3', 'Weisskopf_2020_table_p7_1:row3:col4', 'Weisskopf_2020_table_p7_1:row3:col5', 'Weisskopf_2020_table_p7_1:row3:col6'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Weisskopf_2020_table_p7_1:row1:col1', 'Weisskopf_2020_table_p7_1:row1:col2', 'Weisskopf_2020_table_p7_1:row1:col3', 'Weisskopf_2020_table_p7_1:row1:col4', 'Weisskopf_2020_table_p7_1:row1:col5', 'Weisskopf_2020_table_p7_1:row1:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 28.7 | not captured | not captured | ['Weisskopf_2020_table_p7_1:row0:col1', 'Weisskopf_2020_table_p7_1:row0:col2', 'Weisskopf_2020_table_p7_1:row0:col3', 'Weisskopf_2020_table_p7_1:row0:col4', 'Weisskopf_2020_table_p7_1:row0:col5', 'Weisskopf_2020_table_p7_1:row0:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 28.7 L/h | not captured | not captured | ['Weisskopf_2020_table_p7_1:row0:col1', 'Weisskopf_2020_table_p7_1:row0:col2', 'Weisskopf_2020_table_p7_1:row0:col3', 'Weisskopf_2020_table_p7_1:row0:col4', 'Weisskopf_2020_table_p7_1:row0:col5', 'Weisskopf_2020_table_p7_1:row0:col6'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 1.31e+03 L | not captured | not captured | ['Weisskopf_2020_table_p7_1:row1:col1', 'Weisskopf_2020_table_p7_1:row1:col2', 'Weisskopf_2020_table_p7_1:row1:col3', 'Weisskopf_2020_table_p7_1:row1:col4', 'Weisskopf_2020_table_p7_1:row1:col5', 'Weisskopf_2020_table_p7_1:row1:col6'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | fail | Metabolite_C (measured=escitalopram) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 2 scholar param(s) emitted or defaulted | 1 covered | not captured | neither emitted nor in defaulted[]: ['k12'] |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | vss_as_v: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_citalopram/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Weisskopf_2020` / `Weisskopf_2020::reference`)
- model: `../../../knowledgebase/drugs/drug_citalopram/models/modelica/Citalopram_Weisskopf2020_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_citalopram/models/modelica/Citalopram_Weisskopf2020_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_citalopram/models/modelica/Citalopram_Weisskopf2020_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 20 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 20 mg parenteral (N06AB04) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_citalopram/Citalopram_Weisskopf2020_reference/Citalopram_Weisskopf2020_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_citalopram/Citalopram_Weisskopf2020_reference/Citalopram_Weisskopf2020_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C` · parameters `Citalopram_Weisskopf2020_reference_params.json` · controls `Citalopram_Weisskopf2020_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-07-15 11:11 UTC</sub>
