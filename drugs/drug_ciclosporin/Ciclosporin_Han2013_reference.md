<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;ciclosporin&quot;,&quot;href&quot;:&quot;drugs/drug_ciclosporin/&quot;},{&quot;label&quot;:&quot;Han_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ciclosporin_Han2013_reference&quot;,&quot;label&quot;:&quot;Han_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ciclosporin/Ciclosporin_Han2013_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ciclosporin_Kauv2025_reference&quot;,&quot;label&quot;:&quot;Kauv_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ciclosporin/Ciclosporin_Kauv2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ciclosporin — `Ciclosporin_Han2013_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Han K et al., Population pharmacokinetics of cyclospo…, The AAPS journal (2013)
  ·  DOI: [10.1208/s12248-013-9500-8](https://doi.org/10.1208/s12248-013-9500-8)

## Model component
<dbs-pgx drug="ciclosporin" model-id="Ciclosporin_Han2013_reference" status="extracted" stale="false" population="transplant recipients" measured-compound="cyclosporine" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 23.5 | L/h | 6.527777777777778e-06 | [l] / [h] | not captured | exact (1.0) | Han_2013_table_2:row2:col1, Han_2013_table_2:row2:col2, Han_2013_table_2:row2:col3, Han_2013_table_2:row2:col6, Han_2013_table_2:row2:col16, Han_2013_table_2:row2:col28, Han_2013_table_2:row2:col29, Han_2013_table_2:row2:col30, Han_2013_table_2:row2:col35, Han_2013_table_2:row2:col36, Han_2013_table_2:row2:col37 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 53 | L/h | 1.4722222222222222e-05 | [l] / [h] | not captured | exact (1.0) | Han_2013_table_2:row3:col4, Han_2013_table_2:row3:col5, Han_2013_table_2:row3:col7, Han_2013_table_2:row3:col8, Han_2013_table_2:row3:col11, Han_2013_table_2:row3:col12, Han_2013_table_2:row3:col13, Han_2013_table_2:row3:col14, Han_2013_table_2:row3:col15, Han_2013_table_2:row3:col17, Han_2013_table_2:row3:col19, Han_2013_table_2:row3:col20, Han_2013_table_2:row3:col21, Han_2013_table_2:row3:col22, Han_2013_table_2:row3:col23, Han_2013_table_2:row3:col24, Han_2013_table_2:row3:col25, Han_2013_table_2:row3:col26, Han_2013_table_2:row3:col27, Han_2013_table_2:row3:col31, Han_2013_table_2:row3:col32, Han_2013_table_2:row3:col33, Han_2013_table_2:row3:col34, Han_2013_table_2:row3:col38 | — | not captured |
| V (L) | `Q61` · V | 94.4 | L | 0.09440000000000001 | [l] | not captured | exact (1.0) | Han_2013_table_2:row4:col2, Han_2013_table_2:row4:col3, Han_2013_table_2:row4:col6, Han_2013_table_2:row4:col28, Han_2013_table_2:row4:col29, Han_2013_table_2:row4:col30, Han_2013_table_2:row4:col35, Han_2013_table_2:row4:col36, Han_2013_table_2:row4:col37 | — | not captured |
| V/F (L) | `Q76` · V/F | 227 | L | 0.227 | [l] | not captured | exact (1.0) | Han_2013_table_2:row5:col5, Han_2013_table_2:row5:col7, Han_2013_table_2:row5:col11, Han_2013_table_2:row5:col12, Han_2013_table_2:row5:col13, Han_2013_table_2:row5:col15, Han_2013_table_2:row5:col17, Han_2013_table_2:row5:col19, Han_2013_table_2:row5:col20, Han_2013_table_2:row5:col21, Han_2013_table_2:row5:col22, Han_2013_table_2:row5:col23, Han_2013_table_2:row5:col24, Han_2013_table_2:row5:col25, Han_2013_table_2:row5:col26, Han_2013_table_2:row5:col27, Han_2013_table_2:row5:col31, Han_2013_table_2:row5:col32, Han_2013_table_2:row5:col33, Han_2013_table_2:row5:col34, Han_2013_table_2:row5:col38 | — | not captured |
| ka (h -1 ) | `Q49` · kabs | 1.21 | h -1 | 0.0003361111111111111 | 1/h | not captured | review_gapfill (0.7) | Kauv_2025:review | — | not captured |
| t lag (h) | `Q83` · tlag | 0.25 | h | 900.0 | h | not captured | review_gapfill (0.7) | Kauv_2025:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['k12', 'k21']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column '(17)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(18)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(19)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(21)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(23)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(25)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(27)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(28)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(29)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(30)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(31)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(33)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(34)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(35)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(36)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(37)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(38)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(39)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(40)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(41)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(42)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(43)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(44)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(45)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(46)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(47)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(48)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(49)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(50)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(51)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(53)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(54)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(22)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(32)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(52)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(20)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '(24)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'CMPT' — extend the ontology if this is a real PK parameter (source ['Han_2013_table_2:row1:col1', 'Han_2013_table_2:row1:col2', 'Han_2013_table_2:row1:col3', 'Han_2013_table_2:row1:col5', 'Han_2013_table_2:row1:col7', 'Han_2013_table_2:row1:col9', 'Han_2013_table_2:row1:col11', 'Han_2013_table_2:row1:col12', 'Han_2013_table_2:row1:col13', 'Han_2013_table_2:row1:col14', 'Han_2013_table_2:row1:col15', 'Han_2013_table_2:row1:col17', 'Han_2013_table_2:row1:col18', 'Han_2013_table_2:row1:col19', 'Han_2013_table_2:row1:col20', 'Han_2013_table_2:row1:col21', 'Han_2013_table_2:row1:col22', 'Han_2013_table_2:row1:col23', 'Han_2013_table_2:row1:col24', 'Han_2013_table_2:row1:col25', 'Han_2013_table_2:row1:col26', 'Han_2013_table_2:row1:col27', 'Han_2013_table_2:row1:col28', 'Han_2013_table_2:row1:col29', 'Han_2013_table_2:row1:col30', 'Han_2013_table_2:row1:col31', 'Han_2013_table_2:row1:col32', 'Han_2013_table_2:row1:col33', 'Han_2013_table_2:row1:col34', 'Han_2013_table_2:row1:col35', 'Han_2013_table_2:row1:col37', 'Han_2013_table_2:row1:col38'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cyclosporine
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- gap-filled Q49 (kabs) from Kauv_2025's review values (primary lacked it)
- gap-filled Q83 (tlag) from Kauv_2025's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2
- transposed table Han_2013_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Han_2013_table_2:row4:col1 = '18a'
- unparsed cell Han_2013_table_2:row5:col14 = '76.6a'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Han_2013_table_2:row2:col1', 'Han_2013_table_2:row2:col2', 'Han_2013_table_2:row2:col3', 'Han_2013_table_2:row2:col6', 'Han_2013_table_2:row2:col16', 'Han_2013_table_2:row2:col28', 'Han_2013_table_2:row2:col29', 'Han_2013_table_2:row2:col30', 'Han_2013_table_2:row2:col35', 'Han_2013_table_2:row2:col36', 'Han_2013_table_2:row2:col37'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Han_2013_table_2:row3:col4', 'Han_2013_table_2:row3:col5', 'Han_2013_table_2:row3:col7', 'Han_2013_table_2:row3:col8', 'Han_2013_table_2:row3:col11', 'Han_2013_table_2:row3:col12', 'Han_2013_table_2:row3:col13', 'Han_2013_table_2:row3:col14', 'Han_2013_table_2:row3:col15', 'Han_2013_table_2:row3:col17', 'Han_2013_table_2:row3:col19', 'Han_2013_table_2:row3:col20', 'Han_2013_table_2:row3:col21', 'Han_2013_table_2:row3:col22', 'Han_2013_table_2:row3:col23', 'Han_2013_table_2:row3:col24', 'Han_2013_table_2:row3:col25', 'Han_2013_table_2:row3:col26', 'Han_2013_table_2:row3:col27', 'Han_2013_table_2:row3:col31', 'Han_2013_table_2:row3:col32', 'Han_2013_table_2:row3:col33', 'Han_2013_table_2:row3:col34', 'Han_2013_table_2:row3:col38'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Kauv_2025:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Han_2013_table_2:row4:col2', 'Han_2013_table_2:row4:col3', 'Han_2013_table_2:row4:col6', 'Han_2013_table_2:row4:col28', 'Han_2013_table_2:row4:col29', 'Han_2013_table_2:row4:col30', 'Han_2013_table_2:row4:col35', 'Han_2013_table_2:row4:col36', 'Han_2013_table_2:row4:col37'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Han_2013_table_2:row5:col5', 'Han_2013_table_2:row5:col7', 'Han_2013_table_2:row5:col11', 'Han_2013_table_2:row5:col12', 'Han_2013_table_2:row5:col13', 'Han_2013_table_2:row5:col15', 'Han_2013_table_2:row5:col17', 'Han_2013_table_2:row5:col19', 'Han_2013_table_2:row5:col20', 'Han_2013_table_2:row5:col21', 'Han_2013_table_2:row5:col22', 'Han_2013_table_2:row5:col23', 'Han_2013_table_2:row5:col24', 'Han_2013_table_2:row5:col25', 'Han_2013_table_2:row5:col26', 'Han_2013_table_2:row5:col27', 'Han_2013_table_2:row5:col31', 'Han_2013_table_2:row5:col32', 'Han_2013_table_2:row5:col33', 'Han_2013_table_2:row5:col34', 'Han_2013_table_2:row5:col38'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Kauv_2025:review'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 23.5 L/h | not captured | not captured | ['Han_2013_table_2:row2:col1', 'Han_2013_table_2:row2:col2', 'Han_2013_table_2:row2:col3', 'Han_2013_table_2:row2:col6', 'Han_2013_table_2:row2:col16', 'Han_2013_table_2:row2:col28', 'Han_2013_table_2:row2:col29', 'Han_2013_table_2:row2:col30', 'Han_2013_table_2:row2:col35', 'Han_2013_table_2:row2:col36', 'Han_2013_table_2:row2:col37'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 53 L/h | not captured | not captured | ['Han_2013_table_2:row3:col4', 'Han_2013_table_2:row3:col5', 'Han_2013_table_2:row3:col7', 'Han_2013_table_2:row3:col8', 'Han_2013_table_2:row3:col11', 'Han_2013_table_2:row3:col12', 'Han_2013_table_2:row3:col13', 'Han_2013_table_2:row3:col14', 'Han_2013_table_2:row3:col15', 'Han_2013_table_2:row3:col17', 'Han_2013_table_2:row3:col19', 'Han_2013_table_2:row3:col20', 'Han_2013_table_2:row3:col21', 'Han_2013_table_2:row3:col22', 'Han_2013_table_2:row3:col23', 'Han_2013_table_2:row3:col24', 'Han_2013_table_2:row3:col25', 'Han_2013_table_2:row3:col26', 'Han_2013_table_2:row3:col27', 'Han_2013_table_2:row3:col31', 'Han_2013_table_2:row3:col32', 'Han_2013_table_2:row3:col33', 'Han_2013_table_2:row3:col34', 'Han_2013_table_2:row3:col38'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 94.4 L | not captured | not captured | ['Han_2013_table_2:row4:col2', 'Han_2013_table_2:row4:col3', 'Han_2013_table_2:row4:col6', 'Han_2013_table_2:row4:col28', 'Han_2013_table_2:row4:col29', 'Han_2013_table_2:row4:col30', 'Han_2013_table_2:row4:col35', 'Han_2013_table_2:row4:col36', 'Han_2013_table_2:row4:col37'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 227 L | not captured | not captured | ['Han_2013_table_2:row5:col5', 'Han_2013_table_2:row5:col7', 'Han_2013_table_2:row5:col11', 'Han_2013_table_2:row5:col12', 'Han_2013_table_2:row5:col13', 'Han_2013_table_2:row5:col15', 'Han_2013_table_2:row5:col17', 'Han_2013_table_2:row5:col19', 'Han_2013_table_2:row5:col20', 'Han_2013_table_2:row5:col21', 'Han_2013_table_2:row5:col22', 'Han_2013_table_2:row5:col23', 'Han_2013_table_2:row5:col24', 'Han_2013_table_2:row5:col25', 'Han_2013_table_2:row5:col26', 'Han_2013_table_2:row5:col27', 'Han_2013_table_2:row5:col31', 'Han_2013_table_2:row5:col32', 'Han_2013_table_2:row5:col33', 'Han_2013_table_2:row5:col34', 'Han_2013_table_2:row5:col38'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ciclosporin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Han_2013` / `Han_2013::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ciclosporin/Ciclosporin_Han2013_reference/Ciclosporin_Han2013_reference_modelica.zip" download>Ciclosporin_Han2013_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ciclosporin/Ciclosporin_Han2013_reference/Ciclosporin_Han2013_reference_fmi.zip" download>Ciclosporin_Han2013_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ciclosporin/Ciclosporin_Han2013_reference/Ciclosporin_Han2013_reference_matlab.zip" download>Ciclosporin_Han2013_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ciclosporin/Ciclosporin_Han2013_reference/Ciclosporin_Han2013_reference_matlab_simbio.zip" download>Ciclosporin_Han2013_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ciclosporin/Ciclosporin_Han2013_reference/Ciclosporin_Han2013_reference_sbml.zip" download>Ciclosporin_Han2013_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ciclosporin/Ciclosporin_Han2013_reference/Ciclosporin_Han2013_reference_cellml.zip" download>Ciclosporin_Han2013_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_ciclosporin/Ciclosporin_Han2013_reference/Ciclosporin_Han2013_reference.svg" alt="Ciclosporin_Han2013_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 250 mg, single dose, first-order absorption (ka 1.21 /h, lag 15 min, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 250 mg oral (L04AD01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_ciclosporin/Ciclosporin_Han2013_reference/Ciclosporin_Han2013_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_ciclosporin/Ciclosporin_Han2013_reference/Ciclosporin_Han2013_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C_enteral` · parameters `Ciclosporin_Han2013_reference_params.json` · controls `Ciclosporin_Han2013_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:01 UTC</sub>
