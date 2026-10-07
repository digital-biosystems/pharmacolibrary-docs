<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;momelotinib&quot;,&quot;href&quot;:&quot;drugs/drug_momelotinib/&quot;},{&quot;label&quot;:&quot;Rich_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# momelotinib — `Momelotinib_Rich2026_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Rich B et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2026)
  ·  DOI: [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076)

## Model component
<dbs-pgx drug="momelotinib" model-id="Momelotinib_Rich2026_reference" status="needs_review" stale="false" population="patients with myelofibrosis and healthy or special-population participants" measured-compound="momelotinib" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 10 extracted, plus 9 covariate effects.

**Parameterization:** CL/F, CLm/F, Q/F, V/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q27` · CL/F | 64.7 | L/h | 1.7972222222222225e-05 | [l] / [h] | 3.48 | exact (1.0) | cpt70076-tbl-0001:row4:col1, cpt70076-tbl-0001:row4:col2, cpt70076-tbl-0001:row4:col4 | — | 0.650 (None% RSE) |
| Q/F, L/h | `Q69` · Q/F | 36.1 | L/h | 1.0027777777777778e-05 | [l] / [h] | 7.57 | exact (1.0) | cpt70076-tbl-0001:row5:col1, cpt70076-tbl-0001:row5:col2, cpt70076-tbl-0001:row5:col4 | — | not captured |
| Total V/F, L | `Q76` · V/F | 383 | L | 0.383 | [l] | 5.87 | llm_confirmed (0.6) | cpt70076-tbl-0001:row6:col1, cpt70076-tbl-0001:row6:col2, cpt70076-tbl-0001:row6:col4 | — | 0.476 (None% RSE) |
| k tr, 1/h | `Q49` · kabs | 8.63 | 1/h | 0.0023972222222222225 | [1] / [h] | 6.88 | exact (1.0) | cpt70076-tbl-0001:row8:col1, cpt70076-tbl-0001:row8:col2, cpt70076-tbl-0001:row8:col4 | — | not captured |
| OATP1B1/1B3 inhibitor on relative bioavailability | `Q87` · Frel | 1.64 | not captured | not captured | not captured | 4.07 | llm_confirmed (0.6) | cpt70076-tbl-0001:row16:col1, cpt70076-tbl-0001:row16:col2, cpt70076-tbl-0001:row16:col4 | — | not captured |
| CLm/F of M21, L/h | `Q27` · CL/F | 24.9 | L/h | 6.916666666666666e-06 | [l] / [h] | 2.59 | exact (1.0) | cpt70076-tbl-0001:row28:col1, cpt70076-tbl-0001:row28:col2, cpt70076-tbl-0001:row28:col4 | — | not captured |
| Vcm/F of M21, L | `Q290` · V1/F | 2.77 | L | 0.00277 | [l] | 18.6 | exact (1.0) | cpt70076-tbl-0001:row29:col1, cpt70076-tbl-0001:row29:col2, cpt70076-tbl-0001:row29:col4 | — | not captured |
| Vpm/F of M21, L | `Q82` · V2/F | 45.7 | L | 0.045700000000000005 | [l] | 7.83 | exact (1.0) | cpt70076-tbl-0001:row30:col1, cpt70076-tbl-0001:row30:col2, cpt70076-tbl-0001:row30:col4 | — | not captured |
| Q m/F of M21, L/h | `Q69` · Q/F | 8.84 | L/h | 2.455555555555556e-06 | [l] / [h] | 9.90 | exact (1.0) | cpt70076-tbl-0001:row31:col1, cpt70076-tbl-0001:row31:col2, cpt70076-tbl-0001:row31:col4 | — | not captured |
| CL/F of momelotinib on CLm/F | `Q351` · CLm/F | 0.481 | not captured | not captured | not captured | 7.66 | llm_confirmed (0.6) | cpt70076-tbl-0001:row33:col1, cpt70076-tbl-0001:row33:col2, cpt70076-tbl-0001:row33:col4 | — | 0.371 (None% RSE) |
| theta_cl_f_hepatic | `Q900` · theta_cl_f_hepatic | 0.914 | not captured | not captured | not captured | 6.93 | not captured (not captured) | cpt70076-tbl-0001:row11:col1, cpt70076-tbl-0001:row11:col2, cpt70076-tbl-0001:row11:col4 | — | not captured |
| theta_cl_f_hepatic | `Q900` · theta_cl_f_hepatic | 0.779 | not captured | not captured | not captured | 13.3 | not captured (not captured) | cpt70076-tbl-0001:row12:col1, cpt70076-tbl-0001:row12:col2, cpt70076-tbl-0001:row12:col4 | — | not captured |
| theta_cl_f_hepatic | `Q900` · theta_cl_f_hepatic | 0.477 | not captured | not captured | not captured | 21.8 | not captured (not captured) | cpt70076-tbl-0001:row13:col1, cpt70076-tbl-0001:row13:col2, cpt70076-tbl-0001:row13:col4 | — | not captured |
| theta_cl_f_cyp3a4 | `Q900` · theta_cl_f_cyp3a4 | 2.01 | not captured | not captured | not captured | 3.90 | not captured (not captured) | cpt70076-tbl-0001:row14:col1, cpt70076-tbl-0001:row14:col2, cpt70076-tbl-0001:row14:col4 | — | not captured |
| theta_cl_f_cyp3a4 | `Q900` · theta_cl_f_cyp3a4 | 1.39 | not captured | not captured | not captured | 12.6 | not captured (not captured) | cpt70076-tbl-0001:row15:col1, cpt70076-tbl-0001:row15:col2, cpt70076-tbl-0001:row15:col4 | — | not captured |
| theta_q900_crcl | `Q900` · theta_q900_crcl | 0.418 | not captured | not captured | not captured | 14.1 | not captured (not captured) | cpt70076-tbl-0001:row34:col1, cpt70076-tbl-0001:row34:col2, cpt70076-tbl-0001:row34:col4 | — | not captured |
| theta_q45_hepatic | `Q900` · theta_q45_hepatic | -0.359 | not captured | not captured | not captured | 38.0 | not captured (not captured) | cpt70076-tbl-0001:row35:col1, cpt70076-tbl-0001:row35:col2, cpt70076-tbl-0001:row35:col4 | — | not captured |
| theta_q45_hepatic | `Q900` · theta_q45_hepatic | -0.679 | not captured | not captured | not captured | 49.2 | not captured (not captured) | cpt70076-tbl-0001:row36:col1, cpt70076-tbl-0001:row36:col2, cpt70076-tbl-0001:row36:col4 | — | not captured |
| theta_q45_hepatic | `Q900` · theta_q45_hepatic | -1.84 | not captured | not captured | not captured | 10.2 | not captured (not captured) | cpt70076-tbl-0001:row37:col1, cpt70076-tbl-0001:row37:col2, cpt70076-tbl-0001:row37:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Median a | Q900 | not captured | llm |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'On CL/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'On total V/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'On k tr' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'On k a' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'Proportional error phase III studies, %' routed out of structural estimates ('Residual error')
- table section residual_error: 'Proportional error phase I/II studies, %' routed out of structural estimates ('Residual error')
- table section residual_error: 'Additive error phase I/II studies, ng/mL' routed out of structural estimates ('Residual error')
- table section iiv: 'On CLm/F of M21' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'On Vcm/F of M21' routed out of structural estimates ('Interindividual variability')
- dropped unlinked row (NIL): 'Fraction V central' — extend the ontology if this is a real PK parameter (source ['cpt70076-tbl-0001:row7:col1', 'cpt70076-tbl-0001:row7:col2', 'cpt70076-tbl-0001:row7:col4'])
- dropped duplicate Q49 ('k a, 1/h', value '0.303') — already have one for this compound
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '0.914' (source ['cpt70076-tbl-0001:footnote', 'cpt70076-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '0.779' (source ['cpt70076-tbl-0001:footnote', 'cpt70076-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number '0.477' (source ['cpt70076-tbl-0001:footnote', 'cpt70076-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '1.39' (source ['cpt70076-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'CL' from footnote/prose loose number '1.64' (source ['cpt70076-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '1.64' (source ['cpt70076-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '0.481' (source ['cpt70076-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '0.418' (source ['cpt70076-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'fm' from footnote/prose loose number '0.640' (source ['cpt70076-tbl-0001:footnote']); the table cell was unparseable — needs review
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q45 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=momelotinib
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [2]
- row roles (LLM): model_class=compartmental; 40/40 row label(s) assigned, 25 linked by role; re-tagged parent→M21 ×33, momelotinib→parent ×9, momelotinib→M21 ×3
- molar mass: no plausible PubChem entry for 'M21' ('Momelotinib M21 metabolite') — left in mass units
- molar mass: none found for 'M21' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cpt70076-tbl-0001:row4:col3 = '60.3 to 69.2'
- unparsed cell cpt70076-tbl-0001:row4:col5 = '60.2 to 69.5'
- unparsed cell cpt70076-tbl-0001:row5:col3 = '30.7 to 41.4'
- unparsed cell cpt70076-tbl-0001:row5:col5 = '28.3 to 43.3'
- unparsed cell cpt70076-tbl-0001:row6:col3 = '339 to 427'
- unparsed cell cpt70076-tbl-0001:row6:col5 = '325 to 507'
- unparsed cell cpt70076-tbl-0001:row7:col3 = '0.234 to 0.343'
- unparsed cell cpt70076-tbl-0001:row7:col5 = '0.182 to 0.538'
- unparsed cell cpt70076-tbl-0001:row8:col3 = '7.46 to 9.79'
- unparsed cell cpt70076-tbl-0001:row8:col5 = '7.09 to 10.0'
- unparsed cell cpt70076-tbl-0001:row9:col3 = '0.253 to 0.354'
- unparsed cell cpt70076-tbl-0001:row9:col5 = '0.235 to 0.665'
- unparsed cell cpt70076-tbl-0001:row11:col3 = '0.798 to 1.05'
- unparsed cell cpt70076-tbl-0001:row11:col5 = '0.807 to 1.05'
- unparsed cell cpt70076-tbl-0001:row12:col3 = '0.600 to 1.01'
- unparsed cell cpt70076-tbl-0001:row12:col5 = '0.587 to 1.03'
- unparsed cell cpt70076-tbl-0001:row13:col3 = '0.311 to 0.731'
- unparsed cell cpt70076-tbl-0001:row13:col5 = '0.310 to 0.805'
- unparsed cell cpt70076-tbl-0001:row14:col3 = '1.86 to 2.17'
- unparsed cell cpt70076-tbl-0001:row14:col5 = '1.69 to 2.32'
- unparsed cell cpt70076-tbl-0001:row15:col3 = '1.09 to 1.78'
- unparsed cell cpt70076-tbl-0001:row15:col5 = '1.25 to 2.56'
- unparsed cell cpt70076-tbl-0001:row16:col3 = '1.51 to 1.78'
- unparsed cell cpt70076-tbl-0001:row16:col5 = '1.26 to 2.11'
- unparsed cell cpt70076-tbl-0001:row18:col3 = '0.605 to 0.694'
- unparsed cell cpt70076-tbl-0001:row18:col5 = '0.592 to 0.703'
- unparsed cell cpt70076-tbl-0001:row18:col6 = '9.02%'
- unparsed cell cpt70076-tbl-0001:row19:col3 = '0.384 to 0.567'
- unparsed cell cpt70076-tbl-0001:row19:col5 = '0.357 to 0.662'
- unparsed cell cpt70076-tbl-0001:row19:col6 = '48.1%'
- unparsed cell cpt70076-tbl-0001:row20:col3 = '0.802 to 1.02'
- unparsed cell cpt70076-tbl-0001:row20:col5 = '0.771 to 1.04'
- unparsed cell cpt70076-tbl-0001:row20:col6 = '52.5%'
- unparsed cell cpt70076-tbl-0001:row21:col3 = '0.445 to 0.618'
- unparsed cell cpt70076-tbl-0001:row21:col5 = '0.441 to 0.793'
- unparsed cell cpt70076-tbl-0001:row21:col6 = '49.6%'
- unparsed cell cpt70076-tbl-0001:row23:col3 = '56.0 to 60.9'
- unparsed cell cpt70076-tbl-0001:row23:col5 = '55.2 to 61.3'
- unparsed cell cpt70076-tbl-0001:row24:col3 = '33.0 to 35.6'
- unparsed cell cpt70076-tbl-0001:row24:col5 = '32.0 to 35.9'
- unparsed cell cpt70076-tbl-0001:row25:col3 = '1.15 to 1.79'
- unparsed cell cpt70076-tbl-0001:row25:col5 = '0.869 to 2.05'
- unparsed cell cpt70076-tbl-0001:row28:col3 = '23.7 to 26.2'
- unparsed cell cpt70076-tbl-0001:row28:col5 = '24.0 to 26.1'
- unparsed cell cpt70076-tbl-0001:row29:col3 = '1.76 to 3.78'
- unparsed cell cpt70076-tbl-0001:row29:col5 = '1.69 to 3.78'
- unparsed cell cpt70076-tbl-0001:row30:col3 = '38.7 to 52.8'
- unparsed cell cpt70076-tbl-0001:row30:col5 = '42.1 to 50.0'
- unparsed cell cpt70076-tbl-0001:row31:col3 = '7.12 to 10.6'
- unparsed cell cpt70076-tbl-0001:row31:col5 = '7.73 to 9.95'
- unparsed cell cpt70076-tbl-0001:row33:col3 = '0.409 to 0.554'
- unparsed cell cpt70076-tbl-0001:row33:col5 = '0.431 to 0.527'
- unparsed cell cpt70076-tbl-0001:row34:col3 = '0.302 to 0.533'
- unparsed cell cpt70076-tbl-0001:row34:col5 = '0.322 to 0.504'
- unparsed cell cpt70076-tbl-0001:row35:col3 = '−0.627 to −0.0917'
- unparsed cell cpt70076-tbl-0001:row35:col5 = '−0.553 to −0.135'
- unparsed cell cpt70076-tbl-0001:row36:col3 = '−1.33 to −0.0244'
- unparsed cell cpt70076-tbl-0001:row36:col5 = '−0.975 to −0.270'
- unparsed cell cpt70076-tbl-0001:row37:col3 = '−2.21 to −1.47'
- unparsed cell cpt70076-tbl-0001:row37:col5 = '−2.13 to −1.48'
- unparsed cell cpt70076-tbl-0001:row39:col3 = '0.344 to 0.398'
- unparsed cell cpt70076-tbl-0001:row39:col5 = '0.347 to 0.401'
- unparsed cell cpt70076-tbl-0001:row39:col6 = '13.7%'
- unparsed cell cpt70076-tbl-0001:row40:col3 = '2.06 to 2.73'
- unparsed cell cpt70076-tbl-0001:row40:col5 = '2.08 to 2.87'
- unparsed cell cpt70076-tbl-0001:row40:col6 = '52.8%'
- unparsed cell cpt70076-tbl-0001:row42:col3 = '48.6 to 54.8'
- unparsed cell cpt70076-tbl-0001:row42:col5 = '49.8 to 53.9'
- unparsed cell cpt70076-tbl-0001:row43:col3 = '31.1 to 36.3'
- unparsed cell cpt70076-tbl-0001:row43:col5 = '32.5 to 35.0'
- unparsed cell cpt70076-tbl-0001:row44:col3 = '0.397 to 3.33'
- unparsed cell cpt70076-tbl-0001:row44:col5 = '1.49 to 2.49'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt70076-tbl-0001:row4:col1', 'cpt70076-tbl-0001:row4:col2', 'cpt70076-tbl-0001:row4:col4'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt70076-tbl-0001:row28:col1', 'cpt70076-tbl-0001:row28:col2', 'cpt70076-tbl-0001:row28:col4'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt70076-tbl-0001:row29:col1', 'cpt70076-tbl-0001:row29:col2', 'cpt70076-tbl-0001:row29:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cpt70076-tbl-0001:row8:col1', 'cpt70076-tbl-0001:row8:col2', 'cpt70076-tbl-0001:row8:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt70076-tbl-0001:row5:col1', 'cpt70076-tbl-0001:row5:col2', 'cpt70076-tbl-0001:row5:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt70076-tbl-0001:row31:col1', 'cpt70076-tbl-0001:row31:col2', 'cpt70076-tbl-0001:row31:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt70076-tbl-0001:row6:col1', 'cpt70076-tbl-0001:row6:col2', 'cpt70076-tbl-0001:row6:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt70076-tbl-0001:row30:col1', 'cpt70076-tbl-0001:row30:col2', 'cpt70076-tbl-0001:row30:col4'] |
| C5_unit_missing_Q351 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt70076-tbl-0001:row33:col1', 'cpt70076-tbl-0001:row33:col2', 'cpt70076-tbl-0001:row33:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 64.7 L/h | not captured | not captured | ['cpt70076-tbl-0001:row4:col1', 'cpt70076-tbl-0001:row4:col2', 'cpt70076-tbl-0001:row4:col4'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 24.9 L/h | not captured | not captured | ['cpt70076-tbl-0001:row28:col1', 'cpt70076-tbl-0001:row28:col2', 'cpt70076-tbl-0001:row28:col4'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 2.77 L | not captured | not captured | ['cpt70076-tbl-0001:row29:col1', 'cpt70076-tbl-0001:row29:col2', 'cpt70076-tbl-0001:row29:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 383 L | not captured | not captured | ['cpt70076-tbl-0001:row6:col1', 'cpt70076-tbl-0001:row6:col2', 'cpt70076-tbl-0001:row6:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 45.7 L | not captured | not captured | ['cpt70076-tbl-0001:row30:col1', 'cpt70076-tbl-0001:row30:col2', 'cpt70076-tbl-0001:row30:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_momelotinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Rich_2026` / `Rich_2026::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 03:02 UTC</sub>
