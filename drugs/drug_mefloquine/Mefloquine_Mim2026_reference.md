<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;mefloquine&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/&quot;},{&quot;label&quot;:&quot;Mim_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mefloquine_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/Mefloquine_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mefloquine_Rattanapunya2015_reference&quot;,&quot;label&quot;:&quot;Rattanapunya_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/Mefloquine_Rattanapunya2015_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mefloquine_Rufener2018_reference&quot;,&quot;label&quot;:&quot;Rufener_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/Mefloquine_Rufener2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mefloquine — `Mefloquine_Mim2026_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `mefloquine + artesunate (ASMQ, oral)`, measured `mefloquine`.

## Citation
Mim SR et al., Pharmacokinetic and pharmacodynamic mod…, Antimicrobial agents and ch… (2026)
  ·  DOI: [10.1128/aac.01717-25](https://doi.org/10.1128/aac.01717-25)

## Model component
<dbs-pgx drug="mefloquine" model-id="Mefloquine_Mim2026_reference" status="rejected" stale="false" population="P. berghei-infected mice" measured-compound="mefloquine" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Absorption rate constant, Ka | `Q49` · kabs | 24.4 | 1/h | 0.0067777777777777775 | 1/h | not captured | llm_confirmed (0.6) | Mim_2026_table_1:row0:col1, Mim_2026_table_1:row0:col2, Mim_2026_table_1:row0:col3, Mim_2026_table_1:row0:col4, Mim_2026_table_2:row1:col1 | — | not captured |
| Total clearance, CL | `Q22` · CL | 258.25 | CL | not captured | [cl] | not captured | exact (1.0) | Mim_2026_table_1:row1:col1, Mim_2026_table_1:row1:col2, Mim_2026_table_1:row1:col3, Mim_2026_table_2:row2:col1, Mim_2026_table_2:row2:col2 | — | not captured |
| Volume of central compartment, V1 ml/kg | `Q63` · V1 | 1921.4 | mL/kg | 0.134498 | L | not captured | boundary_compartment (0.9) | Mim_2026_table_1:row2:col2, Mim_2026_table_2:row3:col1, Mim_2026_table_2:row3:col2, Mim_2026_table_2:row3:col3 | — | not captured |
| Inter-compartmental clearance, Q | `Q30` · Q | 16954.46 | mL/h/kg | 0.0003296700555555555 | L/h | not captured | llm_confirmed (0.6) | Mim_2026_table_1:row4:col1, Mim_2026_table_1:row4:col2, Mim_2026_table_2:row6:col1, Mim_2026_table_2:row6:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate relative se (%) bootstrap' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- dropped PD-category row 'Baseline response, R0' → Q336 (R0, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_2:row2:col2'])
- dropped PD-category row 'Degradation rate, Kout' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_2:row3:col1', 'tab_2:row3:col2'])
- dropped PD-category row 'Half-maximal inhibitory' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_2:row4:col2', 'tab_2:row4:col3', 'tab_2:row4:col4', 'tab_2:row7:col2', 'tab_2:row7:col3', 'tab_2:row7:col4'])
- routed 'Constant error model' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- unit_dimension_mismatch: 'Total clearance, CL' → Q22 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q63 ('Volume of central compartment, V2 ml/kg', value '11342.3') — already have one for this compound
- implicit units: 'Absorption rate constant, Ka' → 1/h (from the popPK convention: 'No unit stated for AS Ka; first-order absorption rate constants are conventionally in 1/h (paper reports MQ Ka as 0.28 h')
- implicit units: 'Volume of central compartment, V1 ml/kg' → mL/kg (from the paper text: "Parameter name itself states 'V1 ml/kg'; text also reports volumes in mL/kg ('moderate volume of distribution (4,039.63 ")
- implicit units: 'Inter-compartmental clearance, Q' → mL/h/kg (from the popPK convention: "No unit stated; consistent with paper's body-weight-normalized units (clearance 286 mL/h/kg, volumes mL/kg), so intercom")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Total clearance, CL); Q63 (Volume of central compartment, V1 ml/kg); Q30 (Inter-compartmental clearance, Q)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=mefloquine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Mim_2026_table_1:row2:col1 = '4039.63 11.2'
- unparsed cell Mim_2026_table_1:row3:col1 = '41817.36 25.7'
- companion parameter table 1 transcribed (14 record(s))
- unparsed cell Mim_2026_table_2:row1:col2 = '0.6 (fixed) NA a'
- companion parameter table 2 transcribed (12 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | fail | [length] ** 3 | CL | not captured | not captured | ['Mim_2026_table_1:row1:col1', 'Mim_2026_table_1:row1:col2', 'Mim_2026_table_1:row1:col3', 'Mim_2026_table_2:row2:col1', 'Mim_2026_table_2:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Mim_2026_table_1:row4:col1', 'Mim_2026_table_1:row4:col2', 'Mim_2026_table_2:row6:col1', 'Mim_2026_table_2:row6:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Mim_2026_table_1:row0:col1', 'Mim_2026_table_1:row0:col2', 'Mim_2026_table_1:row0:col3', 'Mim_2026_table_1:row0:col4', 'Mim_2026_table_2:row1:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Mim_2026_table_1:row2:col2', 'Mim_2026_table_2:row3:col1', 'Mim_2026_table_2:row3:col2', 'Mim_2026_table_2:row3:col3'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 258.25 | not captured | not captured | ['Mim_2026_table_1:row1:col1', 'Mim_2026_table_1:row1:col2', 'Mim_2026_table_1:row1:col3', 'Mim_2026_table_2:row2:col1', 'Mim_2026_table_2:row2:col2'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 134 L | not captured | not captured | ['Mim_2026_table_1:row2:col2', 'Mim_2026_table_2:row3:col1', 'Mim_2026_table_2:row3:col2', 'Mim_2026_table_2:row3:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_mefloquine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Mim_2026` / `Mim_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:25 UTC</sub>
