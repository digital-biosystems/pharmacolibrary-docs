<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;atomoxetine&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/&quot;},{&quot;label&quot;:&quot;Notsu_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atomoxetine — `Atomoxetine_Notsu2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.391). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on how the model is parameterised: this record has mechanistic, the second reading apparent; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Notsu Y et al., Simple pharmacokinetic models accountin…, Drug metabolism and pharmac… (2020)
  ·  DOI: [10.1016/j.dmpk.2019.08.005](https://doi.org/10.1016/j.dmpk.2019.08.005)

## Model component
<dbs-pgx drug="atomoxetine" model-id="Atomoxetine_Notsu2020_reference" status="rejected" stale="false" population="Japanese pediatric patients with ADHD" measured-compound="atomoxetine" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 1 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| 49 | `Q49` · kabs | 57.4 | not captured | not captured | not captured | not captured | llm (0.6) | tab_2:row34:col1, tab_2:row34:col3, tab_2:row34:col4, tab_2:row34:col5, tab_2:row34:col6, tab_2:row34:col9, tab_2:row34:col10, tab_2:row34:col11 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'dmpk281_proof ■ 29 august 2019 ■ 8/10' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
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
- dropped unlinked row (NIL): '36' — extend the ontology if this is a real PK parameter (source ['tab_2:row26:col1', 'tab_2:row26:col3', 'tab_2:row26:col4', 'tab_2:row26:col5', 'tab_2:row26:col6', 'tab_2:row26:col9', 'tab_2:row26:col10', 'tab_2:row26:col11'])
- dropped unlinked row (NIL): '18 40' — extend the ontology if this is a real PK parameter (source ['tab_2:row28:col1', 'tab_2:row28:col2', 'tab_2:row28:col3', 'tab_2:row28:col4', 'tab_2:row28:col5', 'tab_2:row28:col6', 'tab_2:row28:col9', 'tab_2:row28:col10', 'tab_2:row28:col11'])
- dropped unlinked row (NIL): '41' — extend the ontology if this is a real PK parameter (source ['tab_2:row29:col1', 'tab_2:row29:col3', 'tab_2:row29:col4', 'tab_2:row29:col5', 'tab_2:row29:col6', 'tab_2:row29:col9', 'tab_2:row29:col10', 'tab_2:row29:col11'])
- dropped unlinked row (NIL): '44' — extend the ontology if this is a real PK parameter (source ['tab_2:row31:col1', 'tab_2:row31:col3', 'tab_2:row31:col4', 'tab_2:row31:col5', 'tab_2:row31:col6', 'tab_2:row31:col9', 'tab_2:row31:col10', 'tab_2:row31:col11'])
- dropped unlinked row (NIL): '21 45' — extend the ontology if this is a real PK parameter (source ['tab_2:row32:col1', 'tab_2:row32:col2', 'tab_2:row32:col3', 'tab_2:row32:col4', 'tab_2:row32:col5', 'tab_2:row32:col6', 'tab_2:row32:col9', 'tab_2:row32:col10', 'tab_2:row32:col11'])
- dropped unlinked row (NIL): '24 50' — extend the ontology if this is a real PK parameter (source ['tab_2:row35:col1', 'tab_2:row35:col2', 'tab_2:row35:col3', 'tab_2:row35:col4', 'tab_2:row35:col5', 'tab_2:row35:col6', 'tab_2:row35:col9', 'tab_2:row35:col10', 'tab_2:row35:col11'])
- dropped unlinked row (NIL): '53' — extend the ontology if this is a real PK parameter (source ['tab_2:row37:col1', 'tab_2:row37:col2', 'tab_2:row37:col3', 'tab_2:row37:col4', 'tab_2:row37:col5', 'tab_2:row37:col6', 'tab_2:row37:col9', 'tab_2:row37:col10', 'tab_2:row37:col11'])
- dropped unlinked row (NIL): '54' — extend the ontology if this is a real PK parameter (source ['tab_2:row38:col2', 'tab_2:row38:col3', 'tab_2:row38:col6', 'tab_2:row38:col9', 'tab_2:row38:col10', 'tab_2:row38:col11'])
- dropped unlinked row (NIL): '28 58' — extend the ontology if this is a real PK parameter (source ['tab_2:row40:col1', 'tab_2:row40:col2', 'tab_2:row40:col3', 'tab_2:row40:col4', 'tab_2:row40:col5', 'tab_2:row40:col6', 'tab_2:row40:col9', 'tab_2:row40:col10', 'tab_2:row40:col11'])
- dropped unlinked row (NIL): '59' — extend the ontology if this is a real PK parameter (source ['tab_2:row41:col1', 'tab_2:row41:col3', 'tab_2:row41:col4', 'tab_2:row41:col5', 'tab_2:row41:col6', 'tab_2:row41:col9', 'tab_2:row41:col10', 'tab_2:row41:col11'])
- dropped unlinked row (NIL): '62' — extend the ontology if this is a real PK parameter (source ['tab_2:row43:col2', 'tab_2:row43:col3', 'tab_2:row43:col6', 'tab_2:row43:col9', 'tab_2:row43:col10', 'tab_2:row43:col11'])
- dropped unlinked row (NIL): '30 63' — extend the ontology if this is a real PK parameter (source ['tab_2:row44:col1', 'tab_2:row44:col2', 'tab_2:row44:col3', 'tab_2:row44:col4', 'tab_2:row44:col5', 'tab_2:row44:col6', 'tab_2:row44:col9', 'tab_2:row44:col10', 'tab_2:row44:col11'])
- dropped unlinked row (NIL): '31 64 65' — extend the ontology if this is a real PK parameter (source ['tab_2:row45:col2'])
- table mostly unlinked (32/33 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=atomoxetine
- template fit: PK_3M_3C — hepatic compartment; parent 0 + hepatic, metabolites [0] (site hepatic: 'F a F g k a Dose (p.o. administration) Central compartment V 1 primary metabolite , C b Q h Central compartment V 1_subs')
- status held at route_to_review — not promoted

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
- unparsed cell tab_2:row10:col7 = '59.3/20.7'
- unparsed cell tab_2:row10:col8 = '54.1/36.9'
- unparsed cell tab_2:row11:col7 = '39.8/10.4'
- unparsed cell tab_2:row11:col8 = '90.5/18.5'
- unparsed cell tab_2:row13:col7 = '79.5/20.7'
- unparsed cell tab_2:row13:col8 = '181/36.9'
- unparsed cell tab_2:row14:col7 = '39.8/10.4'
- unparsed cell tab_2:row14:col8 = '90.5/18.5'
- unparsed cell tab_2:row16:col7 = '79.5/20.7'
- unparsed cell tab_2:row16:col8 = '181/36.9'
- unparsed cell tab_2:row17:col7 = '39.8/10.4'
- unparsed cell tab_2:row17:col8 = '90.5/18.5'
- unparsed cell tab_2:row19:col7 = '39.8/10.4'
- unparsed cell tab_2:row19:col8 = '90.5/18.5'
- unparsed cell tab_2:row20:col7 = '79.5/20.7'
- unparsed cell tab_2:row20:col8 = '181/36.9'
- unparsed cell tab_2:row22:col7 = '59.3/20.7'
- unparsed cell tab_2:row22:col8 = '54.1/36.9'
- unparsed cell tab_2:row23:col7 = '39.8/10.4'
- unparsed cell tab_2:row23:col8 = '90.5/18.5'
- unparsed cell tab_2:row25:col7 = '79.5/20.7'
- unparsed cell tab_2:row25:col8 = '181/36.9'
- unparsed cell tab_2:row26:col7 = '39.8/10.4'
- unparsed cell tab_2:row26:col8 = '90.5/18.5'
- unparsed cell tab_2:row28:col7 = '79.5/20.7'
- unparsed cell tab_2:row28:col8 = '181/36.9'
- unparsed cell tab_2:row29:col7 = '39.8/10.4'
- unparsed cell tab_2:row29:col8 = '90.5/18.5'
- unparsed cell tab_2:row31:col7 = '39.8/10.4'
- unparsed cell tab_2:row31:col8 = '90.5/18.5'
- unparsed cell tab_2:row32:col7 = '79.5/20.7'
- unparsed cell tab_2:row32:col8 = '181/36.9'
- unparsed cell tab_2:row34:col7 = '39.8/10.4'
- unparsed cell tab_2:row34:col8 = '90.5/18.5'
- unparsed cell tab_2:row35:col7 = '79.5/20.7'
- unparsed cell tab_2:row35:col8 = '181/36.9'
- unparsed cell tab_2:row37:col7 = '39.8/10.4'
- unparsed cell tab_2:row37:col8 = '90.5/18.5'
- unparsed cell tab_2:row38:col7 = '29.7/10.4'
- unparsed cell tab_2:row38:col8 = '27.1/18.5'
- unparsed cell tab_2:row40:col7 = '79.5/20.7'
- unparsed cell tab_2:row40:col8 = '181/36.9'
- unparsed cell tab_2:row41:col7 = '39.8/10.4'
- unparsed cell tab_2:row41:col8 = '90.5/18.5'
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
- LLM selected parameter table(s) 3

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
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_unit_missing_Q49 | fail | 1 / [time] | not captured | not captured | not captured | ['tab_2:row34:col1', 'tab_2:row34:col3', 'tab_2:row34:col4', 'tab_2:row34:col5', 'tab_2:row34:col6', 'tab_2:row34:col9', 'tab_2:row34:col10', 'tab_2:row34:col11'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-26 20:29 UTC</sub>
