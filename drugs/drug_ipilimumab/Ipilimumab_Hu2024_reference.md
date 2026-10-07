<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;ipilimumab&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/&quot;},{&quot;label&quot;:&quot;Hu_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ipilimumab_Hu2024_reference&quot;,&quot;label&quot;:&quot;Hu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ipilimumab_Leven2019_reference&quot;,&quot;label&quot;:&quot;Leven_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_Leven2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ipilimumab_Shang2022_reference&quot;,&quot;label&quot;:&quot;Shang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_Shang2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ipilimumab_van2019_reference&quot;,&quot;label&quot;:&quot;van_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_van2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ipilimumab — `Ipilimumab_Hu2024_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Hu Z et al., Nivolumab and ipilimumab population pha…, CPT: pharmacometrics & syst… (2024)
  ·  DOI: [10.1002/psp4.13098](https://doi.org/10.1002/psp4.13098)

## Model component
<dbs-pgx drug="ipilimumab" model-id="Ipilimumab_Hu2024_reference" status="extracted" stale="false" population="pediatric and adult oncology patients" measured-compound="ipilimumab" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 5 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL REF (mL/h) | `Q22` · CL | 13.5 | mL/h | 3.75e-09 | [ml] / [h] | 0.2.07 | llm_confirmed (0.6) | psp413098-tbl-0005:row2:col2, psp413098-tbl-0005:row2:col3 | — | 0.108 (0.00604% RSE) |
| VC REF (L) | `Q63` · V1 | 4.01 | L | 0.00401 | [l] | 0.0434 | llm_confirmed (0.6) | psp413098-tbl-0005:row3:col2, psp413098-tbl-0005:row3:col3, Hu_2024_table_4:row2:col2, Hu_2024_table_4:row2:col3 | — | 0.0751 (0.00764% RSE) |
| Q REF (mL/h) | `Q30` · Q | 35.9 | mL/h | 9.972222222222222e-09 | [ml] / [h] | 1.61 | llm (0.6) | psp413098-tbl-0005:row4:col2, psp413098-tbl-0005:row4:col3, Hu_2024_table_4:row3:col2, Hu_2024_table_4:row3:col3 | — | not captured |
| VP REF (L) | `Q64` · V2 | 2.77 | L | 0.00277 | [l] | 0.0701 | llm_confirmed (0.6) | psp413098-tbl-0005:row5:col2, psp413098-tbl-0005:row5:col3, Hu_2024_table_4:row4:col2, Hu_2024_table_4:row4:col3 | — | not captured |
| cl_sex | `Q900` · cl_sex | -0.0998 | not captured | not captured | not captured | 0.0184 | not captured (not captured) | Hu_2024_table_4:row7:col2, Hu_2024_table_4:row7:col3 | — | not captured |
| vc_sex | `Q900` · vc_sex | 0.0195 | not captured | not captured | not captured | 0.0186 | not captured (not captured) | Hu_2024_table_4:row12:col2, Hu_2024_table_4:row12:col3 | — | not captured |
| T50 (h) | `Q57` · t1/2z | 2670 | h | 9612000.0 | [h] | 442 | llm (0.6) | Hu_2024_table_4:row14:col2, Hu_2024_table_4:row14:col3 | — | not captured |
| theta_cl_egfr_power | `Q900` · theta_cl_egfr_power | 0.0982 | not captured | not captured | not captured | 0.0357 | not captured (not captured) | Hu_2024_table_4:row6:col2, Hu_2024_table_4:row6:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional' routed out of structural estimates ('Residual error')
- table section residual_error: 'Additive (μg/mL)' routed out of structural estimates ('Residual error')
- column 'parameter note' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'CL LBM' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0005:row6:col2', 'psp413098-tbl-0005:row6:col3'])
- dropped duplicate Q63 ('VC LBM', value '0.932') — already have one for this compound
- dropped unlinked row (NIL): 'CL CNST' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0005:row8:col2', 'psp413098-tbl-0005:row8:col3'])
- dropped duplicate Q22 ('CL OTH', value '0.00699') — already have one for this compound
- dropped duplicate Q22 ('CL PEDOTH', value '-0.462') — already have one for this compound
- dropped duplicate Q22 ('CL PEDCNST', value '-0.801') — already have one for this compound
- dropped duplicate Q22 ('CL PEDMEL', value '-0.347') — already have one for this compound
- dropped duplicate Q22 ('CL N1Q3', value '0.0417') — already have one for this compound
- dropped duplicate Q22 ('CL N3Q3', value '0.316') — already have one for this compound
- dropped duplicate Q63 ('VC PED', value '-0.277') — already have one for this compound
- dropped unlinked row (NIL): 'VC ADO' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0005:row16:col2', 'psp413098-tbl-0005:row16:col3', 'Hu_2024_table_4:row32:col2', 'Hu_2024_table_4:row32:col3'])
- dropped duplicate Q22 ('CL0 REF (mL/h)', value '9.66') — already have one for this compound
- dropped duplicate Q22 ('CL WTB', value '0.630') — already have one for this compound
- covariate level 'CL SEX' → Q900:cl_sex = -0.0998 (linear_fractional on Q22)
- dropped duplicate Q22 ('CL PS', value '0.166') — already have one for this compound
- dropped duplicate Q22 ('CL RAAA', value '0.0693') — already have one for this compound
- dropped duplicate Q22 ('CL RAAS', value '0.00333') — already have one for this compound
- covariate level 'VC SEX' → Q900:vc_sex = 0.0195 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'EMAX REF' — extend the ontology if this is a real PK parameter (source ['Hu_2024_table_4:row13:col2', 'Hu_2024_table_4:row13:col3'])
- dropped PD-category row 'HILL' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Hu_2024_table_4:row15:col2', 'Hu_2024_table_4:row15:col3'])
- dropped duplicate Q22 ('CL HL', value '-0.382') — already have one for this compound
- dropped duplicate Q22 ('CL GBM', value '-0.578') — already have one for this compound
- dropped duplicate Q22 ('CL PEDST', value '-0.580') — already have one for this compound
- dropped duplicate Q22 ('CL PEDHL', value '-0.411') — already have one for this compound
- dropped duplicate Q22 ('CL I1Q3', value '0.0973') — already have one for this compound
- dropped duplicate Q22 ('CL I3Q3', value '0.349') — already have one for this compound
- dropped duplicate Q22 ('CL BVCO', value '0.132') — already have one for this compound
- dropped unlinked row (NIL): 'EMAX PS' — extend the ontology if this is a real PK parameter (source ['Hu_2024_table_4:row25:col2', 'Hu_2024_table_4:row25:col3'])
- dropped PD-category row 'EMAX IPICO' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Hu_2024_table_4:row26:col2', 'Hu_2024_table_4:row26:col3'])
- dropped unlinked row (NIL): 'EMAX HL' — extend the ontology if this is a real PK parameter (source ['Hu_2024_table_4:row27:col2', 'Hu_2024_table_4:row27:col3'])
- dropped PD-category row 'EMAX OTH' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Hu_2024_table_4:row28:col2', 'Hu_2024_table_4:row28:col3'])
- dropped PD-category row 'EMAX PEDCNST' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Hu_2024_table_4:row29:col2', 'Hu_2024_table_4:row29:col3'])
- dropped duplicate Q22 ('CL ADOST', value '-0.223') — already have one for this compound
- NIL: refused to back-fill base 'IIV' from footnote/prose loose number 10.7 (source ['psp413098-tbl-0005:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'IIV' from footnote/prose loose number 22.2 (source ['psp413098-tbl-0005:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'shrinkage' from footnote/prose loose number 16.7 (source ['psp413098-tbl-0005:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 162 (source ['psp413098-tbl-0005:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ipilimumab
- molar mass: none found for 'ipilimumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell psp413098-tbl-0005:row2:col4 = '13.1 to 13.9'
- unparsed cell psp413098-tbl-0005:row3:col4 = '3.84 to 3.96'
- unparsed cell psp413098-tbl-0005:row4:col4 = '31.2 to 40.4'
- unparsed cell psp413098-tbl-0005:row5:col4 = '3.31 to 3.63'
- unparsed cell psp413098-tbl-0005:row6:col4 = '0.684 to 0.894'
- unparsed cell psp413098-tbl-0005:row7:col4 = '0.805 to 0.943'
- unparsed cell psp413098-tbl-0005:row8:col4 = '−1.12 to −0.199'
- unparsed cell psp413098-tbl-0005:row9:col4 = '−1.24 to −0.154'
- unparsed cell psp413098-tbl-0005:row10:col1 = 'Pediatric (&lt;18 years) other solid tumors on CL'
- unparsed cell psp413098-tbl-0005:row10:col4 = '−0.677 to −0.248'
- unparsed cell psp413098-tbl-0005:row11:col1 = 'Pediatric (&lt;18 years) CNS tumors on CL'
- unparsed cell psp413098-tbl-0005:row11:col4 = '−1.04 to −0.294'
- unparsed cell psp413098-tbl-0005:row12:col1 = 'Pediatric (&lt;18 years) melanoma on CL'
- unparsed cell psp413098-tbl-0005:row12:col4 = '−0.557 to −0.138'
- unparsed cell psp413098-tbl-0005:row13:col4 = '−0.00318 to 0.0866'
- unparsed cell psp413098-tbl-0005:row14:col4 = '−0.0390 to 0.670'
- unparsed cell psp413098-tbl-0005:row15:col1 = 'Pediatric (&lt;12 years) on VC'
- unparsed cell psp413098-tbl-0005:row15:col4 = '−0.404 to −0.188'
- unparsed cell psp413098-tbl-0005:row16:col1 = 'Adolescents (12–17) years on VC'
- unparsed cell psp413098-tbl-0005:row16:col4 = '−0.283 to −0.150'
- unparsed cell psp413098-tbl-0005:row18:col4 = '0.130 to 0.163'
- unparsed cell psp413098-tbl-0005:row19:col4 = '0.0390 to 0.0672'
- unparsed cell psp413098-tbl-0005:row20:col4 = '0.0178 to 0.0339'
- unparsed cell psp413098-tbl-0005:row22:col4 = '0.171 to 0.199'
- unparsed cell psp413098-tbl-0005:row23:col4 = '0.805 to 1.48'
- unparsed cell Hu_2024_table_4:row1:col4 = '8.98 to 10.3'
- unparsed cell Hu_2024_table_4:row2:col4 = '3.93 to 4.10'
- unparsed cell Hu_2024_table_4:row3:col4 = '32.8 to 39.2'
- unparsed cell Hu_2024_table_4:row4:col4 = '2.62 to 2.93'
- unparsed cell Hu_2024_table_4:row5:col4 = '0.566 to 0.693'
- unparsed cell Hu_2024_table_4:row6:col4 = '0.0206 to 0.174'
- unparsed cell Hu_2024_table_4:row7:col4 = '−0.135 to −0.0630'
- unparsed cell Hu_2024_table_4:row8:col4 = '0.128 to 0.207'
- unparsed cell Hu_2024_table_4:row9:col4 = '−0.0237 to 0.159'
- unparsed cell Hu_2024_table_4:row10:col4 = '−0.0693 to 0.0786'
- unparsed cell Hu_2024_table_4:row11:col4 = '0.872 to 1.00'
- unparsed cell Hu_2024_table_4:row12:col4 = '−0.0168 to 0.0578'
- unparsed cell Hu_2024_table_4:row13:col4 = '−0.385 to −0.184'
- unparsed cell Hu_2024_table_4:row14:col4 = '1890 to 3750'
- unparsed cell Hu_2024_table_4:row15:col4 = '1.69 to 3.71'
- unparsed cell Hu_2024_table_4:row16:col4 = '−0.447 to −0.321'
- unparsed cell Hu_2024_table_4:row17:col4 = '−0.643 to −0.493'
- unparsed cell Hu_2024_table_4:row18:col4 = '−0.0679 to 0.0789'
- unparsed cell Hu_2024_table_4:row19:col1 = 'Pediatric (&lt;12 years) solid tumors on CL'
- unparsed cell Hu_2024_table_4:row19:col4 = '−0.761 to −0.406'
- unparsed cell Hu_2024_table_4:row20:col1 = 'Pediatric (&lt;18 years) lymphoma on CL'
- unparsed cell Hu_2024_table_4:row20:col4 = '−0.554 to −0.227'
- unparsed cell Hu_2024_table_4:row21:col1 = 'Pediatric (&lt;18 years) CNS tumors on CL'
- unparsed cell Hu_2024_table_4:row21:col4 = '−0.930 to −0.654'
- unparsed cell Hu_2024_table_4:row22:col4 = '−0.00235 to 0.208'
- unparsed cell Hu_2024_table_4:row23:col4 = '0.278 to 0.416'
- unparsed cell Hu_2024_table_4:row24:col4 = '−0.0572 to 0.282'
- unparsed cell Hu_2024_table_4:row25:col4 = '−0.263 to −0.0708'
- unparsed cell Hu_2024_table_4:row26:col4 = '−0.361 to 0.0274'
- unparsed cell Hu_2024_table_4:row27:col4 = '0.0391 to 0.233'
- unparsed cell Hu_2024_table_4:row28:col4 = '−0.0210 to 0.263'
- unparsed cell Hu_2024_table_4:row29:col1 = 'Pediatric (&lt;18 years) CNS tumors on E max'
- unparsed cell Hu_2024_table_4:row29:col4 = '0.439 to 1.03'
- unparsed cell Hu_2024_table_4:row30:col1 = 'Adolescent (12–17 years) solid tumors on CL'
- unparsed cell Hu_2024_table_4:row30:col4 = '−0.393 to −0.0655'
- unparsed cell Hu_2024_table_4:row31:col1 = 'Pediatric (&lt;12 years) on VC'
- unparsed cell Hu_2024_table_4:row31:col4 = '−0.364 to −0.181'
- unparsed cell Hu_2024_table_4:row32:col1 = 'Adolescents (12–17 years) on VC'
- unparsed cell Hu_2024_table_4:row32:col4 = '−0.322 to −0.222'
- unparsed cell Hu_2024_table_4:row34:col4 = '0.0957 to 0.120'
- unparsed cell Hu_2024_table_4:row35:col4 = '0.0607 to 0.0904'
- unparsed cell Hu_2024_table_4:row36:col4 = '0.0816 to 0.262'
- unparsed cell Hu_2024_table_4:row37:col4 = '0.0163 to 0.0281'
- unparsed cell Hu_2024_table_4:row39:col4 = '0.191 to 0.206'
- companion parameter table 4 transcribed (76 record(s), model stage 'full')
- LLM selected parameter table(s) 4, 5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413098-tbl-0005:row2:col2', 'psp413098-tbl-0005:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413098-tbl-0005:row4:col2', 'psp413098-tbl-0005:row4:col3', 'Hu_2024_table_4:row3:col2', 'Hu_2024_table_4:row3:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Hu_2024_table_4:row14:col2', 'Hu_2024_table_4:row14:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413098-tbl-0005:row3:col2', 'psp413098-tbl-0005:row3:col3', 'Hu_2024_table_4:row2:col2', 'Hu_2024_table_4:row2:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413098-tbl-0005:row5:col2', 'psp413098-tbl-0005:row5:col3', 'Hu_2024_table_4:row4:col2', 'Hu_2024_table_4:row4:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 13.5 | not captured | not captured | ['psp413098-tbl-0005:row2:col2', 'psp413098-tbl-0005:row2:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0135 L/h | not captured | not captured | ['psp413098-tbl-0005:row2:col2', 'psp413098-tbl-0005:row2:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.01 L | not captured | not captured | ['psp413098-tbl-0005:row3:col2', 'psp413098-tbl-0005:row3:col3', 'Hu_2024_table_4:row2:col2', 'Hu_2024_table_4:row2:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.77 L | not captured | not captured | ['psp413098-tbl-0005:row5:col2', 'psp413098-tbl-0005:row5:col3', 'Hu_2024_table_4:row4:col2', 'Hu_2024_table_4:row4:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ipilimumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hu_2024` / `Hu_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_modelica.zip" download>Ipilimumab_Hu2024_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_fmi.zip" download>Ipilimumab_Hu2024_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_matlab.zip" download>Ipilimumab_Hu2024_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_matlab_simbio.zip" download>Ipilimumab_Hu2024_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_sbml.zip" download>Ipilimumab_Hu2024_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_cellml.zip" download>Ipilimumab_Hu2024_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference.svg" alt="Ipilimumab_Hu2024_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 7 mg infusion over 10 min, single dose. Doses in the paper: 7–700 mg.

<dbs-fmusim paramsurl="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C` · parameters `Ipilimumab_Hu2024_reference_params.json` · controls `Ipilimumab_Hu2024_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:50 UTC</sub>
