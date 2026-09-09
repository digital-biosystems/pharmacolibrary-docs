# atomoxetine — `Atomoxetine_Notsu2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Notsu Y; Shimizu M; Sasaki T; Nakano A; Ota M; Yoshida S; et al. et al. (2020). Drug metabolism and pharmacokinetics 35
  ·  DOI: [10.1016/j.dmpk.2019.08.005](https://doi.org/10.1016/j.dmpk.2019.08.005)

## Model component
<dbs-pgx drug="atomoxetine" model-id="Atomoxetine_Notsu2020_reference" status="rejected" stale="false" population="Japanese pediatric patients with ADHD" measured-compound="atomoxetine" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| 36 | `Q36` · Cmin | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_2:row26:col1, tab_2:row26:col3, tab_2:row26:col4, tab_2:row26:col5, tab_2:row26:col6, tab_2:row26:col9, tab_2:row26:col10, tab_2:row26:col11 | — | not captured |
| 41 | `Q41` · FG | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_2:row29:col1, tab_2:row29:col3, tab_2:row29:col4, tab_2:row29:col5, tab_2:row29:col6, tab_2:row29:col9, tab_2:row29:col10, tab_2:row29:col11 | — | not captured |
| 49 | `Q49` · kabs | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_2:row34:col1, tab_2:row34:col3, tab_2:row34:col4, tab_2:row34:col5, tab_2:row34:col6, tab_2:row34:col9, tab_2:row34:col10, tab_2:row34:col11 | — | not captured |
| 53 | `Q53` · MRT | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_2:row37:col1, tab_2:row37:col2, tab_2:row37:col3, tab_2:row37:col4, tab_2:row37:col5, tab_2:row37:col6, tab_2:row37:col9, tab_2:row37:col10, tab_2:row37:col11 | — | not captured |
| 54 | `Q54` · Qb | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_2:row38:col2, tab_2:row38:col3, tab_2:row38:col6, tab_2:row38:col9, tab_2:row38:col10, tab_2:row38:col11 | — | not captured |
| 59 | `Q59` · t1/2α | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_2:row41:col1, tab_2:row41:col3, tab_2:row41:col4, tab_2:row41:col5, tab_2:row41:col6, tab_2:row41:col9, tab_2:row41:col10, tab_2:row41:col11 | — | not captured |
| 31 64 65 | `Q64` · V2 | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_2:row45:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
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

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_atomoxetine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Notsu_2020` / `Notsu_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
