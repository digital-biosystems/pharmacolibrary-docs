<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;trandolapril&quot;,&quot;href&quot;:&quot;drugs/drug_trandolapril/&quot;},{&quot;label&quot;:&quot;Li_2016 \u00b7 trandolaprilat&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trandolapril — `Trandolapril_Li2016_trandolaprilat`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The trandolapril record was rejected because its metabolite trandolaprilat is unlinked — formed from trandolapril in the central compartment with no compartment of its own — and one parameter's reported unit could not be converted to SI units.**

The metabolite trandolaprilat is formed from trandolapril by hydrolysis in the central compartment but is assigned no compartment of its own, leaving it without a path from the dose in the model structure, which triggered the unreachable/orphan compartment or unlinked metabolite finding. In addition, a reported unit in the record could not be converted to SI units, so that parameter was carried without an SI value; the facts do not identify which parameter or unit this was. The remaining reported values (Cmax 2.53 ng/mL, tmax 0.567 h, AUC 3.36 ng·h/mL, t1/2z 7.31 h, V/F 6401 L, CL/F 661 L/h) are internally consistent with the non-compartmental summary of trandolapril in healthy Chinese subjects. Extracted — trandolapril: Cmax 2.53 ng/mL, Cmin 0 ng/mL, Cavg 0 ng/mL, tmax 0.567 h, AUCt 3.11 ng·h/mL, AUC 3.36 ng·h/mL, t1/2z 7.31 h, V/F 6.4e+03 L, … (+5).

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Li X et al., Pharmacokinetics, Pharmacodynamics, and…, European journal of drug me… (2016)
  ·  DOI: [10.1007/s13318-015-0277-2](https://doi.org/10.1007/s13318-015-0277-2)

## Model component
<dbs-pgx drug="trandolapril" model-id="Trandolapril_Li2016_trandolaprilat" status="rejected" stale="false" population="healthy Chinese subjects" measured-compound="trandolapril" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 13 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| C max | `Q32` · Cmax | 2.53 | ng/mL | not captured | ng/mL | not captured | space_fold (0.95) | tab_3:row2:col2, tab_3:row2:col4, tab_3:row2:col5, Li_2016_table_3:row1:col2, Li_2016_table_3:row1:col3, Li_2016_table_3:row1:col5, Li_2016_table_3:row1:col6, Li_2016_table_3:row1:col7 | — | not captured |
| C ssmin | `Q36` · Cmin | 0.00 | ng/mL | not captured | ng/mL | not captured | llm (0.6) | tab_3:row3:col2, tab_3:row3:col5 | — | not captured |
| C ssav | `Q71` · Cavg | 0.00 | ng/mL | not captured | ng/mL | not captured | llm (0.6) | tab_3:row4:col2, tab_3:row4:col5, tab_3:footnote | — | not captured |
| T max | `Q56` · tmax | 0.567 | h | 2041.1999999999998 | h | not captured | space_fold (0.95) | tab_3:row5:col2, tab_3:row5:col3, tab_3:row5:col4, tab_3:row5:col5, Li_2016_table_3:row2:col2, Li_2016_table_3:row2:col3 | — | not captured |
| AUC 0-t | `Q19` · AUCt | 3.11 | ng·h/mL | not captured | ng·h/mL | not captured | space_fold (0.95) | tab_3:row6:col2, tab_3:row6:col3, tab_3:row6:col4, tab_3:row6:col5, Li_2016_table_3:row3:col2, Li_2016_table_3:row3:col3, Li_2016_table_3:row3:col5, Li_2016_table_3:row3:col6, Li_2016_table_3:row3:col7 | — | not captured |
| AUC 0-? | `Q88` · AUC | 3.36 | ng·h/mL | not captured | ng·h/mL | not captured | llm_confirmed (0.6) | tab_3:row7:col2, tab_3:row7:col3, tab_3:row7:col4, tab_3:row7:col5, Li_2016_table_3:row4:col2, Li_2016_table_3:row4:col3, Li_2016_table_3:row4:col5, Li_2016_table_3:row4:col6, Li_2016_table_3:row4:col7 | — | not captured |
| t 1/2 | `Q57` · t1/2z | 7.31 | h | 26316.0 | h | not captured | space_fold (0.95) | tab_3:row8:col2, tab_3:row8:col4, tab_3:row8:col5, tab_3:row8:col6, Li_2016_table_3:row5:col2, Li_2016_table_3:row5:col3, Li_2016_table_3:row5:col4, Li_2016_table_3:row5:col5, Li_2016_table_3:row5:col6, Li_2016_table_3:row5:col7, Li_2016_table_3:row5:col8 | — | not captured |
| Vz/F | `Q76` · V/F | 6401 | L | 6.401 | L | not captured | exact (1.0) | tab_3:row9:col2, tab_3:row9:col4, tab_3:row9:col5, Li_2016_table_3:row6:col2, Li_2016_table_3:row6:col3, Li_2016_table_3:row6:col4, Li_2016_table_3:row6:col5, Li_2016_table_3:row6:col6, Li_2016_table_3:row6:col7 | — | not captured |
| CLz/F | `Q27` · CL/F | 661 | L/h | 0.00018361111111111112 | L/h | not captured | llm (0.6) | tab_3:row10:col2, tab_3:row10:col3, tab_3:row10:col4, tab_3:row10:col5, Li_2016_table_3:row7:col2, Li_2016_table_3:row7:col3, Li_2016_table_3:row7:col4, Li_2016_table_3:row7:col5, Li_2016_table_3:row7:col6, Li_2016_table_3:row7:col7 | — | not captured |
| MRT 0-t | `Q53` · MRT | 2.31 | h | 8316.0 | h | not captured | space_fold (0.95) | tab_3:row11:col2, tab_3:row11:col3, tab_3:row11:col4, tab_3:row11:col5, tab_3:row11:col6, Li_2016_table_3:row8:col2, Li_2016_table_3:row8:col4, Li_2016_table_3:row8:col5, Li_2016_table_3:row8:col6 | — | not captured |
| AUC 0-t /AUC 0-? | `Q84` · AUC%ext | 92.8 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | tab_3:row13:col2, tab_3:row13:col4, tab_3:row13:col5, tab_3:row13:col6, Li_2016_table_3:row10:col2, Li_2016_table_3:row10:col3, Li_2016_table_3:row10:col4, Li_2016_table_3:row10:col5, Li_2016_table_3:row10:col6, Li_2016_table_3:row10:col7 | — | not captured |
| DF | `Q40` · Fab | 0.00 | not captured | not captured | not captured | not captured | llm (0.6) | tab_3:row14:col2, tab_3:row14:col5, tab_3:footnote | — | not captured |
| R | `Q21` · AUC ratio | 0.663 | not captured | not captured | not captured | not captured | llm (0.6) | tab_3:row15:col2, tab_3:row15:col5, tab_3:footnote | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q53 ('MRT 0-?', value '4.32') — already have one for this compound
- dropped value-less row: 'ssmin'
- dropped value-less row: '* P \\ 0.05 was considered statistically significant'
- implicit units: 'C max' → ng/mL (from the paper text: "Abstract: 'peak plasma levels (Cmax, 1.57, 3.77, and 7.99 ng/mL)' — the paper states plasma concentration units as ng/mL")
- implicit units: 'C ssmin' → ng/mL (from the paper text: "Text: 'the mean (SD) of trough plasma concentrations (n = 10) of trandolaprilat on days 3, 4, 5, and 6, before dosing we")
- implicit units: 'C ssav' → ng/mL (from the paper text: "Cssav is an average steady-state plasma concentration (Table 4 footnote: 'C ssav average steady-state plasma concentrati")
- implicit units: 'T max' → h (from the popPK convention: 'Tmax is a time parameter; the paper reports no unit for it in the table or text. Time parameters in PK are conventionall')
- implicit units: 'AUC 0-t' → ng·h/mL (from the popPK convention: "The paper's abstract writes AUCs as 'ng/mL', which is dimensionally inconsistent for an area under the concentration-tim")
- implicit units: 'AUC 0-?' → ng·h/mL (from the popPK convention: "Same as AUC0-t: the paper's 'ng/mL' for AUC is dimensionally incorrect (typo); AUC0-inf is conventionally ng·h/mL, consi")
- implicit units: 't 1/2' → h (from the popPK convention: 't1/2 is a half-life (time); the paper gives no unit. Half-lives are conventionally in hours, consistent with t1/2 = 0.69')
- implicit units: 'Vz/F' → L (from the popPK convention: 'Vz/F is an apparent volume of distribution; no unit is stated. Volumes of distribution are conventionally in L; 6401 L w')
- implicit units: 'CLz/F' → L/h (from the popPK convention: 'CLz/F is apparent oral clearance; no unit is stated. Clearances are conventionally in L/h; 661 L/h with Vz/F = 6401 L yi')
- implicit units: 'MRT 0-t' → h (from the popPK convention: 'MRT (mean residence time) is a time parameter; the paper states no unit. Mean residence times are conventionally in hour')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=trandolapril
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- population split: 'trandolaprilat' subgroup of Li_2016 (paper reports 2 populations: trandolapril, trandolaprilat)
- row roles (LLM): model_class=noncompartmental; 16/16 row label(s) assigned, 0 linked by role; re-tagged trandolapril→parent ×41

**Extraction notes:**
- unparsed cell tab_3:row2:col3 = '0.002*'
- unparsed cell tab_3:row2:col6 = '0.001*'
- unparsed cell tab_3:row5:col6 = '0.016*'
- unparsed cell tab_3:row6:col6 = '0.000*'
- unparsed cell tab_3:row7:col6 = '0.003*'
- unparsed cell tab_3:row8:col3 = '0.021*'
- unparsed cell tab_3:row9:col3 = '0.004*'
- unparsed cell tab_3:row9:col6 = '0.002*'
- unparsed cell tab_3:row10:col6 = '0.005*'
- unparsed cell tab_3:row12:col3 = '0.011*'
- unparsed cell tab_3:row13:col3 = '0.016*'
- unparsed cell Li_2016_table_3:row1:col4 = '0.000*'
- unparsed cell Li_2016_table_3:row1:col8 = '0.000*'
- unparsed cell Li_2016_table_3:row2:col1 = '0.722 ± 0.336 0.444 ± 0.109 0.444 ± 0.148 0.005*'
- unparsed cell Li_2016_table_3:row2:col4 = '3.58 ± 0.515 0.001*'
- unparsed cell Li_2016_table_3:row3:col4 = '0.001*'
- unparsed cell Li_2016_table_3:row3:col8 = '0.000*'
- unparsed cell Li_2016_table_3:row4:col4 = '0.001*'
- unparsed cell Li_2016_table_3:row4:col8 = '0.029*'
- unparsed cell Li_2016_table_3:row6:col8 = '0.001*'
- unparsed cell Li_2016_table_3:row7:col8 = '0.000*'
- unparsed cell Li_2016_table_3:row8:col3 = '2.26 ± 0.584 0.724'
- unparsed cell Li_2016_table_3:row8:col7 = '0.000*'
- unparsed cell Li_2016_table_3:row9:col8 = '0.036*'
- unparsed cell Li_2016_table_3:row10:col8 = '0.008*'
- companion parameter table 3 transcribed (61 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['tab_3:row6:col2', 'tab_3:row6:col3', 'tab_3:row6:col4', 'tab_3:row6:col5', 'Li_2016_table_3:row3:col2', 'Li_2016_table_3:row3:col3', 'Li_2016_table_3:row3:col5', 'Li_2016_table_3:row3:col6', 'Li_2016_table_3:row3:col7'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_3:row10:col2', 'tab_3:row10:col3', 'tab_3:row10:col4', 'tab_3:row10:col5', 'Li_2016_table_3:row7:col2', 'Li_2016_table_3:row7:col3', 'Li_2016_table_3:row7:col4', 'Li_2016_table_3:row7:col5', 'Li_2016_table_3:row7:col6', 'Li_2016_table_3:row7:col7'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_3:row2:col2', 'tab_3:row2:col4', 'tab_3:row2:col5', 'Li_2016_table_3:row1:col2', 'Li_2016_table_3:row1:col3', 'Li_2016_table_3:row1:col5', 'Li_2016_table_3:row1:col6', 'Li_2016_table_3:row1:col7'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_3:row3:col2', 'tab_3:row3:col5'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['tab_3:row11:col2', 'tab_3:row11:col3', 'tab_3:row11:col4', 'tab_3:row11:col5', 'tab_3:row11:col6', 'Li_2016_table_3:row8:col2', 'Li_2016_table_3:row8:col4', 'Li_2016_table_3:row8:col5', 'Li_2016_table_3:row8:col6'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['tab_3:row5:col2', 'tab_3:row5:col3', 'tab_3:row5:col4', 'tab_3:row5:col5', 'Li_2016_table_3:row2:col2', 'Li_2016_table_3:row2:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['tab_3:row8:col2', 'tab_3:row8:col4', 'tab_3:row8:col5', 'tab_3:row8:col6', 'Li_2016_table_3:row5:col2', 'Li_2016_table_3:row5:col3', 'Li_2016_table_3:row5:col4', 'Li_2016_table_3:row5:col5', 'Li_2016_table_3:row5:col6', 'Li_2016_table_3:row5:col7', 'Li_2016_table_3:row5:col8'] |
| C5_dimension_Q71 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_3:row4:col2', 'tab_3:row4:col5', 'tab_3:footnote'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_3:row9:col2', 'tab_3:row9:col4', 'tab_3:row9:col5', 'Li_2016_table_3:row6:col2', 'Li_2016_table_3:row6:col3', 'Li_2016_table_3:row6:col4', 'Li_2016_table_3:row6:col5', 'Li_2016_table_3:row6:col6', 'Li_2016_table_3:row6:col7'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['tab_3:row7:col2', 'tab_3:row7:col3', 'tab_3:row7:col4', 'tab_3:row7:col5', 'Li_2016_table_3:row4:col2', 'Li_2016_table_3:row4:col3', 'Li_2016_table_3:row4:col5', 'Li_2016_table_3:row4:col6', 'Li_2016_table_3:row4:col7'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 661 L/h | not captured | not captured | ['tab_3:row10:col2', 'tab_3:row10:col3', 'tab_3:row10:col4', 'tab_3:row10:col5', 'Li_2016_table_3:row7:col2', 'Li_2016_table_3:row7:col3', 'Li_2016_table_3:row7:col4', 'Li_2016_table_3:row7:col5', 'Li_2016_table_3:row7:col6', 'Li_2016_table_3:row7:col7'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 6.4e+03 L | not captured | not captured | ['tab_3:row9:col2', 'tab_3:row9:col4', 'tab_3:row9:col5', 'Li_2016_table_3:row6:col2', 'Li_2016_table_3:row6:col3', 'Li_2016_table_3:row6:col4', 'Li_2016_table_3:row6:col5', 'Li_2016_table_3:row6:col6', 'Li_2016_table_3:row6:col7'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_trandolapril/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Li_2016` / `Li_2016::trandolaprilat`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-30 23:53 UTC</sub>
