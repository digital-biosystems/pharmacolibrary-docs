<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;avalglucosidase alfa&quot;,&quot;href&quot;:&quot;drugs/drug_avalglucosidase_alfa/&quot;},{&quot;label&quot;:&quot;Tiraboschi_2023 \u00b7 estimate_cv&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# avalglucosidase alfa — `AvalglucosidaseAlfa_Tiraboschi2023_estimate_cv`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.632). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The avalglucosidase alfa record was rejected because a structural parameter failed a dimensional consistency check, and Km's reported unit µg/mL could not be converted to SI, so Km reached the model builder without an SI value.**

The two-compartment model for avalglucosidase alfa carries CL 0.808 L/h, V1 3.37 L, V2 296 L, V3 1.31 L, Q2 0.254 L/h, Q3 1.87 L/h, Vmax 12 mg/h and Km 0.541 µg/mL, but one structural parameter shows a dimension mismatch. Km's reported unit µg/mL could not be converted to SI units, so the parameter arrived without an SI value. A second reader also disagreed on the weight covariate effects: the record assigns 0.463 and 0.896 to the central-volume and clearance effects, while the second reader read 0.896 and 0.463 as effects on the intercompartmental clearances and returned null for the recorded effects; the covariate forms on clearance (linear_fractional) were also disputed. Extracted — avalglucosidase alfa: CL 0.808 L/h, V1 3.37 L, Vmax 12 mg/h, Km 0.541 µg/mL, Q 0.254 L/h, V2 296 L, Q3 1.87 L/h, V3 1.31 L.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has avalglucosidase_alfa, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Tiraboschi G et al., Population pharmacokinetic modeling and…, Journal of pharmacokinetics… (2023)
  ·  DOI: [10.1007/s10928-023-09874-8](https://doi.org/10.1007/s10928-023-09874-8)

## Model component
<dbs-pgx drug="avalglucosidase alfa" model-id="AvalglucosidaseAlfa_Tiraboschi2023_estimate_cv" status="rejected" stale="false" population="pediatric and adult patients with Pompe disease" measured-compound="avalglucosidase_alfa" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 8 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 0.808 | L/h | 2.2444444444444445e-07 | [l] / [h] | not captured | exact (1.0) | Tab3:row1:col1 | — | not captured |
| V1 (L) | `Q63` · V1 | 3.37 | L | 0.00337 | [l] | not captured | exact (1.0) | Tab3:row2:col1 | — | not captured |
| Vmax (mg/h) | `Q66` · Vmax | 12 | mg/h | not captured | [mg] / [h] | not captured | special_case (0.95) | Tab3:row3:col1 | — | not captured |
| Km (µg/mL) | `Q1` · Km | 0.541 | µg/mL | not captured | [µg] / [ml] | not captured | exact (1.0) | Tab3:row4:col1 | — | not captured |
| Q2 (L/h) | `Q30` · Q | 0.254 | L/h | 7.055555555555556e-08 | [l] / [h] | not captured | special_case (0.95) | Tab3:row5:col1 | — | not captured |
| V2 (L) | `Q64` · V2 | 296 | L | 0.296 | [l] | not captured | exact (1.0) | Tab3:row6:col1 | — | not captured |
| Q3 (L/h) | `Q308` · Q3 | 1.87 | L/h | 5.194444444444445e-07 | [l] / [h] | not captured | exact (1.0) | Tab3:row7:col1 | — | not captured |
| V3 (L) | `Q77` · V3 | 1.31 | L | 0.0013100000000000002 | [l] | not captured | exact (1.0) | Tab3:row8:col1 | — | not captured |
| effect_of_wt_on_vmc | `Q900` · effect_of_wt_on_vmc | 0.463 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row12:col1 | — | not captured |
| theta_cl_wt | `Q900` · theta_cl_wt | 0.896 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row10:col1 | — | not captured |
| theta_v1_wt | `Q900` · theta_v1_wt | 0.661 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row11:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'estimate (cv %)' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- unit_dimension_mismatch: 'Vmax (mg/h)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q30 ('Qpc (L/h)', value '0.0157') — already have one for this compound
- covariate level 'Effect of WT on Vmc' → Q900:effect_of_wt_on_vmc = 0.463 (linear_fractional on Q22)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=avalglucosidase_alfa
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- population split: 'estimate (cv %)' subgroup of Tiraboschi_2023 (paper reports 3 populations: 20 mg/kg, 40 mg/kg, estimate (cv %))

**Extraction notes:**
- unparsed cell Tab3:row1:col2 = '3.33%'
- unparsed cell Tab3:row1:col3 = '[0.755;0.862]'
- unparsed cell Tab3:row1:col5 = '[0.674;0.874]'
- unparsed cell Tab3:row2:col2 = '2.21%'
- unparsed cell Tab3:row2:col3 = '[3.22;3.52]'
- unparsed cell Tab3:row2:col5 = '[3;3.57]'
- unparsed cell Tab3:row3:col2 = '4.59%'
- unparsed cell Tab3:row3:col3 = '[10.9;13.1]'
- unparsed cell Tab3:row3:col5 = '[9.28;15.1]'
- unparsed cell Tab3:row4:col2 = '4.45%'
- unparsed cell Tab3:row4:col3 = '[0.493;0.589]'
- unparsed cell Tab3:row4:col5 = '[0.395;0.728]'
- unparsed cell Tab3:row9:col2 = '11.60%'
- unparsed cell Tab3:row9:col3 = '[0.0121;0.0194]'
- unparsed cell Tab3:row9:col5 = '[0.00826;0.0227]'
- unparsed cell Tab3:row10:col2 = '7.91%'
- unparsed cell Tab3:row10:col3 = '[0.754;1.04]'
- unparsed cell Tab3:row10:col5 = '[0.618;1.1]'
- unparsed cell Tab3:row11:col2 = '6.29%'
- unparsed cell Tab3:row11:col3 = '[0.578;0.744]'
- unparsed cell Tab3:row11:col5 = '[0.484;0.78]'
- unparsed cell Tab3:row12:col2 = '12%'
- unparsed cell Tab3:row12:col3 = '[0.352;0.574]'
- unparsed cell Tab3:row12:col5 = '[0.166;0.652]'
- unparsed cell Tab3:row14:col1 = '0.0907 (30.8%)'
- unparsed cell Tab3:row14:col2 = '18.50%'
- unparsed cell Tab3:row14:col3 = '[0.0578;0.124] (7.56%)'
- unparsed cell Tab3:row14:col5 = '[0.0573;0.136]'
- unparsed cell Tab3:row15:col1 = '0.0184 (13.6%)'
- unparsed cell Tab3:row15:col2 = '35.20%'
- unparsed cell Tab3:row15:col3 = '[0.00569;0.031] (28.3%)'
- unparsed cell Tab3:row15:col5 = '[0.00476;0.0388]'
- unparsed cell Tab3:row16:col1 = '0.118 (35.4%)'
- unparsed cell Tab3:row16:col2 = '25.40%'
- unparsed cell Tab3:row16:col3 = '[0.0593;0.177] (30.4%)'
- unparsed cell Tab3:row16:col5 = '[0.0201;0.236]'
- unparsed cell Tab3:row17:col1 = '0.243 (52.4%)'
- unparsed cell Tab3:row17:col2 = '27.90%'
- unparsed cell Tab3:row17:col3 = '[0.11;0.376] (29.6%)'
- unparsed cell Tab3:row17:col5 = '[0.0702;0.417]'
- unparsed cell Tab3:row18:col1 = '1.23 (156%)'
- unparsed cell Tab3:row18:col2 = '26.20%'
- unparsed cell Tab3:row18:col3 = '[0.599;1.86] (30.6%)'
- unparsed cell Tab3:row18:col5 = '[0.492;3.48]'
- unparsed cell Tab3:row20:col1 = '0.12 (34.6%)'
- unparsed cell Tab3:row20:col2 = '2.43%'
- unparsed cell Tab3:row20:col3 = '[0.114;0.125]'
- unparsed cell Tab3:row20:col5 = '[0.0967;0.136]'
- unparsed cell Tiraboschi_2023_table_4:row3:col3 = '[157; 139–256]'
- unparsed cell Tiraboschi_2023_table_4:row3:col4 = '[591; 463–1089]'
- unparsed cell Tiraboschi_2023_table_4:row3:col6 = '[275; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row3:col7 = '[1872; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row4:col3 = '[266; 160–378]'
- unparsed cell Tiraboschi_2023_table_4:row4:col4 = '[1164; 737–2149]'
- unparsed cell Tiraboschi_2023_table_4:row6:col6 = '[216; 195–250]'
- unparsed cell Tiraboschi_2023_table_4:row6:col7 = '[1419; 1247–1584]'
- unparsed cell Tiraboschi_2023_table_4:row7:col2 = '[157; 151–256]'
- unparsed cell Tiraboschi_2023_table_4:row7:col3 = '[157; 151–256]'
- unparsed cell Tiraboschi_2023_table_4:row7:col4 = '[591; 576–1089]'
- unparsed cell Tiraboschi_2023_table_4:row7:col6 = '[320; 232–382]'
- unparsed cell Tiraboschi_2023_table_4:row7:col7 = '[2181; 1536–2620]'
- unparsed cell Tiraboschi_2023_table_4:row9:col2 = '[268; 189–378]'
- unparsed cell Tiraboschi_2023_table_4:row9:col3 = '[268; 189–378]'
- unparsed cell Tiraboschi_2023_table_4:row9:col4 = '[1141; 737–2149]'
- unparsed cell Tiraboschi_2023_table_4:row10:col2 = '[265; 160–368]'
- unparsed cell Tiraboschi_2023_table_4:row10:col3 = '[265; 160–368]'
- unparsed cell Tiraboschi_2023_table_4:row10:col4 = '[1264; 824–2086]'
- unparsed cell Tiraboschi_2023_table_4:row12:col2 = '[209; 139–256]'
- unparsed cell Tiraboschi_2023_table_4:row12:col3 = '[209; 139–256]'
- unparsed cell Tiraboschi_2023_table_4:row12:col4 = '[833; 463–1089]'
- unparsed cell Tiraboschi_2023_table_4:row12:col6 = '[250; 195–381]'
- unparsed cell Tiraboschi_2023_table_4:row12:col7 = '[1584; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row13:col2 = '[263; 160–368]'
- unparsed cell Tiraboschi_2023_table_4:row13:col3 = '[263; 160–368]'
- unparsed cell Tiraboschi_2023_table_4:row13:col4 = '[1164; 749–2086]'
- unparsed cell Tiraboschi_2023_table_4:row14:col2 = '[307; 273–378]'
- unparsed cell Tiraboschi_2023_table_4:row14:col3 = '[307; 273–378]'
- unparsed cell Tiraboschi_2023_table_4:row14:col4 = '[1333; 997–2149]'
- unparsed cell Tiraboschi_2023_table_4:row16:col2 = '[254; 139–366]'
- unparsed cell Tiraboschi_2023_table_4:row16:col3 = '[254; 139–366]'
- unparsed cell Tiraboschi_2023_table_4:row16:col4 = '[1053; 463–2149]'
- unparsed cell Tiraboschi_2023_table_4:row16:col6 = '[232; 195–328]'
- unparsed cell Tiraboschi_2023_table_4:row16:col7 = '[1536; 1247–2277]'
- unparsed cell Tiraboschi_2023_table_4:row17:col2 = '[271; 151–378]'
- unparsed cell Tiraboschi_2023_table_4:row17:col3 = '[271; 151–378]'
- unparsed cell Tiraboschi_2023_table_4:row17:col4 = '[1188; 576–2086]'
- unparsed cell Tiraboschi_2023_table_4:row17:col6 = '[275; 216–382]'
- unparsed cell Tiraboschi_2023_table_4:row17:col7 = '[1872; 1419–2620]'
- unparsed cell Tiraboschi_2023_table_4:row19:col2 = '[231; 151–279]'
- unparsed cell Tiraboschi_2023_table_4:row19:col3 = '[231; 151–279]'
- unparsed cell Tiraboschi_2023_table_4:row19:col4 = '[933; 591–1175]'
- unparsed cell Tiraboschi_2023_table_4:row19:col6 = '[275; 232–381]'
- unparsed cell Tiraboschi_2023_table_4:row19:col7 = '[1872; 1536–2620]'
- unparsed cell Tiraboschi_2023_table_4:row20:col2 = '[255; 255–278]'
- unparsed cell Tiraboschi_2023_table_4:row20:col3 = '[255; 255–278]'
- unparsed cell Tiraboschi_2023_table_4:row20:col4 = '[1204; 1204–1264]'
- unparsed cell Tiraboschi_2023_table_4:row21:col2 = '[265; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row21:col3 = '[265; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row21:col4 = '[1141; 463–2149]'
- unparsed cell Tiraboschi_2023_table_4:row21:col6 = '[216; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row21:col7 = '[1419; 1247–2449]'
- unparsed cell Tiraboschi_2023_table_4:row23:col2 = '[266; 189–368]'
- unparsed cell Tiraboschi_2023_table_4:row23:col3 = '[266; 189–368]'
- unparsed cell Tiraboschi_2023_table_4:row23:col4 = '[1179; 737–2149]'
- unparsed cell Tiraboschi_2023_table_4:row24:col2 = '[238; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row24:col3 = '[238; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row24:col4 = '[1072; 463–1764]'
- unparsed cell Tiraboschi_2023_table_4:row24:col6 = '[275; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row24:col7 = '[1872; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row26:col2 = '[265; 265–265]'
- unparsed cell Tiraboschi_2023_table_4:row26:col3 = '[265; 265–265]'
- unparsed cell Tiraboschi_2023_table_4:row27:col2 = '[301; 160–368]'
- unparsed cell Tiraboschi_2023_table_4:row27:col3 = '[301; 160–368]'
- unparsed cell Tiraboschi_2023_table_4:row27:col4 = '[1459; 824–2086]'
- unparsed cell Tiraboschi_2023_table_4:row28:col2 = '[259; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row28:col3 = '[259; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row28:col4 = '[1140; 463–2149]'
- unparsed cell Tiraboschi_2023_table_4:row28:col6 = '[275; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row28:col7 = '[1872; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row30:col2 = '[238; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row30:col3 = '[238; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row30:col4 = '[1038; 463–2086]'
- unparsed cell Tiraboschi_2023_table_4:row30:col6 = '[250; 232–275]'
- unparsed cell Tiraboschi_2023_table_4:row30:col7 = '[1584; 1536–1872]'
- unparsed cell Tiraboschi_2023_table_4:row31:col2 = '[273; 189–366]'
- unparsed cell Tiraboschi_2023_table_4:row31:col3 = '[273; 189–366]'
- unparsed cell Tiraboschi_2023_table_4:row31:col4 = '[1179; 737–2149]'
- unparsed cell Tiraboschi_2023_table_4:row31:col6 = '[320; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row31:col7 = '[2181; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row33:col2 = '[255; 189–378]'
- unparsed cell Tiraboschi_2023_table_4:row33:col3 = '[255; 189–378]'
- unparsed cell Tiraboschi_2023_table_4:row33:col4 = '[1118; 737–1764]'
- unparsed cell Tiraboschi_2023_table_4:row34:col2 = '[265; 139–368]'
- unparsed cell Tiraboschi_2023_table_4:row34:col3 = '[265; 139–368]'
- unparsed cell Tiraboschi_2023_table_4:row34:col4 = '[1189; 463–2149]'
- unparsed cell Tiraboschi_2023_table_4:row34:col6 = '[275; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row34:col7 = '[1872; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row36:col2 = '[268; 160–378]'
- unparsed cell Tiraboschi_2023_table_4:row36:col3 = '[268; 160–378]'
- unparsed cell Tiraboschi_2023_table_4:row36:col4 = '[1160; 737–2149]'
- unparsed cell Tiraboschi_2023_table_4:row37:col2 = '[256; 139–355]'
- unparsed cell Tiraboschi_2023_table_4:row37:col3 = '[256; 139–355]'
- unparsed cell Tiraboschi_2023_table_4:row37:col4 = '[1089; 463–1846]'
- unparsed cell Tiraboschi_2023_table_4:row37:col6 = '[275; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row37:col7 = '[1872; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row39:col2 = '[268; 160–378]'
- unparsed cell Tiraboschi_2023_table_4:row39:col3 = '[268; 160–378]'
- unparsed cell Tiraboschi_2023_table_4:row39:col4 = '[1164; 737–2149]'
- unparsed cell Tiraboschi_2023_table_4:row40:col2 = '[255; 139–355]'
- unparsed cell Tiraboschi_2023_table_4:row40:col3 = '[255; 139–355]'
- unparsed cell Tiraboschi_2023_table_4:row40:col4 = '[1053; 463–1846]'
- unparsed cell Tiraboschi_2023_table_4:row40:col6 = '[275; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row40:col7 = '[1872; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row42:col2 = '[252; 139–366]'
- unparsed cell Tiraboschi_2023_table_4:row42:col3 = '[252; 139–366]'
- unparsed cell Tiraboschi_2023_table_4:row42:col4 = '[1053; 463–2149]'
- unparsed cell Tiraboschi_2023_table_4:row42:col6 = '[250; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row42:col7 = '[1584; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row43:col2 = '[273; 160–378]'
- unparsed cell Tiraboschi_2023_table_4:row43:col3 = '[273; 160–378]'
- unparsed cell Tiraboschi_2023_table_4:row43:col4 = '[1189; 737–2086]'
- unparsed cell Tiraboschi_2023_table_4:row43:col6 = '[314; 275–320]'
- unparsed cell Tiraboschi_2023_table_4:row43:col7 = '[2116; 1872–2181]'
- unparsed cell Tiraboschi_2023_table_4:row45:col2 = '[271; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row45:col3 = '[271; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row45:col4 = '[1188; 463–2149]'
- unparsed cell Tiraboschi_2023_table_4:row46:col2 = '[256; 151–355]'
- unparsed cell Tiraboschi_2023_table_4:row46:col3 = '[256; 151–355]'
- unparsed cell Tiraboschi_2023_table_4:row46:col4 = '[1053; 591–1566]'
- unparsed cell Tiraboschi_2023_table_4:row46:col6 = '[275; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row46:col7 = '[1872; 1247–2620]'
- companion parameter table 4 transcribed (86 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.632 (12/19 fields) | 7 |

<details><summary>7 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `gpt-oss:120b` | `parameters[effect_of_wt_on_vmc]` | 0.463 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_wt]` | 0.896 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q27_wt]` | not captured | 0.896 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q61_wt]` | not captured | 0.463 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | avalglucosidase_alfa | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | avalglucosidase_alfa | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab3:row4:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row5:col1'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row7:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row6:col1'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/h | not captured | not captured | ['Tab3:row3:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row8:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.808 | not captured | not captured | ['Tab3:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.808 L/h | not captured | not captured | ['Tab3:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.37 L | not captured | not captured | ['Tab3:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 296 L | not captured | not captured | ['Tab3:row6:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_avalglucosidase_alfa/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tiraboschi_2023` / `Tiraboschi_2023::estimate_cv`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-27 01:20 UTC</sub>
