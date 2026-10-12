<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Lumefantrine&quot;,&quot;href&quot;:&quot;drugs/drug_lumefantrine/&quot;},{&quot;label&quot;:&quot;Ding_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lumefantrine_Kloprogge2018_reference&quot;,&quot;label&quot;:&quot;Kloprogge_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lumefantrine/Lumefantrine_Kloprogge2018_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Lumefantrine — `Lumefantrine_Ding2026_reference`

> ## <span class="pk-badge pk-badge--neutral">not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.435). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

### Reviewer guidance

**The lumefantrine record was not simulated because only 12 of 20 expected parameters were extracted or defaulted — V1/F and V2/F for several compounds and the amodiaquine absorption rate constant kabs were missing — and one reported unit could not be converted to SI.**

The parameter-coverage check found 12 of 20 expected parameters covered, leaving eight unaccounted: V1/F and V2/F values (e.g. V1/F 101 L and V2/F 311 L for lumefantrine, V1/F 8530 L for desbutyllumefantrine, V1/F 141 L for artemether, V1/F 1260 L and V2/F 1640 L for desethylamodiaquine) and the amodiaquine kabs of 1.93 1/h were neither emitted nor defaulted. Additionally, one reported unit could not be expressed in SI, so that parameter reached the model builder without a usable numeric value. The builder assumed apparent parameterization with F=1 and Fm=1 and no molar correction. The model was built but has not been simulated yet. Extracted — lumefantrine: MTT 5.43 h, n_transit 5 LF, Fab 1, CL/F 4.35 L/h, V1/F 101 L, Q/F 1.65 L/h, V2/F 311 L; desbutyllumefantrine: CL/F 744 L/h, V1/F 8.53e+03 L, Q/F 1.1e+03 L/h; artemether: CL/F 79.3 L/h, V1/F 141 L, Q/F 21.7 L/h, V3/F 283 L; dihydroartemisinin: CL/F 255 L/h, V1/F 64.1 L; amodiaquine: kabs 1.93 1/h, CL/F 2.25e+03 L/h, Q/F 3.02e+03 L/h; desethylamodiaquine: CL/F 32.2 L/h, V1/F 1.26e+03 L, Q/F 117 L/h, V2/F 1.64e+03 L, Q2/F 37.3 L/h, V3/F 6.44e+03 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has artemether-lumefantrine plus amodiaquine, the second reading lumefantrine; it also differs on 25 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `artemether-lumefantrine plus amodiaquine`, measured `lumefantrine`.

## Citation
Ding J et al., Population pharmacokinetics of artemeth…, British journal of clinical… (2026)
  ·  DOI: [10.1002/bcp.70301](https://doi.org/10.1002/bcp.70301)

## Model component
<dbs-pgx drug="Lumefantrine" model-id="Lumefantrine_Ding2026_reference" status="not_simulated" stale="false" population="patients with uncomplicated Plasmodium falciparum malaria" measured-compound="lumefantrine" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Model structure:** 2-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameters:** 25 extracted.

**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `not_simulated`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Mean transit time (h) | `Q81` · MTT | 5.43 | h | not captured | [h] | not captured | exact (1.0) | bcp70301-tbl-0004:row3:col1, Ding_2026_table_2:row2:col1 | — | 62.7 (15.7% RSE) |
| Number of transit compartments | `Q311` · n_transit | 5 | LF | not captured | [l] · [f] | not captured | exact (1.0) | bcp70301-tbl-0004:row4:col1, Ding_2026_table_2:row3:col1 | — | not captured |
| F | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | bcp70301-tbl-0004:row5:col1, Ding_2026_table_2:row4:col1, Ding_2026_table_3:row3:col1 | — | not captured |
| CL/F LF (L/h) | `Q27` · CL/F | 4.35 | L/h | 1.2083333333333333e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | bcp70301-tbl-0004:row6:col1 | — | 14.9 (12.5% RSE) |
| VC,/F LF (L) | `Q290` · V1/F | 101 | L | 0.101 | [l] | not captured | llm_corrected (0.6) | bcp70301-tbl-0004:row7:col1 | — | 101 (7.8% RSE) |
| Q/F LF (L/h) | `Q69` · Q/F | 1.65 | L/h | 4.583333333333333e-07 | [l] / [h] | not captured | llm_confirmed (0.6) | bcp70301-tbl-0004:row8:col1 | — | not captured |
| Vp,/F LF (L) | `Q82` · V2/F | 311 | L | 0.311 | [l] | not captured | llm_corrected (0.6) | bcp70301-tbl-0004:row9:col1 | — | not captured |
| CL/F DLF (L/h) | `Q27` · CL/F | 744 | L/h | 0.00020666666666666666 | [l] / [h] | not captured | exact (1.0) | bcp70301-tbl-0004:row12:col1 | — | not captured |
| VC/F DLF (L) | `Q290` · V1/F | 8530 | L | 8.53 | [l] | not captured | exact (1.0) | bcp70301-tbl-0004:row13:col1 | — | not captured |
| Q/F DLF (L/h) | `Q69` · Q/F | 1100 | L/h | 0.0003055555555555556 | [l] / [h] | not captured | exact (1.0) | bcp70301-tbl-0004:row14:col1 | — | not captured |
| CL/F ARM (L/h) | `Q27` · CL/F | 79.3 | L/h | 2.2027777777777775e-05 | [l] / [h] | not captured | llm_confirmed (0.6) | Ding_2026_table_2:row5:col1 | — | not captured |
| VC/F ARM (L) | `Q290` · V1/F | 141 | L | 0.14100000000000001 | [l] | not captured | llm_confirmed (0.6) | Ding_2026_table_2:row6:col1 | — | not captured |
| Q/F ARM (L/h) | `Q69` · Q/F | 21.7 | L/h | 6.027777777777778e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | Ding_2026_table_2:row7:col1 | — | not captured |
| Vp/F ARM (L) | `Q78` · V3/F | 283 | L | 0.28300000000000003 | [l] | not captured | llm_corrected (0.6) | Ding_2026_table_2:row8:col1 | — | not captured |
| CL/F DHA (L/h) | `Q27` · CL/F | 255 | L/h | 7.083333333333334e-05 | [l] / [h] | not captured | exact (1.0) | Ding_2026_table_2:row12:col1 | — | not captured |
| Vc/F DHA (L) | `Q290` · V1/F | 64.1 | L | 0.06409999999999999 | [l] | not captured | exact (1.0) | Ding_2026_table_2:row13:col1 | — | not captured |
| Ka | `Q49` · kabs | 1.93 | 1/h | 0.0005361111111111111 | 1/h | not captured | exact (1.0) | Ding_2026_table_3:row2:col1 | — | not captured |
| CL/F AQ (L/h) | `Q27` · CL/F | 2250 | L/h | 0.000625 | [l] / [h] | not captured | llm_confirmed (0.6) | Ding_2026_table_3:row4:col1 | — | not captured |
| Q/F AQ (L/h) | `Q69` · Q/F | 3020 | L/h | 0.0008388888888888889 | [l] / [h] | not captured | llm_confirmed (0.6) | Ding_2026_table_3:row6:col1 | — | not captured |
| CL/F DEAQ (L/h) | `Q27` · CL/F | 32.2 | L/h | 8.944444444444446e-06 | [l] / [h] | not captured | exact (1.0) | Ding_2026_table_3:row10:col1 | — | not captured |
| VC/F DEAQ (L) | `Q290` · V1/F | 1260 | L | 1.26 | [l] | not captured | exact (1.0) | Ding_2026_table_3:row11:col1 | — | not captured |
| Q1/F DEAQ (L/h) | `Q69` · Q/F | 117 | L/h | 3.2500000000000004e-05 | [l] / [h] | not captured | exact (1.0) | Ding_2026_table_3:row12:col1 | — | not captured |
| Vp1/F DEAQ (L) | `Q82` · V2/F | 1640 | L | 1.6400000000000001 | [l] | not captured | exact (1.0) | Ding_2026_table_3:row13:col1 | — | not captured |
| Q2/F DEAQ (L/h) | `Q80` · Q2/F | 37.3 | L/h | 1.036111111111111e-05 | [l] / [h] | not captured | special_case (0.95) | Ding_2026_table_3:row14:col1 | — | not captured |
| Vp2/F DEAQ (L) | `Q78` · V3/F | 6440 | L | 6.44 | [l] | not captured | exact (1.0) | Ding_2026_table_3:row15:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'Mean transit time (h)' routed out of structural estimates ('CV for IIV/ISV')
- table section iiv: 'VC,/F LF (L)' routed out of structural estimates ('CV for IIV/ISV')
- table section iiv: 'CL/F DLF (L/h)' routed out of structural estimates ('CV for IIV/ISV')
- table section iiv: 'VC/F DLF (L)' routed out of structural estimates ('CV for IIV/ISV')
- table section iiv: 'CL/F ARM (L/h)' routed out of structural estimates ('CV for IIV/IOV')
- table section iiv: 'CL/F DHA (L/h)' routed out of structural estimates ('CV for IIV/IOV')
- table section iiv: 'CL/F AQ (L/h)' routed out of structural estimates ('CV for IIV/IOV')
- table section iiv: 'CL/F DEAQ (L/h)' routed out of structural estimates ('CV for IIV/IOV')
- table section iiv: 'VC/F DEAQ (L)' routed out of structural estimates ('CV for IIV/IOV')
- column 'nonmem' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'LF' (n_transit)
- dropped unlinked row (NIL): 'Baseline parasite density on F (%)' — extend the ontology if this is a real PK parameter (source ['bcp70301-tbl-0004:row18:col1'])
- dropped unlinked row (NIL): 'Dose (mg/kg) on F' — extend the ontology if this is a real PK parameter (source ['bcp70301-tbl-0004:row19:col1'])
- dropped unlinked row (NIL): 'Baseline temperature on F (%)' — extend the ontology if this is a real PK parameter (source ['bcp70301-tbl-0004:row20:col1'])
- dropped duplicate Q290 ('Study effect (TACT) on VC/F LF (%)', value '-28.1') — already have one for this compound
- dropped unlinked row (NIL): 'Age on CL/F DLF (year)' — extend the ontology if this is a real PK parameter (source ['bcp70301-tbl-0004:row22:col1'])
- dropped unlinked row (NIL): 'Time dependency on CL' — extend the ontology if this is a real PK parameter (source ['Ding_2026_table_2:row9:col1'])
- dropped value-less row: 'TABLE 4. Final parameter estimates of lumefantrine and desbutyl‐lumefantrine population pharmacokinetics in patients with uncomplicated P. falciparum, pooled from the TRACII study (n = 575) and TACT‐CV study (n = 310).'
- dropped value-less row: 'Note: Population estimates are given for a “typical” adult patient weighing 45 kg with baseline parasite density of 104.56 and temperature of 37.5 °C, receiving 9.8 mg/kg dose of lumefantrine.'
- implicit units: 'Ka' → 1/h (from the popPK convention: 'No unit stated in text or table caption for the absorption rate constant; first-order rate constants in population PK ar')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lumefantrine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 3 first-order transfer(s) across 6 compounds → general_linear
- template fit: none — 3 metabolites — the templates hold two
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 39/39 row label(s) assigned, 40 linked by role; re-tagged parent→lumefantrine ×25, parent→desbutyllumefantrine ×8, parent→artemether ×9, parent→dihydroartemisinin ×7, parent→amodiaquine ×8, parent→desethylamodiaquine ×13
- molar mass: none of 6 PubChem candidate(s) is 'dihydroartemisinin' (LLM) — left in mass units
- molar mass: none of 1 PubChem candidate(s) is 'desethylamodiaquine' (LLM) — left in mass units
- molar mass: none found for 'dihydroartemisinin' — its concentrations stay mass-only
- molar mass: none found for 'desethylamodiaquine' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell bcp70301-tbl-0004:row3:col2 = '5.56 (5.00–6.25)'
- unparsed cell bcp70301-tbl-0004:row3:col4 = '58.5 (49.5–72.0)'
- unparsed cell bcp70301-tbl-0004:row5:col3 = '57.0 (12.3) /13.3 (19.1)'
- unparsed cell bcp70301-tbl-0004:row5:col4 = '56.9 (49.5–64.9)/ 13.3 (10.3–15.5)'
- unparsed cell bcp70301-tbl-0004:row5:col5 = '44.6/24.3'
- unparsed cell bcp70301-tbl-0004:row6:col2 = '4.35 (4.04–4.61)'
- unparsed cell bcp70301-tbl-0004:row7:col2 = '101 (88.0–121)'
- unparsed cell bcp70301-tbl-0004:row7:col4 = '89.3 (71.2–103)'
- unparsed cell bcp70301-tbl-0004:row8:col2 = '1.66 (1.45–1.83)'
- unparsed cell bcp70301-tbl-0004:row9:col2 = '311 (275–343)'
- unparsed cell bcp70301-tbl-0004:row10:col2 = '0.304 (0.270–0.344)'
- unparsed cell bcp70301-tbl-0004:row12:col2 = '721 (677–775)'
- unparsed cell bcp70301-tbl-0004:row12:col4 = '15.0 (11.5–18.7)'
- unparsed cell bcp70301-tbl-0004:row13:col2 = '8580 (7170‐10 500)'
- unparsed cell bcp70301-tbl-0004:row13:col4 = '97.5 (77.1–122)'
- unparsed cell bcp70301-tbl-0004:row14:col2 = '1050 (879–1200)'
- unparsed cell bcp70301-tbl-0004:row16:col2 = '0.177 (0.160–0.199)'
- unparsed cell bcp70301-tbl-0004:row18:col2 = '−11.6 (−18.0 to −5.6)'
- unparsed cell bcp70301-tbl-0004:row19:col2 = '−6.54 (−8.50 to −4.82)'
- unparsed cell bcp70301-tbl-0004:row20:col2 = '−12.4 (−16.2 to −8.43)'
- unparsed cell bcp70301-tbl-0004:row21:col2 = '−27.7 (−36.3 to −20.0)'
- unparsed cell bcp70301-tbl-0004:row22:col2 = '9.8 (8.1–11.7)'
- unparsed cell Ding_2026_table_2:row2:col2 = '1.55 (1.33–1.77)'
- unparsed cell Ding_2026_table_2:row2:col3 = 'IOV 54.4 (16.3)'
- unparsed cell Ding_2026_table_2:row2:col4 = '54.2 (46.5–65.7)'
- unparsed cell Ding_2026_table_2:row4:col3 = 'IOV 31.6 (22.9)'
- unparsed cell Ding_2026_table_2:row4:col4 = '31.7 (24.7–39.6)'
- unparsed cell Ding_2026_table_2:row5:col2 = '79.2 (71.4–86.6)'
- unparsed cell Ding_2026_table_2:row5:col4 = '21.5 (16.1–27.7)'
- unparsed cell Ding_2026_table_2:row6:col2 = '140 (122–161)'
- unparsed cell Ding_2026_table_2:row7:col2 = '21.5 (18.2–26.1)'
- unparsed cell Ding_2026_table_2:row8:col2 = '279 (203–446)'
- unparsed cell Ding_2026_table_2:row9:col2 = '0.546 (0.387–0.736)'
- unparsed cell Ding_2026_table_2:row10:col2 = '0.230 (0.198–0.265)'
- unparsed cell Ding_2026_table_2:row12:col2 = '254 (229–288)'
- unparsed cell Ding_2026_table_2:row12:col4 = '42.2 (33.4–52.0)'
- unparsed cell Ding_2026_table_2:row13:col2 = '64.3 (44.7–82.7)'
- unparsed cell Ding_2026_table_2:row14:col2 = '0.261 (0.226–0.306)'
- companion parameter table 2 transcribed (20 record(s), model stage 'final')
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
- LLM selected parameter table(s) 2, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `glm-5.3-flash` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.435 (20/46 fields) | 26 |

<details><summary>26 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['lumefantrine', 'desbutyllumefantrine', 'metabolism'], ['artemether', 'dihydroartemisinin', 'metabolism'], ['amodiaquine', 'desethylamodiaquine', 'metabolism']] | [['artemether', 'dihydroartemisinin', 'metabolism'], ['lumefantrine', 'desbutyllumefantrine', 'metabolism'], ['amodiaquine', 'desethylamodiaquine', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f aq].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f arm].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f deaq].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f dha].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f dlf].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f lf]` | not captured | 4.35 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f lf]` | 4.35 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 1.93 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 1.93 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean transit time]` | not captured | 5.43 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean transit time]` | 5.43 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[number of transit compartments]` | not captured | 5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[number of transit compartments]` | 5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f lf]` | not captured | 1.65 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f lf]` | 1.65 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_age]` | not captured | 10.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[time dependency on cl]` | not captured | 0.551 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc,/f lf]` | not captured | 101 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc,/f lf]` | 101 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp,/f lf]` | not captured | 311 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp,/f lf]` | 311 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f arm].parameter_id` | Q78 | Q82 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | artemether-lumefantrine plus amodiaquine | lumefantrine | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 25 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 17.7 | 16.094 | 0.9093 | 0.25 | reported t½β |
| C2_base_Q40 | fail | 1.0 | 79.3 | 79.3 | 0.05 | footnote reference category |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp70301-tbl-0004:row6:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp70301-tbl-0004:row12:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_2:row5:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_2:row12:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row4:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row10:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp70301-tbl-0004:row7:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp70301-tbl-0004:row13:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_2:row6:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_2:row13:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_3:row11:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row2:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp70301-tbl-0004:row8:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp70301-tbl-0004:row14:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_2:row7:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row6:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row12:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_2:row8:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_3:row15:col1'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row14:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp70301-tbl-0004:row9:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_3:row13:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 4.35 L/h | not captured | not captured | ['bcp70301-tbl-0004:row6:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 744 L/h | not captured | not captured | ['bcp70301-tbl-0004:row12:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 79.3 L/h | not captured | not captured | ['Ding_2026_table_2:row5:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 255 L/h | not captured | not captured | ['Ding_2026_table_2:row12:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.25e+03 L/h | not captured | not captured | ['Ding_2026_table_3:row4:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 32.2 L/h | not captured | not captured | ['Ding_2026_table_3:row10:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 101 L | not captured | not captured | ['bcp70301-tbl-0004:row7:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 8.53e+03 L | not captured | not captured | ['bcp70301-tbl-0004:row13:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 141 L | not captured | not captured | ['Ding_2026_table_2:row6:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 64.1 L | not captured | not captured | ['Ding_2026_table_2:row13:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 1.26e+03 L | not captured | not captured | ['Ding_2026_table_3:row11:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 311 L | not captured | not captured | ['bcp70301-tbl-0004:row9:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.64e+03 L | not captured | not captured | ['Ding_2026_table_3:row13:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | fail | 20 scholar param(s) emitted or defaulted | 12 covered | not captured | neither emitted nor in defaulted[]: ['V1/F', 'V2/F', 'V1/F', 'V1/F', 'V1/F', 'kabs', 'V1/F', 'V2/F'] |
| T3_shared_parameters | not captured | pass | 9 shared param(s) bound once | bound once | not captured | shared params must bind one value to both compartments |
| T3_topology_template | not captured | pass | general_linear → PK_General_Linear* | PK_General_Linear | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.94 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.85 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.82 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 12.7 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 17.7 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 187 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 139 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lumefantrine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ding_2026` / `Ding_2026::reference`)
- model: `../../../knowledgebase/drugs/drug_lumefantrine/models/modelica/Lumefantrine_Ding2026_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_lumefantrine/models/modelica/Lumefantrine_Ding2026_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_lumefantrine/Lumefantrine_Ding2026_reference/Lumefantrine_Ding2026_reference_modelica.zip" download>Lumefantrine_Ding2026_reference_modelica.zip</a> <span class="pk-size">(5.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_lumefantrine/Lumefantrine_Ding2026_reference/Lumefantrine_Ding2026_reference_matlab.zip" download>Lumefantrine_Ding2026_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_lumefantrine/Lumefantrine_Ding2026_reference/Lumefantrine_Ding2026_reference_matlab_simbio.zip" download>Lumefantrine_Ding2026_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_lumefantrine/Lumefantrine_Ding2026_reference/Lumefantrine_Ding2026_reference_sbml.zip" download>Lumefantrine_Ding2026_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_lumefantrine/Lumefantrine_Ding2026_reference/Lumefantrine_Ding2026_reference_cellml.zip" download>Lumefantrine_Ding2026_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:11 UTC</sub>
