<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;trastuzumab&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab/&quot;},{&quot;label&quot;:&quot;Gao_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trastuzumab_Verma2025_rat&quot;,&quot;label&quot;:&quot;Verma_2025_rat&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trastuzumab — `Trastuzumab_Gao2026_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Gao X et al., Population Pharmacokinetics of Trastuzu…, CPT: pharmacometrics & syst… (2026)
  ·  DOI: [10.1002/psp4.70259](https://doi.org/10.1002/psp4.70259)

## Model component
<dbs-pgx drug="trastuzumab" model-id="Trastuzumab_Gao2026_reference" status="needs_review" stale="false" population="patients with HER2-expressing or mutated advanced solid tumors" measured-compound="trastuzumab rezetecan" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ CL (L/day) | `Q22` · CL | 0.360 | L/day | 4.166666666666666e-09 | [l] / [d] | not captured | llm_confirmed (0.6) | psp470259-tbl-0001:row2:col1, psp470259-tbl-0001:row2:col2, psp470259-tbl-0001:row2:col4, psp470259-tbl-0001:row2:col6 | — | 0.0591 (None% RSE) |
| θ V1 (L) | `Q63` · V1 | 2.86 | L | 0.00286 | [l] | not captured | exact (1.0) | psp470259-tbl-0001:row3:col1, psp470259-tbl-0001:row3:col2, psp470259-tbl-0001:row3:col4, psp470259-tbl-0001:row3:col6 | — | 0.0408 (None% RSE) |
| θ Q (L/day) | `Q30` · Q | 0.162 | L/day | 1.8750000000000002e-09 | [l] / [d] | not captured | llm (0.6) | psp470259-tbl-0001:row4:col1, psp470259-tbl-0001:row4:col2, psp470259-tbl-0001:row4:col4, psp470259-tbl-0001:row4:col6 | — | not captured |
| θ V2 (L) | `Q64` · V2 | 2.88 | L | 0.0028799999999999997 | [l] | not captured | exact (1.0) | psp470259-tbl-0001:row5:col1, psp470259-tbl-0001:row5:col2, psp470259-tbl-0001:row5:col4, psp470259-tbl-0001:row5:col6 | — | 0.546 (None% RSE) |
| θ RAT (day−1) | `Q305` · kfm | 0.814 | day−1 | 9.421296296296296e-06 | [1] / [d] | not captured | exact (1.0) | psp470259-tbl-0001:row6:col1, psp470259-tbl-0001:row6:col2, psp470259-tbl-0001:row6:col4, psp470259-tbl-0001:row6:col6 | — | not captured |
| θ ALPHA | `Q67` · λ1 | 0.693 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | psp470259-tbl-0001:row7:col1, psp470259-tbl-0001:row7:col2, psp470259-tbl-0001:row7:col4, psp470259-tbl-0001:row7:col6 | — | 0.0692 (None% RSE) |
| θ CL3 (L/day) | `Q22` · CL | 392 | L/day | 4.537037037037037e-06 | [l] / [d] | not captured | exact (1.0) | psp470259-tbl-0001:row8:col1, psp470259-tbl-0001:row8:col2, psp470259-tbl-0001:row8:col4, psp470259-tbl-0001:row8:col6 | — | not captured |
| θ V3 (L) | `Q63` · V1 | 30.0 | L | 0.03 | [l] | not captured | exact (1.0) | psp470259-tbl-0001:row9:col1, psp470259-tbl-0001:row9:col2, psp470259-tbl-0001:row9:col4, psp470259-tbl-0001:row9:col6 | — | not captured |
| θ V3_AGE | `Q64` · V2 | 0.420 | not captured | not captured | not captured | not captured | llm (0.6) | psp470259-tbl-0001:row22:col1, psp470259-tbl-0001:row22:col2, psp470259-tbl-0001:row22:col4, psp470259-tbl-0001:row22:col6 | — | 0.146 (None% RSE) |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('θ CL_BW', value '0.525') — already have one for this compound
- dropped unlinked row (NIL): 'θ CL_SOD_B' — extend the ontology if this is a real PK parameter (source ['psp470259-tbl-0001:row11:col1', 'psp470259-tbl-0001:row11:col2', 'psp470259-tbl-0001:row11:col4', 'psp470259-tbl-0001:row11:col6'])
- dropped duplicate Q63 ('θ V1_BW', value '0.544') — already have one for this compound
- dropped duplicate Q63 ('θ V1_AGE', value '0.198') — already have one for this compound
- dropped duplicate Q63 ('θ V1_ALB', value '-0.363') — already have one for this compound
- dropped duplicate Q64 ('θ V2_ALB', value '-1.44') — already have one for this compound
- dropped unlinked row (NIL): 'θ RAT_BW' — extend the ontology if this is a real PK parameter (source ['psp470259-tbl-0001:row16:col1', 'psp470259-tbl-0001:row16:col2', 'psp470259-tbl-0001:row16:col4', 'psp470259-tbl-0001:row16:col6'])
- dropped unlinked row (NIL): 'θ RAT_SOD_B' — extend the ontology if this is a real PK parameter (source ['psp470259-tbl-0001:row17:col1', 'psp470259-tbl-0001:row17:col2', 'psp470259-tbl-0001:row17:col4', 'psp470259-tbl-0001:row17:col6'])
- dropped unlinked row (NIL): 'θ RAT_CT1 (day−1)' — extend the ontology if this is a real PK parameter (source ['psp470259-tbl-0001:row18:col1', 'psp470259-tbl-0001:row18:col2', 'psp470259-tbl-0001:row18:col4', 'psp470259-tbl-0001:row18:col6'])
- dropped unlinked row (NIL): 'θ RAT_CT2 (day−1)' — extend the ontology if this is a real PK parameter (source ['psp470259-tbl-0001:row19:col1', 'psp470259-tbl-0001:row19:col2', 'psp470259-tbl-0001:row19:col4', 'psp470259-tbl-0001:row19:col6'])
- dropped unlinked row (NIL): 'θ RAT_CT3 (day−1)' — extend the ontology if this is a real PK parameter (source ['psp470259-tbl-0001:row20:col1', 'psp470259-tbl-0001:row20:col2', 'psp470259-tbl-0001:row20:col4', 'psp470259-tbl-0001:row20:col6'])
- dropped unlinked row (NIL): 'θ CL3_AST' — extend the ontology if this is a real PK parameter (source ['psp470259-tbl-0001:row21:col1', 'psp470259-tbl-0001:row21:col2', 'psp470259-tbl-0001:row21:col4', 'psp470259-tbl-0001:row21:col6'])
- metabolite volume: 'θ V3_AGE' Q77→Q64 for rezetecan — its only peripheral volume is its first; the 2 numbers the molecule
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trastuzumab rezetecan
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- row roles: 3 per-group rows of rezetecan covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 32/32 row label(s) assigned, 28 linked by role; re-tagged parent→rezetecan ×69
- molar mass: no plausible PubChem entry for 'trastuzumab rezetecan' ('trastuzumab rezetecan') — left in mass units
- molar mass: no plausible PubChem entry for 'rezetecan' ('rezetecan') — left in mass units
- molar mass: none found for 'trastuzumab rezetecan' — its concentrations stay mass-only
- molar mass: none found for 'rezetecan' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp470259-tbl-0001:row2:col5 = '0.352 to 0.369'
- unparsed cell psp470259-tbl-0001:row3:col5 = '2.81 to 2.91'
- unparsed cell psp470259-tbl-0001:row4:col5 = '0.148 to 0.177'
- unparsed cell psp470259-tbl-0001:row5:col5 = '2.62 to 3.17'
- unparsed cell psp470259-tbl-0001:row6:col5 = '0.765 to 0.868'
- unparsed cell psp470259-tbl-0001:row7:col5 = '0.675 to 0.711'
- unparsed cell psp470259-tbl-0001:row8:col5 = '373 to 410'
- unparsed cell psp470259-tbl-0001:row9:col5 = '30.0 to 30.0'
- unparsed cell psp470259-tbl-0001:row10:col5 = '0.400 to 0.661'
- unparsed cell psp470259-tbl-0001:row11:col5 = '0.0344 to 0.108'
- unparsed cell psp470259-tbl-0001:row12:col5 = '0.460 to 0.652'
- unparsed cell psp470259-tbl-0001:row13:col5 = '0.116 to 0.267'
- unparsed cell psp470259-tbl-0001:row14:col5 = '−0.539 to −0.185'
- unparsed cell psp470259-tbl-0001:row15:col5 = '−1.96 to −0.348'
- unparsed cell psp470259-tbl-0001:row16:col5 = '−0.710 to −0.398'
- unparsed cell psp470259-tbl-0001:row17:col5 = '0.0527 to 0.152'
- unparsed cell psp470259-tbl-0001:row18:col5 = '−0.00304 to 0.114'
- unparsed cell psp470259-tbl-0001:row19:col5 = '−0.203 to −0.0593'
- unparsed cell psp470259-tbl-0001:row20:col5 = '−0.0337 to 0.122'
- unparsed cell psp470259-tbl-0001:row21:col5 = '−0.266 to −0.0777'
- unparsed cell psp470259-tbl-0001:row22:col5 = '0.156 to 0.621'
- unparsed cell psp470259-tbl-0001:row24:col5 = '0.0475 to 0.0711'
- unparsed cell psp470259-tbl-0001:row25:col5 = '0.0254 to 0.0621'
- unparsed cell psp470259-tbl-0001:row26:col5 = '0.0341 to 0.149'
- unparsed cell psp470259-tbl-0001:row27:col5 = '0.447 to 0.641'
- unparsed cell psp470259-tbl-0001:row28:col5 = '0.0213 to 0.0625'
- unparsed cell psp470259-tbl-0001:row29:col5 = '0.0518 to 0.0880'
- unparsed cell psp470259-tbl-0001:row30:col5 = '0.0995 to 0.180'
- unparsed cell psp470259-tbl-0001:row31:col5 = '0.108 to 0.185'
- unparsed cell psp470259-tbl-0001:row33:col5 = '0.0223 to 0.0418'
- unparsed cell psp470259-tbl-0001:row34:col5 = '1.41 to 3.21'
- unparsed cell psp470259-tbl-0001:row35:col5 = '0.0736 to 0.0854'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470259-tbl-0001:row2:col1', 'psp470259-tbl-0001:row2:col2', 'psp470259-tbl-0001:row2:col4', 'psp470259-tbl-0001:row2:col6'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470259-tbl-0001:row8:col1', 'psp470259-tbl-0001:row8:col2', 'psp470259-tbl-0001:row8:col4', 'psp470259-tbl-0001:row8:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470259-tbl-0001:row4:col1', 'psp470259-tbl-0001:row4:col2', 'psp470259-tbl-0001:row4:col4', 'psp470259-tbl-0001:row4:col6'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470259-tbl-0001:row6:col1', 'psp470259-tbl-0001:row6:col2', 'psp470259-tbl-0001:row6:col4', 'psp470259-tbl-0001:row6:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470259-tbl-0001:row3:col1', 'psp470259-tbl-0001:row3:col2', 'psp470259-tbl-0001:row3:col4', 'psp470259-tbl-0001:row3:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470259-tbl-0001:row9:col1', 'psp470259-tbl-0001:row9:col2', 'psp470259-tbl-0001:row9:col4', 'psp470259-tbl-0001:row9:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470259-tbl-0001:row5:col1', 'psp470259-tbl-0001:row5:col2', 'psp470259-tbl-0001:row5:col4', 'psp470259-tbl-0001:row5:col6'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 | not captured | not captured | not captured | ['psp470259-tbl-0001:row22:col1', 'psp470259-tbl-0001:row22:col2', 'psp470259-tbl-0001:row22:col4', 'psp470259-tbl-0001:row22:col6'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] | not captured | not captured | not captured | ['psp470259-tbl-0001:row7:col1', 'psp470259-tbl-0001:row7:col2', 'psp470259-tbl-0001:row7:col4', 'psp470259-tbl-0001:row7:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.36 | not captured | not captured | ['psp470259-tbl-0001:row2:col1', 'psp470259-tbl-0001:row2:col2', 'psp470259-tbl-0001:row2:col4', 'psp470259-tbl-0001:row2:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.015 L/h | not captured | not captured | ['psp470259-tbl-0001:row2:col1', 'psp470259-tbl-0001:row2:col2', 'psp470259-tbl-0001:row2:col4', 'psp470259-tbl-0001:row2:col6'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 16.3 L/h | not captured | not captured | ['psp470259-tbl-0001:row8:col1', 'psp470259-tbl-0001:row8:col2', 'psp470259-tbl-0001:row8:col4', 'psp470259-tbl-0001:row8:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.86 L | not captured | not captured | ['psp470259-tbl-0001:row3:col1', 'psp470259-tbl-0001:row3:col2', 'psp470259-tbl-0001:row3:col4', 'psp470259-tbl-0001:row3:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 30 L | not captured | not captured | ['psp470259-tbl-0001:row9:col1', 'psp470259-tbl-0001:row9:col2', 'psp470259-tbl-0001:row9:col4', 'psp470259-tbl-0001:row9:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.88 L | not captured | not captured | ['psp470259-tbl-0001:row5:col1', 'psp470259-tbl-0001:row5:col2', 'psp470259-tbl-0001:row5:col4', 'psp470259-tbl-0001:row5:col6'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_trastuzumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gao_2026` / `Gao_2026::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:23 UTC</sub>
