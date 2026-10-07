<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;dupilumab&quot;,&quot;href&quot;:&quot;drugs/drug_dupilumab/&quot;},{&quot;label&quot;:&quot;Zhang_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dupilumab_Kovalenko2020_population_estimates&quot;,&quot;label&quot;:&quot;Kovalenko_2020_population_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dupilumab/Dupilumab_Kovalenko2020_population_estimates.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dupilumab_Takechi2025_reference&quot;,&quot;label&quot;:&quot;Takechi_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dupilumab/Dupilumab_Takechi2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dupilumab — `Dupilumab_Zhang2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Zhang L et al., Population pharmacokinetic analysis of…, CPT: pharmacometrics & syst… (2021)
  ·  DOI: [10.1002/psp4.12667](https://doi.org/10.1002/psp4.12667)

## Model component
<dbs-pgx drug="dupilumab" model-id="Dupilumab_Zhang2021_reference" status="rejected" stale="false" population="adults and adolescents with asthma" measured-compound="dupilumab" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted, plus 6 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Typical value of K e (θ1, 1/day) | `Q47` · kel | 0.0418 | 1/day | 4.837962962962962e-07 | 1/h | 0.0419 | llm (0.6) | psp412667-tbl-0003:row1:col1, psp412667-tbl-0003:row1:col4 | — | not captured |
| Typical value of V 2 (θ2, L) | `Q64` · V2 | 2.76 | L | 0.00276 | L | 2.76 | llm (0.6) | psp412667-tbl-0003:row2:col1, psp412667-tbl-0003:row2:col4 | — | not captured |
| Typical value of K 23 (θ3, 1/day) | `Q304` · k31 | 0.0952 | 1/day | 1.1018518518518519e-06 | 1/h | 0.0955 | llm (0.6) | psp412667-tbl-0003:row3:col1, psp412667-tbl-0003:row3:col4 | — | not captured |
| Typical value of Vmax (θ5, mg/L/day) | `Q66` · Vmax | 1.39 | not captured | not captured | not captured | 1.39 | llm_confirmed (0.6) | psp412667-tbl-0003:row5:col1, psp412667-tbl-0003:row5:col4 | — | not captured |
| Typical value of K m (θ6, mg/L) | `Q1` · Km | 2.08 | mg/L | not captured | mg/L | 2.07 | llm (0.6) | psp412667-tbl-0003:row6:col1, psp412667-tbl-0003:row6:col4 | — | not captured |
| Typical value of K a (θ7, 1/day) | `Q95` · t1/2ka | 0.263 | not captured | not captured | not captured | 0.263 | llm (0.6) | psp412667-tbl-0003:row7:col1, psp412667-tbl-0003:row7:col4 | — | not captured |
| Typical value of F sc (θ8, 1/day) | `Q49` · kabs | 0.609 | not captured | not captured | not captured | 0.609 | llm (0.6) | psp412667-tbl-0003:row8:col1, psp412667-tbl-0003:row8:col4 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.222 | not captured | not captured | not captured | 0.214 | not captured (not captured) | psp412667-tbl-0003:row9:col1, psp412667-tbl-0003:row9:col4 | — | not captured |
| theta_kel_ada | `Q900` · theta_kel_ada | 0.191 | not captured | not captured | not captured | 0.194 | not captured (not captured) | psp412667-tbl-0003:row10:col1, psp412667-tbl-0003:row10:col4 | — | not captured |
| theta_q335_weight_power | `Q900` · theta_q335_weight_power | 0.217 | not captured | not captured | not captured | 0.222 | not captured (not captured) | psp412667-tbl-0003:row11:col1, psp412667-tbl-0003:row11:col4 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.667 | not captured | not captured | not captured | 0.665 | not captured (not captured) | psp412667-tbl-0003:row12:col1, psp412667-tbl-0003:row12:col4 | — | not captured |
| theta_v2_albumin_power | `Q900` · theta_v2_albumin_power | -0.484 | not captured | not captured | not captured | -0.482 | not captured (not captured) | psp412667-tbl-0003:row13:col1, psp412667-tbl-0003:row13:col4 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.224 | not captured | not captured | not captured | 0.222 | not captured (not captured) | psp412667-tbl-0003:row14:col1, psp412667-tbl-0003:row14:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q304 ('Typical value of K 32 (θ4, 1/day)', value '0.163') — already have one for this compound
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q335 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Typical value of K e (θ1, 1/day)' → 1/day (from the paper text: "The parameter list in the input explicitly includes the unit in the description: 'Typical value of K e (θ1, 1/day) = 0.0")
- implicit units: 'Typical value of V 2 (θ2, L)' → L (from the paper text: "The parameter list in the input explicitly includes the unit in the description: 'Typical value of V 2 (θ2, L) = 2.76'. ")
- implicit units: 'Typical value of K 23 (θ3, 1/day)' → 1/day (from the paper text: "The parameter list in the input explicitly includes the unit in the description: 'Typical value of K 23 (θ3, 1/day) = 0.")
- implicit units: 'Typical value of Vmax (θ5, mg/L/day)' — the LLM proposed 'mg/L/day', whose dimension does not fit Q66; left unset
- implicit units: 'Typical value of K m (θ6, mg/L)' → mg/L (from the paper text: "The parameter list in the input explicitly includes the unit in the description: 'Typical value of K m (θ6, mg/L) = 2.08")
- implicit units: 'Typical value of K a (θ7, 1/day)' — the LLM proposed '1/day', whose dimension does not fit Q95; left unset
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q64 (Typical value of V 2 (θ2, L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dupilumab
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- molar mass: none found for 'dupilumab' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp412667-tbl-0003:row1:col2 = '2.77%'
- unparsed cell psp412667-tbl-0003:row1:col3 = '[0.0395; 0.0442]'
- unparsed cell psp412667-tbl-0003:row1:col5 = '[0.0389; 0.0448]'
- unparsed cell psp412667-tbl-0003:row2:col2 = '2.43%'
- unparsed cell psp412667-tbl-0003:row2:col3 = '[2.63; 2.90]'
- unparsed cell psp412667-tbl-0003:row2:col5 = '[2.63; 2.91]'
- unparsed cell psp412667-tbl-0003:row3:col2 = '6.97%'
- unparsed cell psp412667-tbl-0003:row3:col3 = '[0.0819; 0.108]'
- unparsed cell psp412667-tbl-0003:row3:col5 = '[0.074; 0.119]'
- unparsed cell psp412667-tbl-0003:row4:col2 = '4.36%'
- unparsed cell psp412667-tbl-0003:row4:col3 = '[0.148; 0.177]'
- unparsed cell psp412667-tbl-0003:row4:col5 = '[0.142; 0.189]'
- unparsed cell psp412667-tbl-0003:row5:col2 = '3.80%'
- unparsed cell psp412667-tbl-0003:row5:col3 = '[1.28; 1.49]'
- unparsed cell psp412667-tbl-0003:row5:col5 = '[1.23; 1.56]'
- unparsed cell psp412667-tbl-0003:row6:col2 = '13.6%'
- unparsed cell psp412667-tbl-0003:row6:col3 = '[1.52; 2.65]'
- unparsed cell psp412667-tbl-0003:row6:col5 = '[1.49; 2.93]'
- unparsed cell psp412667-tbl-0003:row7:col2 = '3.80%'
- unparsed cell psp412667-tbl-0003:row7:col3 = '[0.243; 0.283]'
- unparsed cell psp412667-tbl-0003:row7:col5 = '[0.230; 0.287]'
- unparsed cell psp412667-tbl-0003:row8:col2 = '3.27%'
- unparsed cell psp412667-tbl-0003:row8:col3 = '[0.569; 0.649]'
- unparsed cell psp412667-tbl-0003:row8:col5 = '[0.567; 0.650]'
- unparsed cell psp412667-tbl-0003:row9:col2 = '22.5%'
- unparsed cell psp412667-tbl-0003:row9:col3 = '[0.122; 0.321]'
- unparsed cell psp412667-tbl-0003:row9:col5 = '[0.149; 0.273]'
- unparsed cell psp412667-tbl-0003:row10:col2 = '13.6%'
- unparsed cell psp412667-tbl-0003:row10:col3 = '[0.139; 0.243]'
- unparsed cell psp412667-tbl-0003:row10:col5 = '[0.112; 0.276]'
- unparsed cell psp412667-tbl-0003:row11:col2 = '12.1%'
- unparsed cell psp412667-tbl-0003:row11:col3 = '[0.164; 0.269]'
- unparsed cell psp412667-tbl-0003:row11:col5 = '[0.118; 0.354]'
- unparsed cell psp412667-tbl-0003:row12:col2 = '3.89%'
- unparsed cell psp412667-tbl-0003:row12:col3 = '[0.615; 0.719]'
- unparsed cell psp412667-tbl-0003:row12:col5 = '[0.606; 0.725]'
- unparsed cell psp412667-tbl-0003:row13:col2 = '12.3%'
- unparsed cell psp412667-tbl-0003:row13:col3 = '[−0.604; −0.365]'
- unparsed cell psp412667-tbl-0003:row13:col5 = '[−0.605; −0.352]'
- unparsed cell psp412667-tbl-0003:row14:col2 = '24.0%'
- unparsed cell psp412667-tbl-0003:row14:col3 = '[0.117; 0.332]'
- unparsed cell psp412667-tbl-0003:row14:col5 = '[0.075; 0.364]'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['psp412667-tbl-0003:row6:col1', 'psp412667-tbl-0003:row6:col4'] |
| C5_dimension_Q304 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412667-tbl-0003:row3:col1', 'psp412667-tbl-0003:row3:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412667-tbl-0003:row1:col1', 'psp412667-tbl-0003:row1:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412667-tbl-0003:row2:col1', 'psp412667-tbl-0003:row2:col4'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | not captured | not captured | not captured | ['psp412667-tbl-0003:row8:col1', 'psp412667-tbl-0003:row8:col4'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 | not captured | not captured | not captured | ['psp412667-tbl-0003:row5:col1', 'psp412667-tbl-0003:row5:col4'] |
| C5_unit_missing_Q95 | fail | [time] | not captured | not captured | not captured | ['psp412667-tbl-0003:row7:col1', 'psp412667-tbl-0003:row7:col4'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.76 L | not captured | not captured | ['psp412667-tbl-0003:row2:col1', 'psp412667-tbl-0003:row2:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_dupilumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhang_2021` / `Zhang_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:14 UTC</sub>
