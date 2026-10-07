<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02C&quot;,&quot;href&quot;:&quot;atc/G02C.md&quot;},{&quot;label&quot;:&quot;elinzanetant&quot;,&quot;href&quot;:&quot;drugs/drug_elinzanetant/&quot;},{&quot;label&quot;:&quot;Willmann_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# elinzanetant — `Elinzanetant_Willmann2024_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Willmann S et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2024)
  ·  DOI: [10.1002/psp4.13226](https://doi.org/10.1002/psp4.13226)

## Model component
<dbs-pgx drug="elinzanetant" model-id="Elinzanetant_Willmann2024_reference" status="extracted" stale="false" population="healthy adults and women with vasomotor symptoms" measured-compound="elinzanetant" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** 4-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameters:** 20 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLpop | `Q22` · CL | 7.26 | L/h | 2.0166666666666667e-06 | L/h | 4.94 | llm (0.6) | psp413226-tbl-0002:row2:col2, psp413226-tbl-0002:row2:col3, psp413226-tbl-0002:row2:col4, psp413226-tbl-0002:row2:col5 | — | not captured |
| Vcpop | `Q61` · V | 23.7 | L | 0.0237 | L | 4.64 | llm (0.6) | psp413226-tbl-0002:row3:col2, psp413226-tbl-0002:row3:col3, psp413226-tbl-0002:row3:col4, psp413226-tbl-0002:row3:col5 | — | not captured |
| Vp | `Q64` · V2 | 168 | L | 0.168 | L | 2.00 | exact (1.0) | psp413226-tbl-0002:row4:col2, psp413226-tbl-0002:row4:col3, psp413226-tbl-0002:row4:col4, psp413226-tbl-0002:row4:col5 | — | not captured |
| Q | `Q30` · Q | 6.57 | L/h | 1.825e-06 | L/h | 2.56 | exact (1.0) | psp413226-tbl-0002:row5:col2, psp413226-tbl-0002:row5:col3, psp413226-tbl-0002:row5:col4, psp413226-tbl-0002:row5:col5 | — | not captured |
| KaREF d | `Q49` · kabs | 2.37 | 1/h | 0.0006583333333333334 | 1/h | 7.22 | llm (0.6) | psp413226-tbl-0002:row6:col2, psp413226-tbl-0002:row6:col3, psp413226-tbl-0002:row6:col4, psp413226-tbl-0002:row6:col5 | — | not captured |
| ALAGREF d | `Q83` · tlag | 0.292 | h | 1051.2 | h | 0.163 | exact (1.0) | psp413226-tbl-0002:row7:col2, psp413226-tbl-0002:row7:col3, psp413226-tbl-0002:row7:col4, psp413226-tbl-0002:row7:col5 | — | not captured |
| FREF e | `Q44` · fe | 0.367 | THETA | not captured | [theta] | 1.78 | llm (0.6) | psp413226-tbl-0002:row8:col2, psp413226-tbl-0002:row8:col3, psp413226-tbl-0002:row8:col4, psp413226-tbl-0002:row8:col5 | — | not captured |
| ALFED2 | `Q900` · equation variable | 0.545 | THETA | not captured | [theta] | 2.91 | llm (0.6) | psp413226-tbl-0002:row11:col2, psp413226-tbl-0002:row11:col3, psp413226-tbl-0002:row11:col4, psp413226-tbl-0002:row11:col5, psp413226-tbl-0002:row11:col6 | — | not captured |
| CL3034pop | `Q22` · CL | 4.14 | L/h | 1.1499999999999998e-06 | L/h | 5.44 | exact (1.0) | psp413226-tbl-0002:row14:col2, psp413226-tbl-0002:row14:col3, psp413226-tbl-0002:row14:col4, psp413226-tbl-0002:row14:col5, psp413226-tbl-0002:row14:col6 | — | not captured |
| Vc3034 | `Q63` · V1 | 3.58 | L | 0.0035800000000000003 | L | 7.76 | exact (1.0) | psp413226-tbl-0002:row15:col2, psp413226-tbl-0002:row15:col3, psp413226-tbl-0002:row15:col4, psp413226-tbl-0002:row15:col5, psp413226-tbl-0002:row15:col6 | — | not captured |
| Vp3034 | `Q64` · V2 | 15.6 | L | 0.0156 | L | 4.56 | exact (1.0) | psp413226-tbl-0002:row16:col2, psp413226-tbl-0002:row16:col3, psp413226-tbl-0002:row16:col4, psp413226-tbl-0002:row16:col5, psp413226-tbl-0002:row16:col6 | — | not captured |
| Q3034 | `Q30` · Q | 3.65 | L/h | 1.013888888888889e-06 | L/h | 9.05 | exact (1.0) | psp413226-tbl-0002:row17:col2, psp413226-tbl-0002:row17:col3, psp413226-tbl-0002:row17:col4, psp413226-tbl-0002:row17:col5, psp413226-tbl-0002:row17:col6 | — | not captured |
| Vmax3034 | `Q900` · equation variable | 24.1 | THETA | not captured | [theta] | 10.8 | llm (0.6) | psp413226-tbl-0002:row18:col2, psp413226-tbl-0002:row18:col3, psp413226-tbl-0002:row18:col4, psp413226-tbl-0002:row18:col5, psp413226-tbl-0002:row18:col6 | — | not captured |
| CL27pop | `Q22` · CL | 4.11 | L/h | 1.1416666666666668e-06 | L/h | 5.85 | exact (1.0) | psp413226-tbl-0002:row20:col2, psp413226-tbl-0002:row20:col3, psp413226-tbl-0002:row20:col4, psp413226-tbl-0002:row20:col5 | — | not captured |
| Vc27 | `Q63` · V1 | 1.85 | L | 0.00185 | L | 7.84 | exact (1.0) | psp413226-tbl-0002:row21:col2, psp413226-tbl-0002:row21:col3, psp413226-tbl-0002:row21:col4, psp413226-tbl-0002:row21:col5 | — | not captured |
| Vp27 | `Q64` · V2 | 40.4 | L | 0.0404 | L | 5.83 | exact (1.0) | psp413226-tbl-0002:row22:col2, psp413226-tbl-0002:row22:col3, psp413226-tbl-0002:row22:col4, psp413226-tbl-0002:row22:col5 | — | not captured |
| Q27 | `Q30` · Q | 4.45 | L/h | 1.2361111111111111e-06 | L/h | 5.77 | exact (1.0) | psp413226-tbl-0002:row23:col2, psp413226-tbl-0002:row23:col3, psp413226-tbl-0002:row23:col4, psp413226-tbl-0002:row23:col5 | — | not captured |
| Vmax27 | `Q900` · equation variable | 42.6 | THETA | not captured | [theta] | 12.6 | llm (0.6) | psp413226-tbl-0002:row24:col2, psp413226-tbl-0002:row24:col3, psp413226-tbl-0002:row24:col4, psp413226-tbl-0002:row24:col5 | — | not captured |
| Km27 | `Q1` · Km | 17.7 | ng/mL | not captured | ng/mL | 11.0 | llm (0.6) | psp413226-tbl-0002:row25:col2, psp413226-tbl-0002:row25:col3, psp413226-tbl-0002:row25:col4, psp413226-tbl-0002:row25:col5 | — | not captured |
| CL1821pop | `Q22` · CL | 9.10 | L/h | 2.5277777777777778e-06 | L/h | 6.14 | exact (1.0) | psp413226-tbl-0002:row26:col2, psp413226-tbl-0002:row26:col3, psp413226-tbl-0002:row26:col4, psp413226-tbl-0002:row26:col5, psp413226-tbl-0002:row26:col6 | — | not captured |
| Vc1821 | `Q61` · V | 0.636 | L | 0.0006360000000000001 | L | 9.86 | exact (1.0) | psp413226-tbl-0002:row27:col2, psp413226-tbl-0002:row27:col3, psp413226-tbl-0002:row27:col4, psp413226-tbl-0002:row27:col5, psp413226-tbl-0002:row27:col6 | — | not captured |
| Km18/21 | `Q1` · Km | 45.8 | ng/mL | not captured | ng/mL | 13.0 | llm (0.6) | psp413226-tbl-0002:row29:col2, psp413226-tbl-0002:row29:col3, psp413226-tbl-0002:row29:col4, psp413226-tbl-0002:row29:col5, psp413226-tbl-0002:row29:col6 | — | not captured |
| λ | `Q47` · kel | 2.07 | 1/h | 0.000575 | 1/h | 9.51 | exact (1.0) | psp413226-tbl-0002:row33:col2, psp413226-tbl-0002:row33:col3, psp413226-tbl-0002:row33:col4, psp413226-tbl-0002:row33:col5 | — | not captured |
| θSHIFT | `Q900` · θSHIFT | 8.05 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'EPS(1,1) σ2' routed out of structural estimates ('Residual error (SIGMA)')
- table section residual_error: 'CV i' routed out of structural estimates ('Residual error (SIGMA)')
- table section residual_error: 'EPS(2,2) σ2' routed out of structural estimates ('Residual error (SIGMA)')
- table section residual_error: 'EPS(3,3) σ2' routed out of structural estimates ('Residual error (SIGMA)')
- table section residual_error: 'EPS(4,4) σ2' routed out of structural estimates ('Residual error (SIGMA)')
- table section residual_error: 'EPS(5,5) σ2' routed out of structural estimates ('Residual error (SIGMA)')
- column 'description' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'THETA' (CL)
- unit_dimension_unknown: 'THETA' (V)
- unit_dimension_unknown: 'THETA' (kabs)
- linked 'ALAGREF d' as 'Tlag' → Q83 (tlag) for  — compound marker removed
- unit_dimension_unknown: 'THETA' (tlag)
- unit_dimension_unknown: 'THETA' (fe)
- routed 'KaFED2' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'KaFORM3' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- unit_dimension_unknown: 'THETA' (equation variable)
- dropped duplicate Q900 ('ALFORM3', value '0.548') — already have one for this compound
- dropped unlinked row (NIL): 'FFED2' — extend the ontology if this is a real PK parameter (source ['psp413226-tbl-0002:row13:col2', 'psp413226-tbl-0002:row13:col3', 'psp413226-tbl-0002:row13:col4', 'psp413226-tbl-0002:row13:col5', 'psp413226-tbl-0002:row13:col6'])
- unit_dimension_unknown: 'THETA' (V1)
- unit_dimension_unknown: 'THETA' (V2)
- unit_dimension_unknown: 'THETA' (Q)
- dropped duplicate Q900 ('Km3034', value '7.87') — already have one for this compound
- dropped unlinked row (NIL): 'Vmax18/21' — extend the ontology if this is a real PK parameter (source ['psp413226-tbl-0002:row28:col2', 'psp413226-tbl-0002:row28:col3', 'psp413226-tbl-0002:row28:col4', 'psp413226-tbl-0002:row28:col5', 'psp413226-tbl-0002:row28:col6'])
- unit_dimension_unknown: 'THETA' (Km)
- dropped unlinked row (NIL): 'AMP' — extend the ontology if this is a real PK parameter (source ['psp413226-tbl-0002:row30:col2', 'psp413226-tbl-0002:row30:col3', 'psp413226-tbl-0002:row30:col4', 'psp413226-tbl-0002:row30:col5'])
- dropped unlinked row (NIL): 'AMPMET' — extend the ontology if this is a real PK parameter (source ['psp413226-tbl-0002:row31:col2', 'psp413226-tbl-0002:row31:col3', 'psp413226-tbl-0002:row31:col4', 'psp413226-tbl-0002:row31:col5'])
- kept covariate coefficient θSHIFT=8.05 (covariate SHIFT) — not an ontology parameter
- unit_dimension_unknown: 'THETA' (kel)
- dropped unlinked row (NIL): 'CV g' — extend the ontology if this is a real PK parameter (source ['psp413226-tbl-0002:row36:col2', 'psp413226-tbl-0002:row36:col4', 'psp413226-tbl-0002:row36:col5', 'psp413226-tbl-0002:row39:col2', 'psp413226-tbl-0002:row39:col4', 'psp413226-tbl-0002:row39:col5', 'psp413226-tbl-0002:row42:col2', 'psp413226-tbl-0002:row42:col4', 'psp413226-tbl-0002:row42:col5', 'psp413226-tbl-0002:row45:col2', 'psp413226-tbl-0002:row45:col4', 'psp413226-tbl-0002:row45:col5', 'psp413226-tbl-0002:row48:col2', 'psp413226-tbl-0002:row48:col4', 'psp413226-tbl-0002:row48:col5'])
- dropped diagnostic row 'Shrinkage' → Q318 (shrinkage) — reported statistic, not a parameter
- routed 'ETA(2,1) ω' → Q313 (IOV) to iov — variability estimate, not a structural parameter
- routed 'ETA(3,1) ω' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ETA(3,2) ω' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- unit inherited for V2 (Q64): 'THETA' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for Q (Q30): 'THETA' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for V1 (Q63): 'THETA' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for Km (Q1): 'THETA' from a same-Q-code sibling (this row's label had no unit)
- implicit units: 'CLpop' → L/h (from the paper text: "The text states: 'The clearance of elinzanetant was estimated to be 7.26 L/h' and 'The average clearance of elinzanetant")
- implicit units: 'Vcpop' → L (from the paper text: "The text states: 'The clearance of elinzanetant was estimated to be 7.26 L/h and the central and peripheral distribution")
- implicit units: 'Vp' → L (from the paper text: "The text states: 'The clearance of elinzanetant was estimated to be 7.26 L/h and the central and peripheral distribution")
- implicit units: 'Q' → L/h (from the popPK convention: 'Q (intercompartmental clearance) is dimensionally analogous to clearance; the paper does not specify the unit, but L/h i')
- implicit units: 'KaREF d' → 1/h (from the popPK convention: 'Ka (absorption rate constant) is a first-order rate constant; the paper does not specify the unit, but 1/h is the standa')
- implicit units: 'ALAGREF d' → h (from the popPK convention: 'ALAG (absorption lag time) is a time parameter; the paper does not specify the unit for this specific parameter, but h i')
- implicit units: 'CL3034pop' → L/h (from the popPK convention: 'CL (total clearance) is a clearance parameter; the paper does not specify the unit for this metabolite, but L/h is the s')
- implicit units: 'Vc3034' → L (from the popPK convention: 'Vc (central volume of distribution) is a volume parameter; the paper does not specify the unit for this metabolite, but ')
- implicit units: 'Vp3034' → L (from the popPK convention: 'Vp (peripheral volume of distribution) is a volume parameter; the paper does not specify the unit for this metabolite, b')
- implicit units: 'Q3034' → L/h (from the popPK convention: 'Q (intercompartmental clearance) is dimensionally analogous to clearance; the paper does not specify the unit, but L/h i')
- implicit units: 'CL27pop' → L/h (from the popPK convention: 'CL (total clearance) is a clearance parameter; the paper does not specify the unit for this metabolite, but L/h is the s')
- implicit units: 'Vc27' → L (from the popPK convention: 'Vc (central volume of distribution) is a volume parameter; the paper does not specify the unit for this metabolite, but ')
- implicit units: 'Vp27' → L (from the popPK convention: 'Vp (peripheral volume of distribution) is a volume parameter; the paper does not specify the unit for this metabolite, b')
- implicit units: 'Q27' → L/h (from the popPK convention: 'Q (intercompartmental clearance) is dimensionally analogous to clearance; the paper does not specify the unit, but L/h i')
- implicit units: 'Km27' → ng/mL (from the popPK convention: 'Km is the Michaelis constant representing substrate concentration; the paper does not specify the unit, but ng/mL is a c')
- implicit units: 'CL1821pop' → L/h (from the popPK convention: 'CL (total clearance) is a clearance parameter; the paper does not specify the unit for this metabolite, but L/h is the s')
- implicit units: 'Vc1821' → L (from the popPK convention: 'Vc (central volume of distribution) is a volume parameter; the paper does not specify the unit for this metabolite, but ')
- implicit units: 'Km18/21' → ng/mL (from the popPK convention: 'Km is the Michaelis constant representing substrate concentration; the paper does not specify the unit, but ng/mL is a c')
- implicit units: 'λ' → 1/h (from the popPK convention: 'λ (elimination rate constant) is a first-order rate constant; the paper does not specify the unit, but 1/h is the standa')
- metabolite volume: 'Vc1821' Q63→Q61 for M18/21 — it is 1-compartment, so its central volume is its only volume
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CLpop); Q61 (Vcpop); Q64 (Vp); Q30 (Q); Q22 (CL3034pop); Q63 (Vc3034); Q64 (Vp3034); Q30 (Q3034)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=elinzanetant
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 4 first-order transfer(s) across 4 compounds → general_linear
- template fit: none — 3 metabolites — the templates hold two
- status held at route_to_review — not promoted
- row roles: 5 per-group rows of elinzanetant covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 48/48 row label(s) assigned, 70 linked by role; re-tagged parent→M30/34 ×30, parent→M27 ×24, parent→M18/21 ×20
- molar mass: no plausible PubChem entry for 'M30/34' ('Elinzanetant M30/34 metabolite') — left in mass units
- molar mass: no plausible PubChem entry for 'M18/21' ('Elinzanetant M18/21 metabolite') — left in mass units
- molar mass: none of 1 PubChem candidate(s) is 'M27' (LLM) — left in mass units
- molar mass: none found for 'M27' — its concentrations stay mass-only
- molar mass: none found for 'M30/34' — its concentrations stay mass-only
- molar mass: none found for 'M18/21' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell psp413226-tbl-0002:row6:col1 = 'h−1'
- unparsed cell psp413226-tbl-0002:row20:col6 = 'M27 clearance in typical subject at mid‐point of circadian variation'
- unparsed cell psp413226-tbl-0002:row21:col6 = 'M27 volume of central compartment'
- unparsed cell psp413226-tbl-0002:row22:col6 = 'M27 volume of peripheral compartment'
- unparsed cell psp413226-tbl-0002:row23:col6 = 'M27 inter‐compartmental clearance'
- unparsed cell psp413226-tbl-0002:row24:col6 = 'M27 Vmax at mid‐point of circadian variation'
- unparsed cell psp413226-tbl-0002:row25:col6 = 'M27 Km'
- unparsed cell psp413226-tbl-0002:row38:col6 = 'Variance of exponential IIV on metabolite clearances (CL27, CL3034, and CL1821)'
- unparsed cell psp413226-tbl-0002:row56:col6 = 'Variance of additive residual error for log‐transformed [13C5]‐elinzanetant observations'
- unparsed cell psp413226-tbl-0002:row60:col6 = 'Variance of additive residual error for log‐transformed M27 observations'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 20 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['psp413226-tbl-0002:row25:col2', 'psp413226-tbl-0002:row25:col3', 'psp413226-tbl-0002:row25:col4', 'psp413226-tbl-0002:row25:col5'] |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['psp413226-tbl-0002:row29:col2', 'psp413226-tbl-0002:row29:col3', 'psp413226-tbl-0002:row29:col4', 'psp413226-tbl-0002:row29:col5', 'psp413226-tbl-0002:row29:col6'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413226-tbl-0002:row2:col2', 'psp413226-tbl-0002:row2:col3', 'psp413226-tbl-0002:row2:col4', 'psp413226-tbl-0002:row2:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413226-tbl-0002:row14:col2', 'psp413226-tbl-0002:row14:col3', 'psp413226-tbl-0002:row14:col4', 'psp413226-tbl-0002:row14:col5', 'psp413226-tbl-0002:row14:col6'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413226-tbl-0002:row20:col2', 'psp413226-tbl-0002:row20:col3', 'psp413226-tbl-0002:row20:col4', 'psp413226-tbl-0002:row20:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413226-tbl-0002:row26:col2', 'psp413226-tbl-0002:row26:col3', 'psp413226-tbl-0002:row26:col4', 'psp413226-tbl-0002:row26:col5', 'psp413226-tbl-0002:row26:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413226-tbl-0002:row5:col2', 'psp413226-tbl-0002:row5:col3', 'psp413226-tbl-0002:row5:col4', 'psp413226-tbl-0002:row5:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413226-tbl-0002:row17:col2', 'psp413226-tbl-0002:row17:col3', 'psp413226-tbl-0002:row17:col4', 'psp413226-tbl-0002:row17:col5', 'psp413226-tbl-0002:row17:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413226-tbl-0002:row23:col2', 'psp413226-tbl-0002:row23:col3', 'psp413226-tbl-0002:row23:col4', 'psp413226-tbl-0002:row23:col5'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['psp413226-tbl-0002:row33:col2', 'psp413226-tbl-0002:row33:col3', 'psp413226-tbl-0002:row33:col4', 'psp413226-tbl-0002:row33:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp413226-tbl-0002:row6:col2', 'psp413226-tbl-0002:row6:col3', 'psp413226-tbl-0002:row6:col4', 'psp413226-tbl-0002:row6:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413226-tbl-0002:row3:col2', 'psp413226-tbl-0002:row3:col3', 'psp413226-tbl-0002:row3:col4', 'psp413226-tbl-0002:row3:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413226-tbl-0002:row27:col2', 'psp413226-tbl-0002:row27:col3', 'psp413226-tbl-0002:row27:col4', 'psp413226-tbl-0002:row27:col5', 'psp413226-tbl-0002:row27:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413226-tbl-0002:row15:col2', 'psp413226-tbl-0002:row15:col3', 'psp413226-tbl-0002:row15:col4', 'psp413226-tbl-0002:row15:col5', 'psp413226-tbl-0002:row15:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413226-tbl-0002:row21:col2', 'psp413226-tbl-0002:row21:col3', 'psp413226-tbl-0002:row21:col4', 'psp413226-tbl-0002:row21:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413226-tbl-0002:row4:col2', 'psp413226-tbl-0002:row4:col3', 'psp413226-tbl-0002:row4:col4', 'psp413226-tbl-0002:row4:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413226-tbl-0002:row16:col2', 'psp413226-tbl-0002:row16:col3', 'psp413226-tbl-0002:row16:col4', 'psp413226-tbl-0002:row16:col5', 'psp413226-tbl-0002:row16:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413226-tbl-0002:row22:col2', 'psp413226-tbl-0002:row22:col3', 'psp413226-tbl-0002:row22:col4', 'psp413226-tbl-0002:row22:col5'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['psp413226-tbl-0002:row7:col2', 'psp413226-tbl-0002:row7:col3', 'psp413226-tbl-0002:row7:col4', 'psp413226-tbl-0002:row7:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.26 | not captured | not captured | ['psp413226-tbl-0002:row2:col2', 'psp413226-tbl-0002:row2:col3', 'psp413226-tbl-0002:row2:col4', 'psp413226-tbl-0002:row2:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.26 L/h | not captured | not captured | ['psp413226-tbl-0002:row2:col2', 'psp413226-tbl-0002:row2:col3', 'psp413226-tbl-0002:row2:col4', 'psp413226-tbl-0002:row2:col5'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.14 L/h | not captured | not captured | ['psp413226-tbl-0002:row14:col2', 'psp413226-tbl-0002:row14:col3', 'psp413226-tbl-0002:row14:col4', 'psp413226-tbl-0002:row14:col5', 'psp413226-tbl-0002:row14:col6'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.11 L/h | not captured | not captured | ['psp413226-tbl-0002:row20:col2', 'psp413226-tbl-0002:row20:col3', 'psp413226-tbl-0002:row20:col4', 'psp413226-tbl-0002:row20:col5'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.1 L/h | not captured | not captured | ['psp413226-tbl-0002:row26:col2', 'psp413226-tbl-0002:row26:col3', 'psp413226-tbl-0002:row26:col4', 'psp413226-tbl-0002:row26:col5', 'psp413226-tbl-0002:row26:col6'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 23.7 L | not captured | not captured | ['psp413226-tbl-0002:row3:col2', 'psp413226-tbl-0002:row3:col3', 'psp413226-tbl-0002:row3:col4', 'psp413226-tbl-0002:row3:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 0.636 L | not captured | not captured | ['psp413226-tbl-0002:row27:col2', 'psp413226-tbl-0002:row27:col3', 'psp413226-tbl-0002:row27:col4', 'psp413226-tbl-0002:row27:col5', 'psp413226-tbl-0002:row27:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.58 L | not captured | not captured | ['psp413226-tbl-0002:row15:col2', 'psp413226-tbl-0002:row15:col3', 'psp413226-tbl-0002:row15:col4', 'psp413226-tbl-0002:row15:col5', 'psp413226-tbl-0002:row15:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.85 L | not captured | not captured | ['psp413226-tbl-0002:row21:col2', 'psp413226-tbl-0002:row21:col3', 'psp413226-tbl-0002:row21:col4', 'psp413226-tbl-0002:row21:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 168 L | not captured | not captured | ['psp413226-tbl-0002:row4:col2', 'psp413226-tbl-0002:row4:col3', 'psp413226-tbl-0002:row4:col4', 'psp413226-tbl-0002:row4:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 15.6 L | not captured | not captured | ['psp413226-tbl-0002:row16:col2', 'psp413226-tbl-0002:row16:col3', 'psp413226-tbl-0002:row16:col4', 'psp413226-tbl-0002:row16:col5', 'psp413226-tbl-0002:row16:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 40.4 L | not captured | not captured | ['psp413226-tbl-0002:row22:col2', 'psp413226-tbl-0002:row22:col3', 'psp413226-tbl-0002:row22:col4', 'psp413226-tbl-0002:row22:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_elinzanetant/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Willmann_2024` / `Willmann_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_elinzanetant/Elinzanetant_Willmann2024_reference/Elinzanetant_Willmann2024_reference_modelica.zip" download>Elinzanetant_Willmann2024_reference_modelica.zip</a> <span class="pk-size">(5.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_elinzanetant/Elinzanetant_Willmann2024_reference/Elinzanetant_Willmann2024_reference_matlab.zip" download>Elinzanetant_Willmann2024_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_elinzanetant/Elinzanetant_Willmann2024_reference/Elinzanetant_Willmann2024_reference_matlab_simbio.zip" download>Elinzanetant_Willmann2024_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_elinzanetant/Elinzanetant_Willmann2024_reference/Elinzanetant_Willmann2024_reference_sbml.zip" download>Elinzanetant_Willmann2024_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_elinzanetant/Elinzanetant_Willmann2024_reference/Elinzanetant_Willmann2024_reference_cellml.zip" download>Elinzanetant_Willmann2024_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:15 UTC</sub>
