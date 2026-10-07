<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;miltefosine&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/&quot;},{&quot;label&quot;:&quot;Dorlo_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Miltefosine_Dorlo2017_reference&quot;,&quot;label&quot;:&quot;Dorlo_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Miltefosine_Pali2020_reference&quot;,&quot;label&quot;:&quot;Pali\u0107_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/Miltefosine_Pali2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Miltefosine_Verrest2023_reference&quot;,&quot;label&quot;:&quot;Verrest_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/Miltefosine_Verrest2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# miltefosine — `Miltefosine_Dorlo2017_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Dorlo TPC et al., Visceral leishmaniasis relapse hazard i…, The Journal of antimicrobia… (2017)
  ·  DOI: [10.1093/jac/dkx283](https://doi.org/10.1093/jac/dkx283)

## Model component
<dbs-pgx drug="miltefosine" model-id="Miltefosine_Dorlo2017_reference" status="extracted" stale="false" population="Eastern African patients with visceral leishmaniasis" measured-compound="miltefosine" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F, Q/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Absorption rate, ka (/day) | `Q49` · kabs | 1.49 | /day | 1.724537037037037e-05 | [1] / [d] | 17.7 | llm_confirmed (0.6) | dkx283-T2:row2:col1 | — | 68.0 (24.5% RSE) |
| Clearance, CL/F (L/day)b | `Q27` · CL/F | 4.29 | L/day | 4.965277777777778e-08 | L/h | 3.22 | llm_corrected (0.6) | dkx283-T2:row3:col1 | — | not captured |
| Central volume of distribution, Vc/F (L)b | `Q63` · V1 | 51.7 | L | 0.0517 | L | 4.33 | boundary_compartment (0.9) | dkx283-T2:row4:col1 | — | not captured |
| Intercompartmental clearance, Q/F (L/day) | `Q69` · Q/F | 0.0266 | L/day | 3.0787037037037036e-10 | [l] / [d] | 40.7 | llm_corrected (0.6) | dkx283-T2:row5:col1 | — | not captured |
| Peripheral volume of distribution, Vp/F (L) | `Q64` · V2 | 2.25 | L | 0.0022500000000000003 | [l] | 14.1 | boundary_compartment (0.9) | dkx283-T2:row6:col1 | — | not captured |
| F (%, at end of treatment) | `Q40` · Fab | 100 | %, at end of treatment | not captured | not captured | not captured | exact (1.0) | dkx283-T2:row7:col1 | — | not captured |
| Reduction in F at baselined (% change from end of treatment) | `Q87` · Frel | -74.3 | % change from end of treatment | not captured | [%] · [changefromendoftreatment] | 4.68 | llm (0.6) | dkx283-T2:row10:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'Absorption rate, ka (/day)' routed out of structural estimates ('Between-subject variability (% RSEc)')
- table section iiv: 'Clearance, CL/F (L/day)b' routed out of structural estimates ('Between-subject variability (% RSEc)')
- table section iov: 'F (%, at end of treatment)' routed out of structural estimates ('Between-occasion variability (% RSEc)')
- table section iiv: 'Reduction in F at baselined (% change from end of treatment)' routed out of structural estimates ('Between-subject variability (% RSEc)')
- unit_dimension_unknown: '% RSEc' (CL/F)
- unit_dimension_unknown: '% RSEc' (V1)
- unit_dimension_unknown: '% change from end of treatment' (Frel)
- dropped PD-category row 'Baseline hazard of relapse (infections/year)' → Q342 (lambda_hazard, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['dkx283-T2:row12:col1'])
- dropped unlinked row (NIL): 'I50 miltefosine Time &gt; EC90 for monotherapy arm (day)' — extend the ontology if this is a real PK parameter (source ['dkx283-T2:row13:col1'])
- dropped unlinked row (NIL): 'I50 miltefosine Time &gt; EC90 for combination therapy arm (day)' — extend the ontology if this is a real PK parameter (source ['dkx283-T2:row14:col1'])
- dropped PD-category row 'Hazard reduction by liposomal amphotericin B (%)' → Q342 (lambda_hazard, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['dkx283-T2:row15:col1'])
- dropped value-less row: 'Monotherapy (28 days miltefosine)' (captured trailing unit '28 days miltefosine' for child rows)
- dropped value-less row: 'Initial half-life (days)' (captured trailing unit 'days' for child rows)
- dropped value-less row: 'Terminal half-life (days)' (captured trailing unit 'days' for child rows)
- dropped value-less row: 'AUC0–∞ (μg·day/mL)' (captured trailing unit 'μg·day/mL' for child rows)
- dropped value-less row: 'AUC0–28d (μg·day/mL)' (captured trailing unit 'μg·day/mL' for child rows)
- dropped value-less row: 'Time &gt; EC50 (days)' (captured trailing unit 'days' for child rows)
- dropped value-less row: 'Time &gt; EC90 (days)' (captured trailing unit 'days' for child rows)
- dropped value-less row: 'Combination therapy (10 days miltefosine)' (captured trailing unit '10 days miltefosine' for child rows)
- dropped value-less row: 'AUC0–10 (μg·day/mL)' (captured trailing unit 'μg·day/mL' for child rows)
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 53 (source ['dkx283-T2:footnote']); the table cell was unparseable — needs review
- covariate weight for allometric_exponent from footnote/prose kept as documentation only (['dkx283-T2:footnote'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 1000 (source ['dkx283-T2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['dkx283-T2:footnote']); the table cell was unparseable — needs review
- implicit units: 'Clearance, CL/F (L/day)b' → L/day (from the paper text: "Table 2 caption/parameter list states 'Clearance, CL/F (L/day)'.")
- implicit units: 'Central volume of distribution, Vc/F (L)b' → L (from the paper text: "Table 2 caption/parameter list states 'Central volume of distribution, Vc/F (L)'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=miltefosine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Dorlo_2017_table_3:row1:col1 = '7.05 (4.02–10.9)'
- unparsed cell Dorlo_2017_table_3:row1:col2 = '7.02 (4.02–8.45)'
- unparsed cell Dorlo_2017_table_3:row1:col3 = '7.18 (5.35–10.9)'
- unparsed cell Dorlo_2017_table_3:row2:col1 = '79.4 (49.9–103)'
- unparsed cell Dorlo_2017_table_3:row2:col2 = '77.8 (54.9–95.6)'
- unparsed cell Dorlo_2017_table_3:row2:col3 = '81.3 (49.9–103)'
- unparsed cell Dorlo_2017_table_3:row3:col1 = '713 (237–1482)'
- unparsed cell Dorlo_2017_table_3:row3:col2 = '545 (314–1080)'
- unparsed cell Dorlo_2017_table_3:row3:col3 = '812 (237–1482)'
- unparsed cell Dorlo_2017_table_3:row3:col5 = '0.006d'
- unparsed cell Dorlo_2017_table_3:row4:col1 = '423 (191–767)'
- unparsed cell Dorlo_2017_table_3:row4:col2 = '352 (232–593)'
- unparsed cell Dorlo_2017_table_3:row4:col3 = '497 (191–767)'
- unparsed cell Dorlo_2017_table_3:row4:col5 = '0.002d'
- unparsed cell Dorlo_2017_table_3:row5:col1 = '51.4 (30.5–77.1)'
- unparsed cell Dorlo_2017_table_3:row5:col2 = '48.3 (36.3–62.4)'
- unparsed cell Dorlo_2017_table_3:row5:col3 = '52.9 (30.5–77.1)'
- unparsed cell Dorlo_2017_table_3:row5:col5 = '0.024e'
- unparsed cell Dorlo_2017_table_3:row6:col1 = '27.0 (4.29–43.8)'
- unparsed cell Dorlo_2017_table_3:row6:col2 = '22.1 (11.0–34.2)'
- unparsed cell Dorlo_2017_table_3:row6:col3 = '27.8 (4.29–43.8)'
- unparsed cell Dorlo_2017_table_3:row6:col5 = '0.005d'
- unparsed cell Dorlo_2017_table_3:row10:col1 = '7.39 (5.41–10.3)'
- unparsed cell Dorlo_2017_table_3:row10:col2 = '6.76 (5.58–9.00)'
- unparsed cell Dorlo_2017_table_3:row10:col3 = '7.52 (5.41–10.3)'
- unparsed cell Dorlo_2017_table_3:row10:col5 = '0.031e'
- unparsed cell Dorlo_2017_table_3:row11:col1 = '78.5 (62.4–98.6)'
- unparsed cell Dorlo_2017_table_3:row11:col2 = '76.7 (66.0–98.6)'
- unparsed cell Dorlo_2017_table_3:row11:col3 = '79.7 (62.4–93.7)'
- unparsed cell Dorlo_2017_table_3:row12:col1 = '290 (70.1–496)'
- unparsed cell Dorlo_2017_table_3:row12:col2 = '197 (136–496)'
- unparsed cell Dorlo_2017_table_3:row12:col3 = '313 (70.1–483)'
- unparsed cell Dorlo_2017_table_3:row12:col5 = '0.004d'
- unparsed cell Dorlo_2017_table_3:row13:col1 = '87.9 (31.1–136)'
- unparsed cell Dorlo_2017_table_3:row13:col2 = '69.5 (31.1–129)'
- unparsed cell Dorlo_2017_table_3:row13:col3 = '95.9 (32.3–136)'
- unparsed cell Dorlo_2017_table_3:row13:col5 = '0.004d'
- unparsed cell Dorlo_2017_table_3:row14:col1 = '31.2 (14.2–46.9)'
- unparsed cell Dorlo_2017_table_3:row14:col2 = '28.5 (23.1–43.0)'
- unparsed cell Dorlo_2017_table_3:row14:col3 = '34.1 (14.2–46.9)'
- unparsed cell Dorlo_2017_table_3:row14:col5 = '0.013e'
- unparsed cell Dorlo_2017_table_3:row15:col1 = '8.98 (0–16.8)'
- unparsed cell Dorlo_2017_table_3:row15:col2 = '3.17 (0–16.8)'
- unparsed cell Dorlo_2017_table_3:row15:col3 = '9.93 (0–16.2)'
- unparsed cell Dorlo_2017_table_3:row15:col5 = '0.002d'
- companion parameter table 3 transcribed (21 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['dkx283-T2:row3:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['dkx283-T2:row2:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['dkx283-T2:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['dkx283-T2:row6:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['dkx283-T2:row5:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.179 L/h | not captured | not captured | ['dkx283-T2:row3:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 51.7 L | not captured | not captured | ['dkx283-T2:row4:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.25 L | not captured | not captured | ['dkx283-T2:row6:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_miltefosine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Dorlo_2017` / `Dorlo_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference/Miltefosine_Dorlo2017_reference_modelica.zip" download>Miltefosine_Dorlo2017_reference_modelica.zip</a> <span class="pk-size">(5.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference/Miltefosine_Dorlo2017_reference_fmi.zip" download>Miltefosine_Dorlo2017_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference/Miltefosine_Dorlo2017_reference_matlab.zip" download>Miltefosine_Dorlo2017_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference/Miltefosine_Dorlo2017_reference_matlab_simbio.zip" download>Miltefosine_Dorlo2017_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference/Miltefosine_Dorlo2017_reference_sbml.zip" download>Miltefosine_Dorlo2017_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference/Miltefosine_Dorlo2017_reference_cellml.zip" download>Miltefosine_Dorlo2017_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference/Miltefosine_Dorlo2017_reference.svg" alt="Miltefosine_Dorlo2017_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 150 mg, single dose, first-order absorption (ka 0.0621 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 150 mg oral (P01CX04) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference/Miltefosine_Dorlo2017_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference/Miltefosine_Dorlo2017_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C_enteral` · parameters `Miltefosine_Dorlo2017_reference_params.json` · controls `Miltefosine_Dorlo2017_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:51 UTC</sub>
