<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artemisinin&quot;,&quot;href&quot;:&quot;drugs/drug_artemisinin/&quot;},{&quot;label&quot;:&quot;Ding_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artemisinin_Birgersson2016_reference&quot;,&quot;label&quot;:&quot;Birgersson_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artemisinin/Artemisinin_Birgersson2016_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artemisinin_Chotsiri2024_reference&quot;,&quot;label&quot;:&quot;Chotsiri_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artemisinin/Artemisinin_Chotsiri2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artemisinin_Ding2024_reference&quot;,&quot;label&quot;:&quot;Ding_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artemisinin/Artemisinin_Ding2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# artemisinin — `Artemisinin_Ding2026_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Ding J et al., Population pharmacokinetics of artemeth…, British journal of clinical… (2026)
  ·  DOI: [10.1002/bcp.70301](https://doi.org/10.1002/bcp.70301)

## Model component
<dbs-pgx drug="artemisinin" model-id="Artemisinin_Ding2026_reference" status="rejected" stale="false" population="patients with uncomplicated Plasmodium falciparum malaria" measured-compound="artemether" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 26 extracted.

**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Mean transit time (h) | `Q81` · MTT | 5.43 | h | not captured | [h] | not captured | exact (1.0) | bcp70301-tbl-0002:row3:col1, Ding_2026_table_4:row2:col1 | — | 62.7 (15.7% RSE) |
| Number of transit compartments | `Q311` · n_transit | 5 | LF | not captured | [l] · [f] | not captured | exact (1.0) | bcp70301-tbl-0002:row4:col1, Ding_2026_table_4:row3:col1 | — | not captured |
| F | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | bcp70301-tbl-0002:row5:col1, Ding_2026_table_3:row3:col1, Ding_2026_table_4:row4:col1 | — | not captured |
| CL/F ARM (L/h) | `Q27` · CL/F | 79.3 | L/h | 2.2027777777777775e-05 | [l] / [h] | not captured | llm_confirmed (0.6) | bcp70301-tbl-0002:row6:col1 | — | 21.1 (29.1% RSE) |
| VC/F ARM (L) | `Q290` · V1/F | 141 | L | 0.14100000000000001 | [l] | not captured | llm_confirmed (0.6) | bcp70301-tbl-0002:row7:col1 | — | 42.5 (32.2% RSE) |
| Q/F ARM (L/h) | `Q69` · Q/F | 21.7 | L/h | 6.027777777777778e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | bcp70301-tbl-0002:row8:col1 | — | not captured |
| Vp/F ARM (L) | `Q82` · V2/F | 283 | L | 0.28300000000000003 | [l] | not captured | llm_confirmed (0.6) | bcp70301-tbl-0002:row9:col1 | — | not captured |
| Time dependency on CL | `Q22` · CL | 0.551 | ARM | not captured | [arm] | not captured | llm_confirmed (0.6) | bcp70301-tbl-0002:row10:col1 | — | not captured |
| CL/F DHA (L/h) | `Q27` · CL/F | 255 | L/h | 7.083333333333334e-05 | [l] / [h] | not captured | exact (1.0) | bcp70301-tbl-0002:row13:col1 | — | not captured |
| Vc/F DHA (L) | `Q290` · V1/F | 64.1 | L | 0.06409999999999999 | [l] | not captured | exact (1.0) | bcp70301-tbl-0002:row14:col1 | — | not captured |
| Ka | `Q49` · kabs | 1.93 | 1/h | 0.0005361111111111111 | 1/h | not captured | exact (1.0) | Ding_2026_table_3:row2:col1 | — | not captured |
| CL/F AQ (L/h) | `Q27` · CL/F | 2250 | L/h | 0.000625 | [l] / [h] | not captured | llm_confirmed (0.6) | Ding_2026_table_3:row4:col1 | — | not captured |
| Q/F AQ (L/h) | `Q69` · Q/F | 3020 | L/h | 0.0008388888888888889 | [l] / [h] | not captured | llm_confirmed (0.6) | Ding_2026_table_3:row6:col1 | — | not captured |
| CL/F DEAQ (L/h) | `Q27` · CL/F | 32.2 | L/h | 8.944444444444446e-06 | [l] / [h] | not captured | exact (1.0) | Ding_2026_table_3:row10:col1 | — | not captured |
| VC/F DEAQ (L) | `Q290` · V1/F | 1260 | L | 1.26 | [l] | not captured | exact (1.0) | Ding_2026_table_3:row11:col1 | — | not captured |
| Q1/F DEAQ (L/h) | `Q69` · Q/F | 117 | L/h | 3.2500000000000004e-05 | [l] / [h] | not captured | exact (1.0) | Ding_2026_table_3:row12:col1 | — | not captured |
| Vp1/F DEAQ (L) | `Q82` · V2/F | 1640 | L | 1.6400000000000001 | [l] | not captured | exact (1.0) | Ding_2026_table_3:row13:col1 | — | not captured |
| Q2/F DEAQ (L/h) | `Q80` · Q2/F | 37.3 | L/h | 1.036111111111111e-05 | [l] / [h] | not captured | special_case (0.95) | Ding_2026_table_3:row14:col1 | — | not captured |
| Vp2/F DEAQ (L) | `Q78` · V3/F | 6440 | L | 6.44 | [l] | not captured | exact (1.0) | Ding_2026_table_3:row15:col1 | — | not captured |
| CL/F LF (L/h) | `Q27` · CL/F | 4.35 | L/h | 1.2083333333333333e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | Ding_2026_table_4:row5:col1 | — | not captured |
| VC,/F LF (L) | `Q290` · V1/F | 101 | L | 0.101 | [l] | not captured | llm_corrected (0.6) | Ding_2026_table_4:row6:col1 | — | not captured |
| Q/F LF (L/h) | `Q69` · Q/F | 1.65 | L/h | 4.583333333333333e-07 | [l] / [h] | not captured | llm_confirmed (0.6) | Ding_2026_table_4:row7:col1 | — | not captured |
| Vp,/F LF (L) | `Q82` · V2/F | 311 | L | 0.311 | [l] | not captured | llm_corrected (0.6) | Ding_2026_table_4:row8:col1 | — | not captured |
| CL/F DLF (L/h) | `Q27` · CL/F | 744 | L/h | 0.00020666666666666666 | [l] / [h] | not captured | exact (1.0) | Ding_2026_table_4:row11:col1 | — | not captured |
| VC/F DLF (L) | `Q290` · V1/F | 8530 | L | 8.53 | [l] | not captured | exact (1.0) | Ding_2026_table_4:row12:col1 | — | not captured |
| Q/F DLF (L/h) | `Q69` · Q/F | 1100 | L/h | 0.0003055555555555556 | [l] / [h] | not captured | exact (1.0) | Ding_2026_table_4:row13:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F ARM (L/h)' routed out of structural estimates ('CV for IIV/IOV')
- table section iiv: 'CL/F DHA (L/h)' routed out of structural estimates ('CV for IIV/IOV')
- table section iiv: 'CL/F AQ (L/h)' routed out of structural estimates ('CV for IIV/IOV')
- table section iiv: 'CL/F DEAQ (L/h)' routed out of structural estimates ('CV for IIV/IOV')
- table section iiv: 'VC/F DEAQ (L)' routed out of structural estimates ('CV for IIV/IOV')
- table section iiv: 'Mean transit time (h)' routed out of structural estimates ('CV for IIV/ISV')
- table section iiv: 'VC,/F LF (L)' routed out of structural estimates ('CV for IIV/ISV')
- table section iiv: 'CL/F DLF (L/h)' routed out of structural estimates ('CV for IIV/ISV')
- table section iiv: 'VC/F DLF (L)' routed out of structural estimates ('CV for IIV/ISV')
- column 'nonmem' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'LF' (n_transit)
- unit_dimension_unknown: 'ARM' (CL)
- dropped unlinked row (NIL): 'Baseline parasite density on F (%)' — extend the ontology if this is a real PK parameter (source ['Ding_2026_table_4:row17:col1'])
- dropped unlinked row (NIL): 'Dose (mg/kg) on F' — extend the ontology if this is a real PK parameter (source ['Ding_2026_table_4:row18:col1'])
- dropped unlinked row (NIL): 'Baseline temperature on F (%)' — extend the ontology if this is a real PK parameter (source ['Ding_2026_table_4:row19:col1'])
- dropped duplicate Q290 ('Study effect (TACT) on VC/F LF (%)', value '-28.1') — already have one for this compound
- dropped unlinked row (NIL): 'Age on CL/F DLF (year)' — extend the ontology if this is a real PK parameter (source ['Ding_2026_table_4:row21:col1'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 45 (source ['bcp70301-tbl-0002:footnote']); the table cell was unparseable — needs review
- implicit units: 'Ka' → 1/h (from the popPK convention: 'No unit stated in text or footnotes; first-order absorption rate constants are conventionally in 1/h, and 1.93 1/h is co')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=artemether
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — 3 metabolites — the templates hold two
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 37/37 row label(s) assigned, 40 linked by role; re-tagged parent→dihydroartemisinin ×7, parent→amodiaquine ×6, parent→desethylamodiaquine ×13, parent→lumefantrine ×14, parent→desbutyllumefantrine ×8
- review gap-fill skipped: this record measures 'artemether', not artemisinin — the review values are the parent's

**Extraction notes:**
- unparsed cell bcp70301-tbl-0002:row3:col2 = '1.55 (1.33–1.77)'
- unparsed cell bcp70301-tbl-0002:row3:col3 = 'IOV 54.4 (16.3)'
- unparsed cell bcp70301-tbl-0002:row3:col4 = '54.2 (46.5–65.7)'
- unparsed cell bcp70301-tbl-0002:row5:col3 = 'IOV 31.6 (22.9)'
- unparsed cell bcp70301-tbl-0002:row5:col4 = '31.7 (24.7–39.6)'
- unparsed cell bcp70301-tbl-0002:row6:col2 = '79.2 (71.4–86.6)'
- unparsed cell bcp70301-tbl-0002:row6:col4 = '21.5 (16.1–27.7)'
- unparsed cell bcp70301-tbl-0002:row7:col2 = '140 (122–161)'
- unparsed cell bcp70301-tbl-0002:row8:col2 = '21.5 (18.2–26.1)'
- unparsed cell bcp70301-tbl-0002:row9:col2 = '279 (203–446)'
- unparsed cell bcp70301-tbl-0002:row10:col2 = '0.546 (0.387–0.736)'
- unparsed cell bcp70301-tbl-0002:row11:col2 = '0.230 (0.198–0.265)'
- unparsed cell bcp70301-tbl-0002:row13:col2 = '254 (229–288)'
- unparsed cell bcp70301-tbl-0002:row13:col4 = '42.2 (33.4–52.0)'
- unparsed cell bcp70301-tbl-0002:row14:col2 = '64.3 (44.7–82.7)'
- unparsed cell bcp70301-tbl-0002:row15:col2 = '0.261 (0.226–0.306)'
- unparsed cell Ding_2026_table_3:row2:col2 = '1.92 (1.4–2.91)'
- unparsed cell Ding_2026_table_3:row2:col3 = 'IOV: 254 (29.8)'
- unparsed cell Ding_2026_table_3:row2:col4 = '261 (157–560)'
- unparsed cell Ding_2026_table_3:row3:col3 = 'IOV: 27.5 (15.1)'
- unparsed cell Ding_2026_table_3:row3:col4 = '27.5 (23.2–31.3)'
- unparsed cell Ding_2026_table_3:row4:col2 = '2250 (2120‐2390)'
- unparsed cell Ding_2026_table_3:row4:col4 = '11.8 (7.0–15.4)'
- unparsed cell Ding_2026_table_3:row6:col2 = '3010 (2640‐3540)'
- unparsed cell Ding_2026_table_3:row8:col2 = '0.0676 (0.0561–0.0827)'
- unparsed cell Ding_2026_table_3:row10:col2 = '32.3 (30.1–34.4)'
- unparsed cell Ding_2026_table_3:row10:col4 = '30.7 (24.0–37.5)'
- unparsed cell Ding_2026_table_3:row11:col2 = '1260 (1090‐1500)'
- unparsed cell Ding_2026_table_3:row11:col4 = '42.3 (28.2–57.1)'
- unparsed cell Ding_2026_table_3:row12:col2 = '118 (82.7–161)'
- unparsed cell Ding_2026_table_3:row13:col2 = '1630 (1300‐2250)'
- unparsed cell Ding_2026_table_3:row14:col2 = '37.5 (29.6–45.7)'
- unparsed cell Ding_2026_table_3:row15:col2 = '6420 (5570‐7590)'
- companion parameter table 3 transcribed (23 record(s), model stage 'final')
- unparsed cell Ding_2026_table_4:row2:col2 = '5.56 (5.00–6.25)'
- unparsed cell Ding_2026_table_4:row2:col4 = '58.5 (49.5–72.0)'
- unparsed cell Ding_2026_table_4:row4:col3 = '57.0 (12.3) /13.3 (19.1)'
- unparsed cell Ding_2026_table_4:row4:col4 = '56.9 (49.5–64.9)/ 13.3 (10.3–15.5)'
- unparsed cell Ding_2026_table_4:row4:col5 = '44.6/24.3'
- unparsed cell Ding_2026_table_4:row5:col2 = '4.35 (4.04–4.61)'
- unparsed cell Ding_2026_table_4:row6:col2 = '101 (88.0–121)'
- unparsed cell Ding_2026_table_4:row6:col4 = '89.3 (71.2–103)'
- unparsed cell Ding_2026_table_4:row7:col2 = '1.66 (1.45–1.83)'
- unparsed cell Ding_2026_table_4:row8:col2 = '311 (275–343)'
- unparsed cell Ding_2026_table_4:row9:col2 = '0.304 (0.270–0.344)'
- unparsed cell Ding_2026_table_4:row11:col2 = '721 (677–775)'
- unparsed cell Ding_2026_table_4:row11:col4 = '15.0 (11.5–18.7)'
- unparsed cell Ding_2026_table_4:row12:col2 = '8580 (7170‐10 500)'
- unparsed cell Ding_2026_table_4:row12:col4 = '97.5 (77.1–122)'
- unparsed cell Ding_2026_table_4:row13:col2 = '1050 (879–1200)'
- unparsed cell Ding_2026_table_4:row15:col2 = '0.177 (0.160–0.199)'
- unparsed cell Ding_2026_table_4:row17:col2 = '−11.6 (−18.0 to −5.6)'
- unparsed cell Ding_2026_table_4:row18:col2 = '−6.54 (−8.50 to −4.82)'
- unparsed cell Ding_2026_table_4:row19:col2 = '−12.4 (−16.2 to −8.43)'
- unparsed cell Ding_2026_table_4:row20:col2 = '−27.7 (−36.3 to −20.0)'
- unparsed cell Ding_2026_table_4:row21:col2 = '9.8 (8.1–11.7)'
- companion parameter table 4 transcribed (27 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 26 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q40 | fail | 1.0 | 79.3 | 79.3 | 0.05 | footnote reference category |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp70301-tbl-0002:row6:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp70301-tbl-0002:row13:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row4:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row10:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_4:row5:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_4:row11:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp70301-tbl-0002:row7:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp70301-tbl-0002:row14:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_3:row11:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_4:row6:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_4:row12:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row2:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp70301-tbl-0002:row8:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row6:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row12:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_4:row7:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_4:row13:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_3:row15:col1'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row14:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp70301-tbl-0002:row9:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_3:row13:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_4:row8:col1'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | ARM | not captured | not captured | ['bcp70301-tbl-0002:row10:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown', 'unknown', 'unknown'] | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 79.3 L/h | not captured | not captured | ['bcp70301-tbl-0002:row6:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 255 L/h | not captured | not captured | ['bcp70301-tbl-0002:row13:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.25e+03 L/h | not captured | not captured | ['Ding_2026_table_3:row4:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 32.2 L/h | not captured | not captured | ['Ding_2026_table_3:row10:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 4.35 L/h | not captured | not captured | ['Ding_2026_table_4:row5:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 744 L/h | not captured | not captured | ['Ding_2026_table_4:row11:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 141 L | not captured | not captured | ['bcp70301-tbl-0002:row7:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 64.1 L | not captured | not captured | ['bcp70301-tbl-0002:row14:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 1.26e+03 L | not captured | not captured | ['Ding_2026_table_3:row11:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 101 L | not captured | not captured | ['Ding_2026_table_4:row6:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 8.53e+03 L | not captured | not captured | ['Ding_2026_table_4:row12:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 283 L | not captured | not captured | ['bcp70301-tbl-0002:row9:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.64e+03 L | not captured | not captured | ['Ding_2026_table_3:row13:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 311 L | not captured | not captured | ['Ding_2026_table_4:row8:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_artemisinin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ding_2026` / `Ding_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:10 UTC</sub>
