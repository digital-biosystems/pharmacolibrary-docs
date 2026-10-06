<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;rucaparib&quot;,&quot;href&quot;:&quot;drugs/drug_rucaparib/&quot;},{&quot;label&quot;:&quot;Liao_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rucaparib — `Rucaparib_Liao2022_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Liao M et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022)
  ·  DOI: [10.1007/s40262-022-01157-8](https://doi.org/10.1007/s40262-022-01157-8)

## Model component
<dbs-pgx drug="rucaparib" model-id="Rucaparib_Liao2022_reference" status="needs_review" stale="false" population="patients with cancer" measured-compound="rucaparib" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 3.17 | ng/mL | not captured | [ng] / [ml] | 30 | exact (1.0) | Tab2:row3:col2, Tab2:row3:col3, Tab2:row9:col2, Tab2:row9:col3, Tab2:row13:col2, Tab2:row13:col3, Tab2:row19:col2, Tab2:row19:col3, Tab2:row35:col2, Tab2:row41:col2 | — | not captured |
| AUC0–72h (ng·h/mL) | `Q19` · AUCt | 63.0 | ng·h/mL | not captured | [[h] · [ng]] / [ml] | 61 | llm (0.6) | Tab2:row4:col2, Tab2:row4:col3, Tab2:row14:col2, Tab2:row14:col3, Tab2:row20:col2, Tab2:row20:col3 | — | not captured |
| AUC0–inf (h ng·h/mL) | `Q17` · AUC∞ | 152000 | h·ng/mL | not captured | h·ng/mL | 76 | exact (1.0) | Tab2:row5:col2, Tab2:row5:col3 | — | not captured |
| t1/2 (h) | `Q57` · t1/2z | 7.8 | h | 28080.0 | [h] | 78 | exact (1.0) | Tab2:row6:col2, Tab2:row6:col3, Tab2:row16:col2, Tab2:row16:col3, Tab2:row22:col2, Tab2:row22:col3 | — | not captured |
| AUC0–last (ng·h/mL) | `Q74` · AUClast | 52.9 | ng·h/mL | not captured | [[h] · [ng]] / [ml] | 57.4 | exact (1.0) | Tab2:row36:col2, Tab2:row42:col2 | — | not captured |
| 480 mg BID | `Q75` · Ct | 1150 | ng/mL | not captured | [ng] / [ml] | not captured | llm (0.6) | Liao_2022_table_1:row14:col2, Liao_2022_table_1:row14:col3 | — | not captured |
| The mean (CV%) urinary clearance of total 14C-rucaparib was | `Q22` · CL | 11.4 | L/h | 3.1666666666666667e-06 | L/h | not captured | boundary (0.8) | Liao_2022:other_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'h ng·h/mL' (AUC∞)
- dropped value-less row: 'tmax (h)' (captured trailing unit 'h' for child rows)
- dropped duplicate Q19 ('AUC0–96h (h*ng/mL)', value '30200') — already have one for this compound
- dropped duplicate Q17 ('AUC0–inf (ng·h/mL)', value '66.5') — already have one for this compound
- dropped duplicate Q32 ('Cmax (pg/mL)', value '1860') — already have one for this compound
- dropped duplicate Q19 ('AUC0–72h (pg·h/mL)', value '25900') — already have one for this compound
- dropped unlinked row (NIL): '40 mg QD' — extend the ontology if this is a real PK parameter (source ['Liao_2022_table_1:row0:col2', 'Liao_2022_table_1:row0:col3'])
- dropped unlinked row (NIL): '80 mg QD' — extend the ontology if this is a real PK parameter (source ['Liao_2022_table_1:row2:col2', 'Liao_2022_table_1:row2:col3', 'Liao_2022_table_1:row2:col5'])
- dropped unlinked row (NIL): '160 mg QD' — extend the ontology if this is a real PK parameter (source ['Liao_2022_table_1:row4:col2', 'Liao_2022_table_1:row4:col3', 'Liao_2022_table_1:row4:col5'])
- dropped unlinked row (NIL): '300 mg QD' — extend the ontology if this is a real PK parameter (source ['Liao_2022_table_1:row6:col2', 'Liao_2022_table_1:row6:col3', 'Liao_2022_table_1:row6:col5'])
- dropped unlinked row (NIL): '500 mg QD' — extend the ontology if this is a real PK parameter (source ['Liao_2022_table_1:row8:col2', 'Liao_2022_table_1:row8:col3', 'Liao_2022_table_1:row8:col5'])
- dropped unlinked row (NIL): '240 mg BID' — extend the ontology if this is a real PK parameter (source ['Liao_2022_table_1:row10:col2', 'Liao_2022_table_1:row10:col3'])
- dropped unlinked row (NIL): '360 mg BID' — extend the ontology if this is a real PK parameter (source ['Liao_2022_table_1:row12:col2', 'Liao_2022_table_1:row12:col3'])
- dropped unlinked row (NIL): '600 mg BID' — extend the ontology if this is a real PK parameter (source ['Liao_2022_table_1:row16:col2', 'Liao_2022_table_1:row16:col3'])
- dropped unlinked row (NIL): '840 mg BID' — extend the ontology if this is a real PK parameter (source ['Liao_2022_table_1:row18:col2', 'Liao_2022_table_1:row18:col3'])
- salvaged Q22 ('The mean (CV%) urinary clearance of total 14C-rucaparib was'=11.4) from results prose — parameter table was unreadable
- implicit units: 'AUC0–inf (h ng·h/mL)' → h·ng/mL (from the paper text: "The provided parameters list contains the parenthetical text '(h ng·h/mL)' following the parameter name, which indicates")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=rucaparib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab2:row3:col4 = '0.99 (0.90–1.08)'
- unparsed cell Tab2:row4:col4 = '2.26 (1.93–2.65)'
- unparsed cell Tab2:row5:col4 = '2.55 (2.12–3.08)'
- unparsed cell Tab2:row7:col2 = '0.5 (0.3, 2.0)'
- unparsed cell Tab2:row7:col3 = '1.0 (0.5, 2.0)'
- unparsed cell Tab2:row9:col4 = '1.05 (0.99–1.12)'
- unparsed cell Tab2:row10:col4 = '1.49 (1.40–1.58)'
- unparsed cell Tab2:row11:col2 = '1.0 (0.5, 3.0)'
- unparsed cell Tab2:row11:col3 = '1.5 (0.5, 3.0)'
- unparsed cell Tab2:row13:col4 = '1.09 (0.93–1.27)'
- unparsed cell Tab2:row14:col4 = '1.55 (1.32–1.83)'
- unparsed cell Tab2:row15:col4 = '1.55 (1.32–1.83)'
- unparsed cell Tab2:row17:col2 = '2.0 (1.0, 3.0)'
- unparsed cell Tab2:row17:col3 = '2.0 (2.0, 3.0)'
- unparsed cell Tab2:row19:col4 = '1.13 (0.95–1.36)'
- unparsed cell Tab2:row20:col4 = '1.39 (1.14–1.68)'
- unparsed cell Tab2:row21:col4 = '1.38 (1.13–1.69)'
- unparsed cell Tab2:row23:col2 = '0.5 (0.3, 1.0)'
- unparsed cell Tab2:row23:col3 = '0.5 (0.2, 2.0)'
- unparsed cell Tab2:row25:col4 = '0.96 (0.84–1.10)'
- unparsed cell Tab2:row26:col4 = '1.20 (1.12–1.29)'
- unparsed cell Tab2:row27:col2 = '1.0 (0.5, 3.0)'
- unparsed cell Tab2:row27:col3 = '1.0 (0.5, 3.0)'
- unparsed cell Tab2:row29:col2 = '13.0 (116)d'
- unparsed cell Tab2:row29:col3 = '18.1 (107)e'
- unparsed cell Tab2:row29:col4 = '1.29 (1.07–1.55)'
- unparsed cell Tab2:row30:col2 = '145 (95.9)d'
- unparsed cell Tab2:row30:col3 = '200 (95.9)e'
- unparsed cell Tab2:row30:col4 = '1.34 (1.16–1.54)'
- unparsed cell Tab2:row31:col2 = '145 (94.0)e'
- unparsed cell Tab2:row31:col3 = '210 (93.0)e'
- unparsed cell Tab2:row31:col4 = '1.35 (1.17–1.57)'
- unparsed cell Tab2:row32:col2 = '17.5 (64.4)e'
- unparsed cell Tab2:row32:col3 = '16.6 (51.8)e'
- unparsed cell Tab2:row33:col2 = '1.5 (0.5, 4.0)d'
- unparsed cell Tab2:row33:col3 = '2.0 (0.5, 6.0)e'
- unparsed cell Tab2:row35:col3 = '0.0784 (59.7)d'
- unparsed cell Tab2:row35:col4 = '1.09 (0.94–1.27)'
- unparsed cell Tab2:row36:col3 = '1.15 (43.8)d'
- unparsed cell Tab2:row36:col4 = '1.43 (1.15–1.77)'
- unparsed cell Tab2:row37:col2 = '0.962 (28.4)f'
- unparsed cell Tab2:row37:col3 = '1.41 (35.1)g'
- unparsed cell Tab2:row38:col2 = '15.9 (40.9)e'
- unparsed cell Tab2:row38:col3 = '24.8 (63.4)e'
- unparsed cell Tab2:row39:col2 = '1.00 (0.5, 2.0)'
- unparsed cell Tab2:row39:col3 = '1.50 (1.0, 47.5)d'
- unparsed cell Tab2:row41:col3 = '3.43 (47.3)d'
- unparsed cell Tab2:row41:col4 = '1.19 (1.00–1.42)'
- unparsed cell Tab2:row42:col3 = '77.5 (51.5)d'
- unparsed cell Tab2:row42:col4 = '1.56 (1.33–1.83)'
- unparsed cell Tab2:row43:col2 = '64.0 (53.0)i'
- unparsed cell Tab2:row43:col3 = '102 (40.6)j'
- unparsed cell Tab2:row44:col2 = '38.5 (38.5)e'
- unparsed cell Tab2:row44:col3 = '46.6 (40.4)k'
- unparsed cell Tab2:row45:col2 = '1.51 (1.0, 4.0)'
- unparsed cell Tab2:row45:col3 = '1.50 (1.0, 47.5)d'
- unparsed cell Liao_2022_table_1:row0:col4 = '2.5 (1–4)'
- unparsed cell Liao_2022_table_1:row0:col5 = '915a'
- unparsed cell Liao_2022_table_1:row2:col4 = '1.5 (1–2.5)'
- unparsed cell Liao_2022_table_1:row4:col4 = '4.0 (4–6.05)'
- unparsed cell Liao_2022_table_1:row6:col4 = '2.5 (1–4.08)'
- unparsed cell Liao_2022_table_1:row8:col4 = '4 (4–4)'
- unparsed cell Liao_2022_table_1:row10:col4 = '6 (4.05–6)'
- unparsed cell Liao_2022_table_1:row10:col5 = '2800c'
- unparsed cell Liao_2022_table_1:row12:col4 = '3.23 (1.5–6)'
- unparsed cell Liao_2022_table_1:row12:col5 = '4860 (58)d'
- unparsed cell Liao_2022_table_1:row14:col4 = '2.5 (1.5–4)'
- unparsed cell Liao_2022_table_1:row14:col5 = '8810 (63)e'
- unparsed cell Liao_2022_table_1:row16:col4 = '4 (2.42–10)'
- unparsed cell Liao_2022_table_1:row16:col5 = '7200 (66)f'
- unparsed cell Liao_2022_table_1:row18:col4 = '4 (2.5–8)'
- unparsed cell Liao_2022_table_1:row18:col5 = '13,200a'
- companion parameter table 1 transcribed (34 record(s))
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Tab2:row5:col2', 'Tab2:row5:col3'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row14:col2', 'Tab2:row14:col3', 'Tab2:row20:col2', 'Tab2:row20:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row9:col2', 'Tab2:row9:col3', 'Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row19:col2', 'Tab2:row19:col3', 'Tab2:row35:col2', 'Tab2:row41:col2'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row16:col2', 'Tab2:row16:col3', 'Tab2:row22:col2', 'Tab2:row22:col3'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Tab2:row36:col2', 'Tab2:row42:col2'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Liao_2022_table_1:row14:col2', 'Liao_2022_table_1:row14:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 11.4 | not captured | not captured | ['Liao_2022:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 11.4 L/h | not captured | not captured | ['Liao_2022:other_prose'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_rucaparib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Liao_2022` / `Liao_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 21:39 UTC</sub>
