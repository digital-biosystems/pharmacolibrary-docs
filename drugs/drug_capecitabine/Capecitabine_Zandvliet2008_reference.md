<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;capecitabine&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/&quot;},{&quot;label&quot;:&quot;Zandvliet_2008 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Capecitabine_Panoilia2015_reference&quot;,&quot;label&quot;:&quot;Panoilia_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Panoilia2015_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Schmulenson2022_reference&quot;,&quot;label&quot;:&quot;Schmulenson_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Schmulenson2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Wen2021_reference&quot;,&quot;label&quot;:&quot;Wen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Wen2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Zuo2024_reference&quot;,&quot;label&quot;:&quot;Zuo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Zuo2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# capecitabine — `Capecitabine_Zandvliet2008_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `indisulam, capecitabine`, measured `indisulam`.

## Citation
Zandvliet AS et al., PK/PD model of indisulam and capecitabi…, Clinical pharmacology and t… (2008)
  ·  DOI: [10.1038/sj.clpt.6100344](https://doi.org/10.1038/sj.clpt.6100344)

## Model component
<dbs-pgx drug="capecitabine" model-id="Capecitabine_Zandvliet2008_reference" status="needs_review" stale="false" population="cancer patients" measured-compound="indisulam" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 10 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| MTT enzyme (h) | `Q81` · MTT | 230 | h | not captured | [h] | 0.68 | llm_confirmed (0.6) | tab_2:row2:col2, tab_2:row2:col3, tab_2:row2:col6 | — | 78 (None% RSE) |
| ka | `Q49` · kabs | 0.791 | 1/h | 0.00021972222222222223 | 1/h | 4.42 | exact (1.0) | Zandvliet_2008_table_1:row0:col2, Zandvliet_2008_table_1:row0:col3 | — | not captured |
| Absorption lag time (TLAG) | `Q83` · tlag | 0.0242 | h | 87.12 | h | 0.202 | exact (1.0) | Zandvliet_2008_table_1:row1:col2, Zandvliet_2008_table_1:row1:col3 | — | not captured |
| V1 | `Q63` · V1 | 112 | L | 0.112 | L | 316 | exact (1.0) | Zandvliet_2008_table_1:row2:col2, Zandvliet_2008_table_1:row2:col3 | — | not captured |
| CL10 | `Q22` · CL | 35.9 | L/h | 9.972222222222222e-06 | L/h | 187 | exact (1.0) | Zandvliet_2008_table_1:row3:col2, Zandvliet_2008_table_1:row3:col3 | — | not captured |
| CL12 | `Q22` · CL | 9.39 | L/h | 2.6083333333333335e-06 | L/h | 30.6 | exact (1.0) | Zandvliet_2008_table_1:row4:col2, Zandvliet_2008_table_1:row4:col3 | — | not captured |
| k23 | `Q305` · kfm | 3.71 | 1/h | 0.0010305555555555556 | 1/h | 13.1 | exact (1.0) | Zandvliet_2008_table_1:row5:col2, Zandvliet_2008_table_1:row5:col3 | — | not captured |
| Typical value, TV k34 a | `Q305` · kfm | 6.66 | 1/h | 0.00185 | 1/h | 22.2 | exact (1.0) | Zandvliet_2008_table_1:row7:col2, Zandvliet_2008_table_1:row7:col3 | — | not captured |
| k40 | `Q47` · kel | 27 | 1/h | 0.0075 | 1/h | 82.4 | exact (1.0) | Zandvliet_2008_table_1:row9:col2, Zandvliet_2008_table_1:row9:col3 | — | not captured |
| Interindividual variability k34 | `Q301` · k12 | 22 | not captured | not captured | not captured | 27 | llm_corrected (0.6) | Zandvliet_2008_table_1:row19:col2, Zandvliet_2008_table_1:row19:col3 | — | not captured |
| theta_q48_bilirubin | `Q900` · theta_q48_bilirubin | 0.178 | not captured | not captured | not captured | not captured | not captured (not captured) | Zandvliet_2008_table_1:row8:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'MTT enzyme (h)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'MTT (h)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'g' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Slope indisulam (l/mg)' routed out of structural estimates ('IIV (%)')
- dropped duplicate Q81 ('MTT (h)', value '93.7') — already have one for this compound
- dropped unlinked row (NIL): 'g' — extend the ontology if this is a real PK parameter (source ['tab_2:row5:col2', 'tab_2:row5:col3', 'tab_2:row5:col4', 'tab_2:row5:col6', 'tab_2:row5:col7', 'tab_2:row11:col2', 'tab_2:row11:col3', 'tab_2:row11:col4', 'tab_2:row11:col6', 'tab_2:row11:col7'])
- dropped PD-category row 'Slope indisulam (l/mg)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_2:row6:col1', 'tab_2:row6:col2', 'tab_2:row6:col3', 'tab_2:row6:col4', 'tab_2:row6:col6', 'tab_2:row12:col1', 'tab_2:row12:col2', 'tab_2:row12:col3', 'tab_2:row12:col4', 'tab_2:row12:col6'])
- dropped unlinked row (NIL): '0' — extend the ontology if this is a real PK parameter (source ['tab_2:row16:col1', 'tab_2:row16:col2', 'tab_2:row16:col3'])
- unit_dimension_unknown: 'TLAG' (tlag)
- routed 'Interindividual variability ka' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped duplicate Q83 ('Interindividual variability TLAG', value '78') — already have one for this compound
- routed 'Interindividual variability V1' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Interindividual variability CL10' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Interindividual variability k23' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Interindividual variability k40' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- covariate effect for Q48 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'ka' → 1/h (from the popPK convention: 'First-order absorption rate constant (ka) is conventionally expressed in 1/h. The value 0.791 corresponds to a half-life')
- implicit units: 'Absorption lag time (TLAG)' → h (from the popPK convention: 'Lag time (TLAG) is a duration and is conventionally expressed in hours (h). The value 0.0242 h (approx 1.45 min) is cons')
- implicit units: 'V1' → L (from the popPK convention: 'Volume of distribution (V1) is conventionally expressed in liters (L) in population PK models (often normalized to weigh')
- implicit units: 'CL10' → L/h (from the popPK convention: 'Clearance (CL10) is conventionally expressed in L/h in population PK. The value 35.9 L/h is consistent with typical huma')
- implicit units: 'CL12' → L/h (from the popPK convention: 'Intercompartmental clearance (CL12) is conventionally expressed in L/h. The value 9.39 is consistent with this magnitude')
- implicit units: 'k23' → 1/h (from the popPK convention: 'First-order rate constant for metabolite formation (k23) is conventionally expressed in 1/h. The value 3.71 is consisten')
- implicit units: 'Typical value, TV k34 a' → 1/h (from the popPK convention: 'First-order rate constant for metabolite formation (k34) is conventionally expressed in 1/h. The value 6.66 is consisten')
- implicit units: 'k40' → 1/h (from the popPK convention: 'Elimination rate constant (k40) is conventionally expressed in 1/h. The value 27 indicates a very fast elimination, whic')
- implicit units: 'Interindividual variability k34' — the LLM proposed '%', whose dimension does not fit Q301; left unset
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (V1); Q22 (CL10); Q22 (CL12)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=indisulam
- topology: 3 first-order transfer(s) across 7 compounds → general_linear
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=pbpk; 26/26 row label(s) assigned, 16 linked by role; re-tagged parent→indisulam ×37, parent→capecitabine ×18, parent→5'-DFCR ×4, parent→5'-DFUR ×6, parent→5-fluorouracil ×11
- molar mass: none of 1 PubChem candidate(s) is 'indisulam' (LLM) — left in mass units
- molar mass: none found for 'indisulam' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'indisulam', not capecitabine — the review values are the parent's

**Extraction notes:**
- unparsed cell tab_2:row16:col4 = '1 2'
- unparsed cell Zandvliet_2008_table_1:row0:col1 = '( h À1 )'
- unparsed cell Zandvliet_2008_table_1:row5:col1 = '(h À1 )'
- unparsed cell Zandvliet_2008_table_1:row7:col1 = '(h À1 )'
- unparsed cell Zandvliet_2008_table_1:row8:col2 = 'À0.181'
- unparsed cell Zandvliet_2008_table_1:row9:col1 = '(h À1 )'
- companion parameter table 1 transcribed (39 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Zandvliet_2008_table_1:row3:col2', 'Zandvliet_2008_table_1:row3:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Zandvliet_2008_table_1:row4:col2', 'Zandvliet_2008_table_1:row4:col3'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Zandvliet_2008_table_1:row5:col2', 'Zandvliet_2008_table_1:row5:col3'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Zandvliet_2008_table_1:row7:col2', 'Zandvliet_2008_table_1:row7:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Zandvliet_2008_table_1:row9:col2', 'Zandvliet_2008_table_1:row9:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Zandvliet_2008_table_1:row0:col2', 'Zandvliet_2008_table_1:row0:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Zandvliet_2008_table_1:row2:col2', 'Zandvliet_2008_table_1:row2:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Zandvliet_2008_table_1:row1:col2', 'Zandvliet_2008_table_1:row1:col3'] |
| C5_unit_missing_Q301 | fail | 1 / [time] | not captured | not captured | not captured | ['Zandvliet_2008_table_1:row19:col2', 'Zandvliet_2008_table_1:row19:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 35.9 | not captured | not captured | ['Zandvliet_2008_table_1:row3:col2', 'Zandvliet_2008_table_1:row3:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 35.9 L/h | not captured | not captured | ['Zandvliet_2008_table_1:row3:col2', 'Zandvliet_2008_table_1:row3:col3'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.39 L/h | not captured | not captured | ['Zandvliet_2008_table_1:row4:col2', 'Zandvliet_2008_table_1:row4:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 112 L | not captured | not captured | ['Zandvliet_2008_table_1:row2:col2', 'Zandvliet_2008_table_1:row2:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_capecitabine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zandvliet_2008` / `Zandvliet_2008::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:28 UTC</sub>
