<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;iopamidol&quot;,&quot;href&quot;:&quot;drugs/drug_iopamidol/&quot;},{&quot;label&quot;:&quot;Hooper_2025 \u00b7 stoch_approx&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Iopamidol_Hooper2025_final&quot;,&quot;label&quot;:&quot;Hooper_2025_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_iopamidol/Iopamidol_Hooper2025_final.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iopamidol_Hooper2025_pragmatic_model&quot;,&quot;label&quot;:&quot;Hooper_2025_pragmatic_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_iopamidol/Iopamidol_Hooper2025_pragmatic_model.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# iopamidol — `Iopamidol_Hooper2025_stoch_approx`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Hooper L et al., Pharmacokinetic Characterization of Iop…, Journal of clinical pharmac… (2025)
  ·  DOI: [10.1002/jcph.70046](https://doi.org/10.1002/jcph.70046)

## Model component
<dbs-pgx drug="iopamidol" model-id="Iopamidol_Hooper2025_stoch_approx" status="rejected" stale="false" population="healthy adults with varying kidney function" measured-compound="iopamidol" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cl_pop | `Q22` · CL | 2.394 | mL/min | 3.99e-08 | L/h | not captured | llm (0.6) | Hooper_2025_table_S25:row2:col2, Hooper_2025_table_S25:row2:col4, Hooper_2025_table_S25:row2:col5, Hooper_2025_table_S25:row2:col6, Hooper_2025_table_S27:row2:col2, Hooper_2025_table_S27:row2:col4, Hooper_2025_table_S27:row2:col5, Hooper_2025_table_S27:row2:col6 | — | 14.579 (None% RSE) |
| beta_Cl_logtEGFR_comb | `Q900` · equation variable | 0.0766 | not captured | not captured | not captured | not captured | llm (0.6) | Hooper_2025_table_S25:row4:col2, Hooper_2025_table_S25:row4:col4, Hooper_2025_table_S25:row4:col5, Hooper_2025_table_S27:row4:col2, Hooper_2025_table_S27:row4:col4, Hooper_2025_table_S27:row4:col5 | — | not captured |
| V1_pop | `Q63` · V1 | 457.506 | L | 0.45750599999999997 | L | not captured | llm (0.6) | Hooper_2025_table_S25:row5:col2, Hooper_2025_table_S25:row5:col4, Hooper_2025_table_S25:row5:col5, Hooper_2025_table_S25:row5:col6, Hooper_2025_table_S27:row5:col2, Hooper_2025_table_S27:row5:col4, Hooper_2025_table_S27:row5:col5, Hooper_2025_table_S27:row5:col6 | — | 24.864 (None% RSE) |
| V2_pop | `Q64` · V2 | 350.195 | L | 0.350195 | L | not captured | llm (0.6) | Hooper_2025_table_S25:row8:col2, Hooper_2025_table_S25:row8:col4, Hooper_2025_table_S25:row8:col5, Hooper_2025_table_S25:row8:col6, Hooper_2025_table_S27:row8:col2, Hooper_2025_table_S27:row8:col4, Hooper_2025_table_S27:row8:col5, Hooper_2025_table_S27:row8:col6 | — | 21.449 (None% RSE) |
| beta_Cl_logtBSA_mosteller | `Q354` · CLnorm | 0.209 | not captured | not captured | not captured | not captured | llm (0.6) | Hooper_2025_table_S27:row3:col2, Hooper_2025_table_S27:row3:col4, Hooper_2025_table_S27:row3:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- routed 'beta_Cl_Sex_1' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'beta_V1_Sex_1' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Q_pop' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row7:col2', 'Hooper_2025_table_S25:row7:col4', 'Hooper_2025_table_S25:row7:col5', 'Hooper_2025_table_S25:row7:col6', 'Hooper_2025_table_S27:row7:col2', 'Hooper_2025_table_S27:row7:col4', 'Hooper_2025_table_S27:row7:col5', 'Hooper_2025_table_S27:row7:col6'])
- dropped unlinked row (NIL): 'beta_V2_logtWeight' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row9:col2', 'Hooper_2025_table_S25:row9:col4', 'Hooper_2025_table_S25:row9:col5'])
- routed 'Cl_Sex_0' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q22 ('Cl_Sex_1', value '4.797') — already have one for this compound
- dropped unlinked row (NIL): 'V1_Sex_0' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row13:col2', 'Hooper_2025_table_S25:row13:col4', 'Hooper_2025_table_S25:row13:col5'])
- dropped unlinked row (NIL): 'V1_Sex_1' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row14:col2', 'Hooper_2025_table_S25:row14:col4', 'Hooper_2025_table_S25:row14:col5'])
- dropped duplicate Q900 ('corr_V2_Cl', value '0.201') — already have one for this compound
- dropped unlinked row (NIL): 'a' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row24:col2', 'Hooper_2025_table_S25:row24:col4', 'Hooper_2025_table_S25:row24:col5'])
- dropped duplicate Q900 ('b', value '0.00857') — already have one for this compound
- dropped duplicate Q63 ('beta_V1_logtBSA_mosteller', value '0.485') — already have one for this compound
- dropped duplicate Q64 ('beta_V2_Sex_1', value '0.122') — already have one for this compound
- dropped duplicate Q64 ('V2_Sex_0', value '287.311') — already have one for this compound
- dropped unlinked row (NIL): 'V2_Sex_1' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S27:row12:col2', 'Hooper_2025_table_S27:row12:col4', 'Hooper_2025_table_S27:row12:col5'])
- implicit units: 'Cl_pop' → mL/min (from the paper text: "Text states CL_pop estimates in mL/min: 'The estimated population clearance (CL_pop) for iohexol ... was 69.69 (95% CI; ")
- implicit units: 'V1_pop' → L (from the popPK convention: 'No unit stated for V1 in text or captions; volumes of distribution of the central compartment are conventionally reporte')
- implicit units: 'V2_pop' → L (from the popPK convention: 'No unit stated for V2 in text or captions; peripheral volume of distribution is conventionally in L, and 350.2 L is a pl')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=iopamidol
- population split: 'stoch. approx.' subgroup of Hooper_2025 (paper reports 5 populations: base model, final model, pragmatic model, stoch. approx., value)

**Extraction notes:**
- companion parameter table 2 transcribed (34 record(s), model stage 'final')
- companion parameter table S25 transcribed (103 record(s), model stage 'final')
- companion parameter table S27 transcribed (83 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3, S25, S27

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hooper_2025_table_S25:row2:col2', 'Hooper_2025_table_S25:row2:col4', 'Hooper_2025_table_S25:row2:col5', 'Hooper_2025_table_S25:row2:col6', 'Hooper_2025_table_S27:row2:col2', 'Hooper_2025_table_S27:row2:col4', 'Hooper_2025_table_S27:row2:col5', 'Hooper_2025_table_S27:row2:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hooper_2025_table_S25:row5:col2', 'Hooper_2025_table_S25:row5:col4', 'Hooper_2025_table_S25:row5:col5', 'Hooper_2025_table_S25:row5:col6', 'Hooper_2025_table_S27:row5:col2', 'Hooper_2025_table_S27:row5:col4', 'Hooper_2025_table_S27:row5:col5', 'Hooper_2025_table_S27:row5:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hooper_2025_table_S25:row8:col2', 'Hooper_2025_table_S25:row8:col4', 'Hooper_2025_table_S25:row8:col5', 'Hooper_2025_table_S25:row8:col6', 'Hooper_2025_table_S27:row8:col2', 'Hooper_2025_table_S27:row8:col4', 'Hooper_2025_table_S27:row8:col5', 'Hooper_2025_table_S27:row8:col6'] |
| C5_unit_missing_Q354 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hooper_2025_table_S27:row3:col2', 'Hooper_2025_table_S27:row3:col4', 'Hooper_2025_table_S27:row3:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.394 | not captured | not captured | ['Hooper_2025_table_S25:row2:col2', 'Hooper_2025_table_S25:row2:col4', 'Hooper_2025_table_S25:row2:col5', 'Hooper_2025_table_S25:row2:col6', 'Hooper_2025_table_S27:row2:col2', 'Hooper_2025_table_S27:row2:col4', 'Hooper_2025_table_S27:row2:col5', 'Hooper_2025_table_S27:row2:col6'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.144 L/h | not captured | not captured | ['Hooper_2025_table_S25:row2:col2', 'Hooper_2025_table_S25:row2:col4', 'Hooper_2025_table_S25:row2:col5', 'Hooper_2025_table_S25:row2:col6', 'Hooper_2025_table_S27:row2:col2', 'Hooper_2025_table_S27:row2:col4', 'Hooper_2025_table_S27:row2:col5', 'Hooper_2025_table_S27:row2:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 458 L | not captured | not captured | ['Hooper_2025_table_S25:row5:col2', 'Hooper_2025_table_S25:row5:col4', 'Hooper_2025_table_S25:row5:col5', 'Hooper_2025_table_S25:row5:col6', 'Hooper_2025_table_S27:row5:col2', 'Hooper_2025_table_S27:row5:col4', 'Hooper_2025_table_S27:row5:col5', 'Hooper_2025_table_S27:row5:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 350 L | not captured | not captured | ['Hooper_2025_table_S25:row8:col2', 'Hooper_2025_table_S25:row8:col4', 'Hooper_2025_table_S25:row8:col5', 'Hooper_2025_table_S25:row8:col6', 'Hooper_2025_table_S27:row8:col2', 'Hooper_2025_table_S27:row8:col4', 'Hooper_2025_table_S27:row8:col5', 'Hooper_2025_table_S27:row8:col6'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_iopamidol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hooper_2025` / `Hooper_2025::stoch_approx`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 22:41 UTC</sub>
