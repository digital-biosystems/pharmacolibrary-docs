<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;atomoxetine&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/&quot;},{&quot;label&quot;:&quot;Notsu_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atomoxetine_Cheng2024_reference&quot;,&quot;label&quot;:&quot;Cheng_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/Atomoxetine_Cheng2024_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atomoxetine_Tobin2026_reference&quot;,&quot;label&quot;:&quot;Tobin_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/Atomoxetine_Tobin2026_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atomoxetine_Notsu2020_reference&quot;,&quot;label&quot;:&quot;Notsu_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/Atomoxetine_Notsu2020_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atomoxetine — `Atomoxetine_Notsu2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.391). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** C8 unreachable/orphan compartment or unlinked metabolite
**Second reading:** `gpt-oss:120b` read this paper differently on `model.parameterization` (mechanistic vs apparent) and 13 more field(s) — a structural parameter, so the record is disputed.
**How to address:** read the paper and record the missing values by hand, or leave the record rejected — there is nothing here to build.
<sub>owner: **curator**</sub>

## Citation
Notsu Y; Shimizu M; Sasaki T; Nakano A; Ota M; Yoshida S; et al. et al. (2020). Drug metabolism and pharmacokinetics 35
  ·  DOI: [10.1016/j.dmpk.2019.08.005](https://doi.org/10.1016/j.dmpk.2019.08.005)

## Model component
<dbs-pgx drug="atomoxetine" model-id="Atomoxetine_Notsu2020_reference" status="rejected" stale="false" population="Japanese pediatric patients with ADHD" measured-compound="atomoxetine" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| 36 | `Q36` · Cmin | 101 | not captured | not captured | not captured | not captured | llm (0.5) | tab_2:row26:col1, tab_2:row26:col3, tab_2:row26:col4, tab_2:row26:col5, tab_2:row26:col6, tab_2:row26:col9, tab_2:row26:col10, tab_2:row26:col11 | — | not captured |
| 41 | `Q41` · FG | 106 | not captured | not captured | not captured | not captured | llm (0.5) | tab_2:row29:col1, tab_2:row29:col3, tab_2:row29:col4, tab_2:row29:col5, tab_2:row29:col6, tab_2:row29:col9, tab_2:row29:col10, tab_2:row29:col11 | — | not captured |
| 49 | `Q49` · kabs | 114 | not captured | not captured | not captured | not captured | llm (0.5) | tab_2:row34:col1, tab_2:row34:col3, tab_2:row34:col4, tab_2:row34:col5, tab_2:row34:col6, tab_2:row34:col9, tab_2:row34:col10, tab_2:row34:col11 | — | not captured |
| 53 | `Q53` · MRT | 118 | not captured | not captured | not captured | not captured | llm (0.5) | tab_2:row37:col1, tab_2:row37:col2, tab_2:row37:col3, tab_2:row37:col4, tab_2:row37:col5, tab_2:row37:col6, tab_2:row37:col9, tab_2:row37:col10, tab_2:row37:col11 | — | not captured |
| 54 | `Q54` · Qb | 119 | not captured | not captured | not captured | not captured | llm (0.5) | tab_2:row38:col2, tab_2:row38:col3, tab_2:row38:col6, tab_2:row38:col9, tab_2:row38:col10, tab_2:row38:col11 | — | not captured |
| 59 | `Q59` · t1/2α | 124 | not captured | not captured | not captured | not captured | llm (0.5) | tab_2:row41:col1, tab_2:row41:col3, tab_2:row41:col4, tab_2:row41:col5, tab_2:row41:col6, tab_2:row41:col9, tab_2:row41:col10, tab_2:row41:col11 | — | not captured |
| 31 64 65 | `Q64` · V2 | 0.223 | not captured | not captured | not captured | not captured | llm (0.5) | tab_2:row45:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '1' — extend the ontology if this is a real PK parameter (source ['tab_2:row1:col12'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['tab_2:row2:col12'])
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['tab_2:row3:col9'])
- dropped unlinked row (NIL): '4 5' — extend the ontology if this is a real PK parameter (source ['tab_2:row4:col5', 'tab_2:row4:col7', 'tab_2:row4:col8', 'tab_2:row4:col9'])
- dropped unlinked row (NIL): '6' — extend the ontology if this is a real PK parameter (source ['tab_2:row5:col12'])
- dropped unlinked row (NIL): '7' — extend the ontology if this is a real PK parameter (source ['tab_2:row6:col1', 'tab_2:row6:col2', 'tab_2:row6:col3', 'tab_2:row6:col4', 'tab_2:row6:col5', 'tab_2:row6:col6', 'tab_2:row6:col7', 'tab_2:row6:col10', 'tab_2:row6:col11', 'tab_2:row6:col12'])
- dropped unlinked row (NIL): '8' — extend the ontology if this is a real PK parameter (source ['tab_2:row7:col2', 'tab_2:row7:col4', 'tab_2:row7:col5', 'tab_2:row7:col6', 'tab_2:row7:col7', 'tab_2:row7:col10', 'tab_2:row7:col11', 'tab_2:row7:col12'])
- dropped unlinked row (NIL): '9' — extend the ontology if this is a real PK parameter (source ['tab_2:row8:col1', 'tab_2:row8:col2', 'tab_2:row8:col3', 'tab_2:row8:col4', 'tab_2:row8:col5', 'tab_2:row8:col6', 'tab_2:row8:col7', 'tab_2:row8:col10', 'tab_2:row8:col11', 'tab_2:row8:col12'])
- dropped unlinked row (NIL): '13' — extend the ontology if this is a real PK parameter (source ['tab_2:row10:col2', 'tab_2:row10:col3', 'tab_2:row10:col6', 'tab_2:row10:col9', 'tab_2:row10:col10', 'tab_2:row10:col11'])
- dropped unlinked row (NIL): '14' — extend the ontology if this is a real PK parameter (source ['tab_2:row11:col1', 'tab_2:row11:col2', 'tab_2:row11:col3', 'tab_2:row11:col4', 'tab_2:row11:col5', 'tab_2:row11:col6', 'tab_2:row11:col9', 'tab_2:row11:col10', 'tab_2:row11:col11'])
- dropped unlinked row (NIL): '6 17' — extend the ontology if this is a real PK parameter (source ['tab_2:row13:col1', 'tab_2:row13:col2', 'tab_2:row13:col3', 'tab_2:row13:col4', 'tab_2:row13:col5', 'tab_2:row13:col6', 'tab_2:row13:col9', 'tab_2:row13:col10', 'tab_2:row13:col11'])
- dropped unlinked row (NIL): '18' — extend the ontology if this is a real PK parameter (source ['tab_2:row14:col1', 'tab_2:row14:col3', 'tab_2:row14:col4', 'tab_2:row14:col5', 'tab_2:row14:col6', 'tab_2:row14:col9', 'tab_2:row14:col10', 'tab_2:row14:col11'])
- dropped unlinked row (NIL): '8 22' — extend the ontology if this is a real PK parameter (source ['tab_2:row16:col1', 'tab_2:row16:col2', 'tab_2:row16:col3', 'tab_2:row16:col4', 'tab_2:row16:col5', 'tab_2:row16:col6', 'tab_2:row16:col9', 'tab_2:row16:col10', 'tab_2:row16:col11'])
- dropped unlinked row (NIL): '23' — extend the ontology if this is a real PK parameter (source ['tab_2:row17:col1', 'tab_2:row17:col3', 'tab_2:row17:col4', 'tab_2:row17:col5', 'tab_2:row17:col6', 'tab_2:row17:col9', 'tab_2:row17:col10', 'tab_2:row17:col11'])
- dropped unlinked row (NIL): '26' — extend the ontology if this is a real PK parameter (source ['tab_2:row19:col1', 'tab_2:row19:col3', 'tab_2:row19:col4', 'tab_2:row19:col5', 'tab_2:row19:col6', 'tab_2:row19:col9', 'tab_2:row19:col10', 'tab_2:row19:col11'])
- dropped unlinked row (NIL): '11 27' — extend the ontology if this is a real PK parameter (source ['tab_2:row20:col1', 'tab_2:row20:col2', 'tab_2:row20:col3', 'tab_2:row20:col4', 'tab_2:row20:col5', 'tab_2:row20:col6', 'tab_2:row20:col9', 'tab_2:row20:col10', 'tab_2:row20:col11'])
- dropped unlinked row (NIL): '31' — extend the ontology if this is a real PK parameter (source ['tab_2:row22:col2', 'tab_2:row22:col3', 'tab_2:row22:col6', 'tab_2:row22:col9', 'tab_2:row22:col10', 'tab_2:row22:col11'])
- dropped unlinked row (NIL): '32' — extend the ontology if this is a real PK parameter (source ['tab_2:row23:col1', 'tab_2:row23:col2', 'tab_2:row23:col3', 'tab_2:row23:col4', 'tab_2:row23:col5', 'tab_2:row23:col6', 'tab_2:row23:col9', 'tab_2:row23:col10', 'tab_2:row23:col11'])
- dropped unlinked row (NIL): '15 35' — extend the ontology if this is a real PK parameter (source ['tab_2:row25:col1', 'tab_2:row25:col2', 'tab_2:row25:col3', 'tab_2:row25:col4', 'tab_2:row25:col5', 'tab_2:row25:col6', 'tab_2:row25:col9', 'tab_2:row25:col10', 'tab_2:row25:col11'])
- dropped unlinked row (NIL): '18 40' — extend the ontology if this is a real PK parameter (source ['tab_2:row28:col1', 'tab_2:row28:col2', 'tab_2:row28:col3', 'tab_2:row28:col4', 'tab_2:row28:col5', 'tab_2:row28:col6', 'tab_2:row28:col9', 'tab_2:row28:col10', 'tab_2:row28:col11'])
- dropped unlinked row (NIL): '44' — extend the ontology if this is a real PK parameter (source ['tab_2:row31:col1', 'tab_2:row31:col3', 'tab_2:row31:col4', 'tab_2:row31:col5', 'tab_2:row31:col6', 'tab_2:row31:col9', 'tab_2:row31:col10', 'tab_2:row31:col11'])
- dropped unlinked row (NIL): '21 45' — extend the ontology if this is a real PK parameter (source ['tab_2:row32:col1', 'tab_2:row32:col2', 'tab_2:row32:col3', 'tab_2:row32:col4', 'tab_2:row32:col5', 'tab_2:row32:col6', 'tab_2:row32:col9', 'tab_2:row32:col10', 'tab_2:row32:col11'])
- dropped unlinked row (NIL): '24 50' — extend the ontology if this is a real PK parameter (source ['tab_2:row35:col1', 'tab_2:row35:col2', 'tab_2:row35:col3', 'tab_2:row35:col4', 'tab_2:row35:col5', 'tab_2:row35:col6', 'tab_2:row35:col9', 'tab_2:row35:col10', 'tab_2:row35:col11'])
- dropped unlinked row (NIL): '28 58' — extend the ontology if this is a real PK parameter (source ['tab_2:row40:col1', 'tab_2:row40:col2', 'tab_2:row40:col3', 'tab_2:row40:col4', 'tab_2:row40:col5', 'tab_2:row40:col6', 'tab_2:row40:col9', 'tab_2:row40:col10', 'tab_2:row40:col11'])
- dropped unlinked row (NIL): '62' — extend the ontology if this is a real PK parameter (source ['tab_2:row43:col2', 'tab_2:row43:col3', 'tab_2:row43:col6', 'tab_2:row43:col9', 'tab_2:row43:col10', 'tab_2:row43:col11'])
- dropped unlinked row (NIL): '30 63' — extend the ontology if this is a real PK parameter (source ['tab_2:row44:col1', 'tab_2:row44:col2', 'tab_2:row44:col3', 'tab_2:row44:col4', 'tab_2:row44:col5', 'tab_2:row44:col6', 'tab_2:row44:col9', 'tab_2:row44:col10', 'tab_2:row44:col11'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=atomoxetine

**Extraction notes:**
- unparsed cell tab_2:row4:col3 = 'k el , h À1'
- unparsed cell tab_2:row4:col11 = 'Estimated 4-hydroxy-'
- unparsed cell tab_2:row4:col12 = '69 70'
- unparsed cell tab_2:row6:col8 = '79.5/20.7'
- unparsed cell tab_2:row6:col9 = '181/36.9'
- unparsed cell tab_2:row7:col8 = '39.8/10.4'
- unparsed cell tab_2:row7:col9 = '90.5/18.5'
- unparsed cell tab_2:row8:col8 = '79.5/20.7'
- unparsed cell tab_2:row8:col9 = '181/36.9'
- unparsed cell tab_2:row9:col1 = '57.4 99.7 57.4 99.7'
- unparsed cell tab_2:row9:col2 = '0.223 0.223'
- unparsed cell tab_2:row9:col3 = '429 278 483 267'
- unparsed cell tab_2:row9:col4 = '60.0 96.6 60.0 96.6'
- unparsed cell tab_2:row9:col5 = '0.750 1.50 0.750 1.50'
- unparsed cell tab_2:row9:col6 = '1.23 1.23 1.23 1.23'
- unparsed cell tab_2:row9:col7 = '39.8/10.4 79.5/20.7 39.8/10.4 79.5/20.7'
- unparsed cell tab_2:row9:col8 = '90.5/18.5 181/36.9 90.5/18.5 181/36.9'
- unparsed cell tab_2:row9:col9 = '269 220 421 165'
- unparsed cell tab_2:row9:col10 = '1640 974 1940 730'
- unparsed cell tab_2:row9:col11 = '75 76 77'
- unparsed cell tab_2:row10:col7 = '59.3/20.7'
- unparsed cell tab_2:row10:col8 = '54.1/36.9'
- unparsed cell tab_2:row11:col7 = '39.8/10.4'
- unparsed cell tab_2:row11:col8 = '90.5/18.5'
- unparsed cell tab_2:row12:col1 = '99.7 57.4'
- unparsed cell tab_2:row12:col2 = '0.157 0.223'
- unparsed cell tab_2:row12:col3 = '749 116 194'
- unparsed cell tab_2:row12:col4 = '96.6 60.0'
- unparsed cell tab_2:row12:col5 = '1.50 0.750'
- unparsed cell tab_2:row12:col6 = '0.797 1.23 1.23'
- unparsed cell tab_2:row12:col7 = '29.7/10.4 79.5/20.7 39.8/10.4'
- unparsed cell tab_2:row12:col8 = '27.1/18.5 181/36.9 90.5/18.5'
- unparsed cell tab_2:row12:col9 = '809 80.0 160'
- unparsed cell tab_2:row12:col10 = '583 222 444'
- unparsed cell tab_2:row12:col11 = '80 81'
- unparsed cell tab_2:row13:col7 = '79.5/20.7'
- unparsed cell tab_2:row13:col8 = '181/36.9'
- unparsed cell tab_2:row14:col7 = '39.8/10.4'
- unparsed cell tab_2:row14:col8 = '90.5/18.5'
- unparsed cell tab_2:row15:col1 = '99.7 57.4'
- unparsed cell tab_2:row15:col2 = '0.223 0.157 0.223 0.157'
- unparsed cell tab_2:row15:col3 = '331 524 574 885'
- unparsed cell tab_2:row15:col4 = '96.6 60.0'
- unparsed cell tab_2:row15:col5 = '1.50 0.750'
- unparsed cell tab_2:row15:col6 = '1.23 0.797 1.23 0.797'
- unparsed cell tab_2:row15:col7 = '79.5/20.7 59.3/20.7 39.8/10.4 29.7/10.4'
- unparsed cell tab_2:row15:col8 = '181/36.9 54.1/36.9 90.5/18.5 27.1/18.5'
- unparsed cell tab_2:row15:col9 = '243 1020 471 1020'
- unparsed cell tab_2:row15:col10 = '941 1890 698 655'
- unparsed cell tab_2:row15:col11 = '84 85 86'
- unparsed cell tab_2:row16:col7 = '79.5/20.7'
- unparsed cell tab_2:row16:col8 = '181/36.9'
- unparsed cell tab_2:row17:col7 = '39.8/10.4'
- unparsed cell tab_2:row17:col8 = '90.5/18.5'
- unparsed cell tab_2:row18:col1 = '99.7 57.4 99.7'
- unparsed cell tab_2:row18:col2 = '0.223 0.223'
- unparsed cell tab_2:row18:col3 = '548 970 227'
- unparsed cell tab_2:row18:col4 = '96.6 60.0 96.6'
- unparsed cell tab_2:row18:col5 = '1.50 0.750 1.50'
- unparsed cell tab_2:row18:col6 = '1.23 1.23 1.23'
- unparsed cell tab_2:row18:col7 = '79.5/20.7 39.8/10.4 79.5/20.7'
- unparsed cell tab_2:row18:col8 = '181/36.9 90.5/18.5 181/36.9'
- unparsed cell tab_2:row18:col9 = '430 867 203'
- unparsed cell tab_2:row18:col10 = '993 1570 352'
- unparsed cell tab_2:row18:col11 = '89 90'
- unparsed cell tab_2:row19:col7 = '39.8/10.4'
- unparsed cell tab_2:row19:col8 = '90.5/18.5'
- unparsed cell tab_2:row20:col7 = '79.5/20.7'
- unparsed cell tab_2:row20:col8 = '181/36.9'
- unparsed cell tab_2:row21:col1 = '57.4 99.7 57.4 99.7'
- unparsed cell tab_2:row21:col2 = '0.223 0.223'
- unparsed cell tab_2:row21:col3 = '395 351 589 671'
- unparsed cell tab_2:row21:col4 = '60.0 96.6 60.0 96.6'
- unparsed cell tab_2:row21:col5 = '0.750 1.50 0.750 1.50'
- unparsed cell tab_2:row21:col6 = '1.23 1.23 1.23 1.23'
- unparsed cell tab_2:row21:col7 = '39.8/10.4 79.5/20.7 39.8/10.4 79.5/20.7'
- unparsed cell tab_2:row21:col8 = '90.5/18.5 181/36.9 90.5/18.5 181/36.9'
- unparsed cell tab_2:row21:col9 = '414 285 570 531'
- unparsed cell tab_2:row21:col10 = '684 710 1410 1050'
- unparsed cell tab_2:row21:col11 = '93 94 95'
- unparsed cell tab_2:row22:col7 = '59.3/20.7'
- unparsed cell tab_2:row22:col8 = '54.1/36.9'
- unparsed cell tab_2:row23:col7 = '39.8/10.4'
- unparsed cell tab_2:row23:col8 = '90.5/18.5'
- unparsed cell tab_2:row24:col1 = '99.7 57.4'
- unparsed cell tab_2:row24:col2 = '0.157 0.223'
- unparsed cell tab_2:row24:col3 = '1370 600 1040'
- unparsed cell tab_2:row24:col4 = '96.6 60.0'
- unparsed cell tab_2:row24:col5 = '1.50 0.750'
- unparsed cell tab_2:row24:col6 = '0.797 1.23 1.23'
- unparsed cell tab_2:row24:col7 = '29.7/10.4 79.5/20.7 39.8/10.4'
- unparsed cell tab_2:row24:col8 = '27.1/18.5 181/36.9 90.5/18.5'
- unparsed cell tab_2:row24:col9 = '1240 537 1090'
- unparsed cell tab_2:row24:col10 = '601 1020 2040'
- unparsed cell tab_2:row24:col11 = '98 99'
- unparsed cell tab_2:row25:col7 = '79.5/20.7'
- unparsed cell tab_2:row25:col8 = '181/36.9'
- unparsed cell tab_2:row26:col7 = '39.8/10.4'
- unparsed cell tab_2:row26:col8 = '90.5/18.5'
- unparsed cell tab_2:row27:col1 = '99.7 57.4 99.7 57.4'
- unparsed cell tab_2:row27:col2 = '0.223 0.223'
- unparsed cell tab_2:row27:col3 = '948 1650 274 476'
- unparsed cell tab_2:row27:col4 = '96.6 60.0 96.6 60.0'
- unparsed cell tab_2:row27:col5 = '1.50 0.750 1.50 0.750'
- unparsed cell tab_2:row27:col6 = '1.23 1.23 1.23 1.23'
- unparsed cell tab_2:row27:col7 = '79.5/20.7 39.8/10.4 79.5/20.7 39.8/10.4'
- unparsed cell tab_2:row27:col8 = '181/36.9 90.5/18.5 181/36.9 90.5/18.5'
- unparsed cell tab_2:row27:col9 = '631 1310 184 372'
- unparsed cell tab_2:row27:col10 = '903 1760 341 671'
- unparsed cell tab_2:row27:col11 = '102 103 104'
- unparsed cell tab_2:row28:col7 = '79.5/20.7'
- unparsed cell tab_2:row28:col8 = '181/36.9'
- unparsed cell tab_2:row29:col7 = '39.8/10.4'
- unparsed cell tab_2:row29:col8 = '90.5/18.5'
- unparsed cell tab_2:row30:col1 = '99.7 57.4 99.7'
- unparsed cell tab_2:row30:col2 = '0.223 0.223'
- unparsed cell tab_2:row30:col3 = '506 880 425'
- unparsed cell tab_2:row30:col4 = '96.6 60.0 96.6'
- unparsed cell tab_2:row30:col5 = '1.50 0.750 1.50'
- unparsed cell tab_2:row30:col6 = '1.23 1.23 1.23'
- unparsed cell tab_2:row30:col7 = '79.5/20.7 39.8/10.4 79.5/20.7'
- unparsed cell tab_2:row30:col8 = '181/36.9 90.5/18.5 181/36.9'
- unparsed cell tab_2:row30:col9 = '455 927 304'
- unparsed cell tab_2:row30:col10 = '794 1570 528'
- unparsed cell tab_2:row30:col11 = '107 108'
- unparsed cell tab_2:row31:col7 = '39.8/10.4'
- unparsed cell tab_2:row31:col8 = '90.5/18.5'
- unparsed cell tab_2:row32:col7 = '79.5/20.7'
- unparsed cell tab_2:row32:col8 = '181/36.9'
- unparsed cell tab_2:row33:col1 = '57.4 99.7 57.4 99.7'
- unparsed cell tab_2:row33:col2 = '0.223 0.223'
- unparsed cell tab_2:row33:col3 = '167 231 401 408'
- unparsed cell tab_2:row33:col4 = '60.0 96.6 60.0 96.6'
- unparsed cell tab_2:row33:col5 = '0.750 1.50 0.750 1.50'
- unparsed cell tab_2:row33:col6 = '1.23 1.23 1.23 1.23'
- unparsed cell tab_2:row33:col7 = '39.8/10.4 79.5/20.7 39.8/10.4 79.5/20.7'
- unparsed cell tab_2:row33:col8 = '90.5/18.5 181/36.9 90.5/18.5 181/36.9'
- unparsed cell tab_2:row33:col9 = '121 146 331 354'
- unparsed cell tab_2:row33:col10 = '596 710 1570 697'
- unparsed cell tab_2:row33:col11 = '111 112 113'
- unparsed cell tab_2:row34:col7 = '39.8/10.4'
- unparsed cell tab_2:row34:col8 = '90.5/18.5'
- unparsed cell tab_2:row35:col7 = '79.5/20.7'
- unparsed cell tab_2:row35:col8 = '181/36.9'
- unparsed cell tab_2:row36:col1 = '57.4 99.7'
- unparsed cell tab_2:row36:col2 = '0.223 0.157'
- unparsed cell tab_2:row36:col3 = '653 122 193'
- unparsed cell tab_2:row36:col4 = '60.0 96.6'
- unparsed cell tab_2:row36:col5 = '0.750 1.50'
- unparsed cell tab_2:row36:col6 = '1.23 1.23 0.797'
- unparsed cell tab_2:row36:col7 = '39.8/10.4 79.5/20.7 59.3/20.7'
- unparsed cell tab_2:row36:col8 = '90.5/18.5 181/36.9 54.1/36.9'
- unparsed cell tab_2:row36:col9 = '580 85.0 385'
- unparsed cell tab_2:row36:col10 = '1790 473 322'
- unparsed cell tab_2:row36:col11 = '116 117'
- unparsed cell tab_2:row37:col7 = '39.8/10.4'
- unparsed cell tab_2:row37:col8 = '90.5/18.5'
- unparsed cell tab_2:row38:col7 = '29.7/10.4'
- unparsed cell tab_2:row38:col8 = '27.1/18.5'
- unparsed cell tab_2:row39:col1 = '99.7 57.4 99.7 57.4'
- unparsed cell tab_2:row39:col2 = '0.223 0.223'
- unparsed cell tab_2:row39:col3 = '600 1040 488 848'
- unparsed cell tab_2:row39:col4 = '96.6 60.0 96.6 60.0'
- unparsed cell tab_2:row39:col5 = '1.50 0.750 1.50 0.750'
- unparsed cell tab_2:row39:col6 = '1.23 1.23 1.23 1.23'
- unparsed cell tab_2:row39:col7 = '79.5/20.7 39.8/10.4 79.5/20.7 39.8/10.4'
- unparsed cell tab_2:row39:col8 = '181/36.9 90.5/18.5 181/36.9 90.5/18.5'
- unparsed cell tab_2:row39:col9 = '374 752 338 651'
- unparsed cell tab_2:row39:col10 = '828 1650 1400 2800'
- unparsed cell tab_2:row39:col11 = '120 121 122'
- unparsed cell tab_2:row40:col7 = '79.5/20.7'
- unparsed cell tab_2:row40:col8 = '181/36.9'
- unparsed cell tab_2:row41:col7 = '39.8/10.4'
- unparsed cell tab_2:row41:col8 = '90.5/18.5'
- unparsed cell tab_2:row42:col1 = '99.7 57.4'
- unparsed cell tab_2:row42:col2 = '0.223 0.157 0.223'
- unparsed cell tab_2:row42:col3 = '953 1180 1660'
- unparsed cell tab_2:row42:col4 = '96.6 60.0'
- unparsed cell tab_2:row42:col5 = '1.50 0.750'
- unparsed cell tab_2:row42:col6 = '1.23 0.797 1.23'
- unparsed cell tab_2:row42:col7 = '79.5/20.7 59.3/20.7 39.8/10.4'
- unparsed cell tab_2:row42:col8 = '181/36.9 54.1/36.9 90.5/18.5'
- unparsed cell tab_2:row42:col9 = '827 1910 793'
- unparsed cell tab_2:row42:col10 = '1630 861 1810'
- unparsed cell tab_2:row42:col11 = '125 126'
- unparsed cell tab_2:row43:col7 = '29.7/10.4'
- unparsed cell tab_2:row43:col8 = '27.1/18.5'
- unparsed cell tab_2:row44:col7 = '79.5/20.7'
- unparsed cell tab_2:row44:col8 = '181/36.9'
- unparsed cell tab_2:row45:col1 = '57.4 99.7'
- unparsed cell tab_2:row45:col3 = '964 378'
- unparsed cell tab_2:row45:col4 = '60.0 96.6'
- unparsed cell tab_2:row45:col5 = '0.750 1.50'
- unparsed cell tab_2:row45:col6 = '1.23 1.23'
- unparsed cell tab_2:row45:col7 = '39.8/10.4 79.5/20.7'
- unparsed cell tab_2:row45:col8 = '90.5/18.5 181/36.9'
- unparsed cell tab_2:row45:col9 = '1010 331'
- unparsed cell tab_2:row45:col10 = '1500 652'
- unparsed cell tab_2:row45:col11 = '129 130'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.391 (9/23 fields) | 14 |

<details><summary>14 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss:120b` | `parameters[11 27]` | not captured | 92 | only_one_extracted |
| `gpt-oss:120b` | `parameters[18]` | not captured | 83 | only_one_extracted |
| `gpt-oss:120b` | `parameters[23]` | not captured | 88 | only_one_extracted |
| `gpt-oss:120b` | `parameters[26]` | not captured | 91 | only_one_extracted |
| `gpt-oss:120b` | `parameters[28 58]` | not captured | 123 | only_one_extracted |
| `gpt-oss:120b` | `parameters[2]` | not captured | 67 | only_one_extracted |
| `gpt-oss:120b` | `parameters[30 63]` | not captured | 128 | only_one_extracted |
| `gpt-oss:120b` | `parameters[31 64 65]` | 0.223 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[31]` | not captured | 96 | only_one_extracted |
| `gpt-oss:120b` | `parameters[32]` | not captured | 97 | only_one_extracted |
| `gpt-oss:120b` | `parameters[3]` | not captured | 68 | only_one_extracted |
| `gpt-oss:120b` | `parameters[44]` | not captured | 109 | only_one_extracted |
| `gpt-oss:120b` | `parameters[8 22]` | not captured | 87 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_atomoxetine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Notsu_2020` / `Notsu_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-07-22 13:20 UTC</sub>
