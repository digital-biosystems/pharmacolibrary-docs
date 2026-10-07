<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;selumetinib&quot;,&quot;href&quot;:&quot;drugs/drug_selumetinib/&quot;},{&quot;label&quot;:&quot;Patel_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Selumetinib_Patel2018_reference&quot;,&quot;label&quot;:&quot;Patel_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_selumetinib/Selumetinib_Patel2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Selumetinib_Tong2019_reference&quot;,&quot;label&quot;:&quot;Tong_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_selumetinib/Selumetinib_Tong2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# selumetinib — `Selumetinib_Patel2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Patel YT et al., Population Pharmacokinetics of Selumeti…, CPT: pharmacometrics & syst… (2017)
  ·  DOI: [10.1002/psp4.12175](https://doi.org/10.1002/psp4.12175)

## Model component
<dbs-pgx drug="selumetinib" model-id="Selumetinib_Patel2017_reference" status="rejected" stale="false" population="adults with advanced solid tumors and children with recurrent low-grade gliomas" measured-compound="selumetinib" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 12 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ1 (nmol/hr) | `Q49` · kabs | 0.622 | nmol/hr | not captured | [nM] / [h] | 0.062 | exact (1.0) | psp412175-tbl-0002:row2:col2, psp412175-tbl-0002:row2:col3 | — | not captured |
| θ2 (hr) | `Q83` · tlag | 0.319 | hr | 1148.4 | [h] | 0.0279 | exact (1.0) | psp412175-tbl-0002:row3:col2, psp412175-tbl-0002:row3:col3 | — | not captured |
| θ3 (L/hr) | `Q22` · CL | 13.5 | L/hr | 3.75e-06 | [l] / [h] | 0.662 | exact (1.0) | psp412175-tbl-0002:row4:col2, psp412175-tbl-0002:row4:col3 | — | not captured |
| θ4 (L) | `Q63` · V1 | 32.6 | L | 0.032600000000000004 | [l] | 1.78 | exact (1.0) | psp412175-tbl-0002:row5:col1, psp412175-tbl-0002:row5:col2, psp412175-tbl-0002:row5:col3 | — | not captured |
| θ5 (L) | `Q64` · V2 | 55 | L | 0.055 | [l] | 5.34 | exact (1.0) | psp412175-tbl-0002:row6:col1, psp412175-tbl-0002:row6:col2, psp412175-tbl-0002:row6:col3 | — | not captured |
| θ6 (L/hr) | `Q30` · Q | 8.2 | L/hr | 2.2777777777777776e-06 | [l] / [h] | 0.557 | exact (1.0) | psp412175-tbl-0002:row7:col2, psp412175-tbl-0002:row7:col3 | — | not captured |
| θ8 | `Q900` · equation variable | 0.117 | not captured | not captured | not captured | 0.0865 | llm (0.6) | psp412175-tbl-0002:row9:col2, psp412175-tbl-0002:row9:col3 | — | not captured |
| θ15 | `Q63` · V1 | 1.37 | L | 0.0013700000000000001 | [l] | 0.127 | exact (1.0) | psp412175-tbl-0002:row37:col2, psp412175-tbl-0002:row37:col3 | — | not captured |
| θ16 (L/hr) | `Q30` · Q | 240 | L/hr | 6.666666666666667e-05 | [l] / [h] | 20.4 | exact (1.0) | psp412175-tbl-0002:row38:col2, psp412175-tbl-0002:row38:col3 | — | not captured |
| θ17 (L/hr) | `Q22` · CL | 49.5 | L/hr | 1.375e-05 | [l] / [h] | 7.07 | exact (1.0) | psp412175-tbl-0002:row39:col2, psp412175-tbl-0002:row39:col3 | — | not captured |
| θ18 (L) | `Q64` · V2 | 413 | L | 0.41300000000000003 | [l] | 54.2 | exact (1.0) | psp412175-tbl-0002:row40:col1, psp412175-tbl-0002:row40:col2, psp412175-tbl-0002:row40:col3 | — | not captured |
| θ19 (L/hr) | `Q370` · CLfm | 0.274 | L/hr | 7.611111111111113e-08 | [l] / [h] | 0.0449 | exact (1.0) | psp412175-tbl-0002:row41:col2, psp412175-tbl-0002:row41:col3 | — | not captured |
| θ20 | `Q45` · fm | 0.908 | not captured | not captured | not captured | 0.163 | exact (1.0) | psp412175-tbl-0002:row42:col2, psp412175-tbl-0002:row42:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ωD1, IIV' routed out of structural estimates ('Interindividual variability for selumetinib')
- table section iiv: 'ωALAG1, IIV' routed out of structural estimates ('Interindividual variability for selumetinib')
- table section iiv: 'ωCL, IIV' routed out of structural estimates ('Interindividual variability for selumetinib')
- table section iiv: 'ωV2, IIV' routed out of structural estimates ('Interindividual variability for selumetinib')
- table section iiv: 'ωV3, IIV' routed out of structural estimates ('Interindividual variability for selumetinib')
- table section iiv: 'ωQ, IIV' routed out of structural estimates ('Interindividual variability for selumetinib')
- table section iiv: 'Corr(ηD1, ηALAG1)' routed out of structural estimates ('Interindividual variability for selumetinib')
- table section iiv: 'Corr(ηD1, ηV2)' routed out of structural estimates ('Interindividual variability for selumetinib')
- table section iiv: 'Corr(ηALAG1, ηV2)' routed out of structural estimates ('Interindividual variability for selumetinib')
- table section iiv: 'Corr(ηCL, ηV2)' routed out of structural estimates ('Interindividual variability for selumetinib')
- table section iiv: 'Corr(ηV3, ηQ)' routed out of structural estimates ('Interindividual variability for selumetinib')
- table section residual_error: 'σprop2' routed out of structural estimates ('Residual variability for selumetinib')
- table section residual_error: 'σadd2' routed out of structural estimates ('Residual variability for selumetinib')
- table section iiv: 'ωFM,IIV' routed out of structural estimates ('Interindividual variability for N‐desmethyl‐selumetinib')
- table section iiv: 'ωCLMeta, IIV' routed out of structural estimates ('Interindividual variability for N‐desmethyl‐selumetinib')
- table section iiv: 'Corr(ηFM, ηCLMeta)' routed out of structural estimates ('Interindividual variability for N‐desmethyl‐selumetinib')
- table section residual_error: 'σprop2' routed out of structural estimates ('Residual variability for N‐desmethyl‐selumetinib')
- table section residual_error: 'σadd2' routed out of structural estimates ('Residual variability for N‐desmethyl‐selumetinib')
- column 'parameter description' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'θ1 (nmol/hr)' → Q49 (unit '[substance] / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('θ7 (1/hr)', value '3.7') — already have one for this compound
- unit_dimension_mismatch: 'θ9 (nmol/hr)' → Q49 (unit '[substance] / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('θ9 (nmol/hr)', value '4.09') — already have one for this compound
- dropped duplicate Q83 ('θ10 (hr)', value '0.348') — already have one for this compound
- dropped duplicate Q900 ('θ11', value '0.923') — already have one for this compound
- dropped duplicate Q900 ('θ12', value '1.24') — already have one for this compound
- dropped duplicate Q900 ('θ13', value '0.327') — already have one for this compound
- dropped duplicate Q900 ('θ14', value '0.187') — already have one for this compound
- unit inherited for V1 (Q63): 'L' from a same-Q-code sibling (this row's label had no unit)
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (θ3 (L/hr)); Q63 (θ4 (L)); Q64 (θ5 (L)); Q30 (θ6 (L/hr)); Q63 (θ15); Q30 (θ16 (L/hr)); Q22 (θ17 (L/hr)); Q64 (θ18 (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=selumetinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 41/41 row label(s) assigned, 33 linked by role; re-tagged parent→N-desmethyl-selumetinib ×19

**Extraction notes:**
- unparsed cell psp412175-tbl-0002:row2:col1 = 'Duration of zero‐order drug input in the gut (D1)'
- unparsed cell psp412175-tbl-0002:row2:col4 = '0.612 (0.493–0.756)'
- unparsed cell psp412175-tbl-0002:row3:col1 = 'Lag‐time for drug appearance in the gut (ALAG1)'
- unparsed cell psp412175-tbl-0002:row3:col4 = '0.331 (0.293–0.376)'
- unparsed cell psp412175-tbl-0002:row4:col4 = '13.6 (12.7–14.7)'
- unparsed cell psp412175-tbl-0002:row5:col4 = '31.7 (16.9–37.9)'
- unparsed cell psp412175-tbl-0002:row6:col4 = '53.8 (43.7–67.0)'
- unparsed cell psp412175-tbl-0002:row7:col4 = '8.1 (6.3–10.4)'
- unparsed cell psp412175-tbl-0002:row8:col4 = '3.7 (1.1–5.1)'
- unparsed cell psp412175-tbl-0002:row9:col4 = '0.119 (0.024–0.209)'
- unparsed cell psp412175-tbl-0002:row10:col4 = '4.05 (2.46–4.57)'
- unparsed cell psp412175-tbl-0002:row11:col4 = '0.349 (0.303–0.475)'
- unparsed cell psp412175-tbl-0002:row12:col4 = '0.892 (0.615–1.251)'
- unparsed cell psp412175-tbl-0002:row13:col4 = '1.04 (0.22–2.08)'
- unparsed cell psp412175-tbl-0002:row14:col4 = '0.357 (0.137–0.596)'
- unparsed cell psp412175-tbl-0002:row15:col4 = '0.212 (0.110–0.316)'
- unparsed cell psp412175-tbl-0002:row17:col1 = 'Interindividual variance for D1'
- unparsed cell psp412175-tbl-0002:row17:col4 = '0.217 (0.084–0.495)'
- unparsed cell psp412175-tbl-0002:row18:col1 = 'Interindividual variance for ALAG1'
- unparsed cell psp412175-tbl-0002:row18:col4 = '0.168 (0.084–0.285)'
- unparsed cell psp412175-tbl-0002:row19:col4 = '0.076 (0.042–0.118)'
- unparsed cell psp412175-tbl-0002:row20:col1 = 'Interindividual variance for V2'
- unparsed cell psp412175-tbl-0002:row20:col4 = '0.173 (0.074–0.478)'
- unparsed cell psp412175-tbl-0002:row21:col1 = 'Interindividual variance for V3'
- unparsed cell psp412175-tbl-0002:row21:col4 = '0.340 (0.193–0.552)'
- unparsed cell psp412175-tbl-0002:row22:col4 = '0.279 (0.116–0.619)'
- unparsed cell psp412175-tbl-0002:row23:col1 = 'Correlation between ηD1 and ηALAG1'
- unparsed cell psp412175-tbl-0002:row24:col1 = 'Correlation between ηD1 and ηV2'
- unparsed cell psp412175-tbl-0002:row25:col1 = 'Correlation between ηALAG1 and ηV2'
- unparsed cell psp412175-tbl-0002:row26:col1 = 'Correlation between ηCL and ηV2'
- unparsed cell psp412175-tbl-0002:row27:col1 = 'Correlation between ηV3 and ηQ'
- unparsed cell psp412175-tbl-0002:row29:col1 = 'Inter‐occasion variance for D1'
- unparsed cell psp412175-tbl-0002:row29:col4 = '0.257 (0.109–0.566)'
- unparsed cell psp412175-tbl-0002:row30:col1 = 'Inter‐occasion variance for ALAG1'
- unparsed cell psp412175-tbl-0002:row30:col4 = '0.297 (0.196–0.409)'
- unparsed cell psp412175-tbl-0002:row31:col4 = '0.027 (0.013–0.042)'
- unparsed cell psp412175-tbl-0002:row32:col1 = 'Inter‐occasion variance for V2'
- unparsed cell psp412175-tbl-0002:row32:col4 = '0.235 (0.115–0.655)'
- unparsed cell psp412175-tbl-0002:row34:col4 = '0.119 (0.102–0.137)'
- unparsed cell psp412175-tbl-0002:row37:col4 = '1.37 (1.28–1.44)'
- unparsed cell psp412175-tbl-0002:row38:col4 = '246 (232–275)'
- unparsed cell psp412175-tbl-0002:row39:col4 = '50.0 (43.7–58.9)'
- unparsed cell psp412175-tbl-0002:row40:col4 = '413 (349–505)'
- unparsed cell psp412175-tbl-0002:row41:col4 = '0.274 (0.244–0.318)'
- unparsed cell psp412175-tbl-0002:row42:col4 = '0.909 (0.792–1.095)'
- unparsed cell psp412175-tbl-0002:row44:col4 = '0.215 (0.121–1.542)'
- unparsed cell psp412175-tbl-0002:row45:col4 = '0.226 (0.109–1.326)'
- unparsed cell psp412175-tbl-0002:row48:col4 = '0.138 (0.089–0.747)'
- unparsed cell psp412175-tbl-0002:row50:col4 = '0.294 (0.278–0.322)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412175-tbl-0002:row4:col2', 'psp412175-tbl-0002:row4:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412175-tbl-0002:row39:col2', 'psp412175-tbl-0002:row39:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412175-tbl-0002:row7:col2', 'psp412175-tbl-0002:row7:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412175-tbl-0002:row38:col2', 'psp412175-tbl-0002:row38:col3'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412175-tbl-0002:row41:col2', 'psp412175-tbl-0002:row41:col3'] |
| C5_dimension_Q49 | fail | [substance] / [time] | nmol/hr | not captured | not captured | ['psp412175-tbl-0002:row2:col2', 'psp412175-tbl-0002:row2:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412175-tbl-0002:row5:col1', 'psp412175-tbl-0002:row5:col2', 'psp412175-tbl-0002:row5:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412175-tbl-0002:row6:col1', 'psp412175-tbl-0002:row6:col2', 'psp412175-tbl-0002:row6:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412175-tbl-0002:row40:col1', 'psp412175-tbl-0002:row40:col2', 'psp412175-tbl-0002:row40:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['psp412175-tbl-0002:row3:col2', 'psp412175-tbl-0002:row3:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 13.5 | not captured | not captured | ['psp412175-tbl-0002:row4:col2', 'psp412175-tbl-0002:row4:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 13.5 L/h | not captured | not captured | ['psp412175-tbl-0002:row4:col2', 'psp412175-tbl-0002:row4:col3'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 49.5 L/h | not captured | not captured | ['psp412175-tbl-0002:row39:col2', 'psp412175-tbl-0002:row39:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 32.6 L | not captured | not captured | ['psp412175-tbl-0002:row5:col1', 'psp412175-tbl-0002:row5:col2', 'psp412175-tbl-0002:row5:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.37 L | not captured | not captured | ['psp412175-tbl-0002:row37:col2', 'psp412175-tbl-0002:row37:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 55 L | not captured | not captured | ['psp412175-tbl-0002:row6:col1', 'psp412175-tbl-0002:row6:col2', 'psp412175-tbl-0002:row6:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 413 L | not captured | not captured | ['psp412175-tbl-0002:row40:col1', 'psp412175-tbl-0002:row40:col2', 'psp412175-tbl-0002:row40:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_selumetinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Patel_2017` / `Patel_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:49 UTC</sub>
