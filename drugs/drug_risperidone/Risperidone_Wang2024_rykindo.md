<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;risperidone&quot;,&quot;href&quot;:&quot;drugs/drug_risperidone/&quot;},{&quot;label&quot;:&quot;Wang_2024 \u00b7 rykindo&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Risperidone_Kozielska2012_reference&quot;,&quot;label&quot;:&quot;Kozielska_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risperidone/Risperidone_Kozielska2012_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# risperidone — `Risperidone_Wang2024_rykindo`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `risperidone (Rykindo/Consta LAI)`, measured `active moiety (risperidone + 9-OH-risperidone)`.

## Citation
Wang W et al., Population Pharmacokinetic Analysis to…, Neurology and therapy (2024)
  ·  DOI: [10.1007/s40120-024-00578-w](https://doi.org/10.1007/s40120-024-00578-w)

## Model component
<dbs-pgx drug="risperidone" model-id="Risperidone_Wang2024_rykindo" status="rejected" stale="false" population="adults with schizophrenia or schizoaffective disorder" measured-compound="active moiety (risperidone + 9-OH-risperidone)" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 7 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KA①_CT-1S01 and CT-USA-104 (1/d) | `Q49` · kabs | 0.288 | 1/d | 3.333333333333333e-06 | 1/h | not captured | exact (1.0) | Tab2:row2:col1, Tab2:row2:col4 | — | not captured |
| CL②_male_CT-1S01 (l/d) | `Q22` · CL | 186.7 | l/d | 2.1608796296296297e-06 | [l] / [d] | not captured | exact (1.0) | Tab2:row4:col1, Tab2:row4:col4 | — | not captured |
| D2 (d) | `Q99` · Q2 | 0.764 | d | not captured | [d] | not captured | llm (0.6) | Tab2:row8:col1, Tab2:row8:col4 | — | not captured |
| F2 | `Q87` · Frel | 0.148 | not captured | not captured | not captured | not captured | llm (0.6) | Tab2:row9:col1, Tab2:row9:col4 | — | not captured |
| ALAG3 (d) | `Q83` · tlag | 3.47 | d | 299808.0 | [d] | not captured | exact (1.0) | Tab2:row11:col1, Tab2:row11:col4 | — | not captured |
| D3 (d) | `Q310` · D1 | 2.18 | d | 188352.0 | [d] | not captured | llm (0.6) | Tab2:row13:col1, Tab2:row13:col4 | — | not captured |
| F1 | `Q40` · Fab | 0.430 | not captured | not captured | not captured | not captured | exact (1.0) | Tab2:row17:col1, Tab2:row17:col4 | — | not captured |
| theta_q31_category | `Q900` · theta_q31_category | 0.675 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row6:col1, Tab2:row6:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'D2 (d)' → Q99 (unit '[time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q49 ('K32 (1/d)', value '0.118') — already have one for this compound
- dropped unlinked row (NIL): 'Middle release fraction, F3' — extend the ontology if this is a real PK parameter (source ['Tab2:row14:col1'])
- dropped duplicate Q83 ('ALAG1 (d)', value '13.3') — already have one for this compound
- routed 'add' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- routed 'prop' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped value-less row: '①KA_CT-USA-104 for Consta'
- dropped value-less row: '②CL for male and female in Consta in CT-USA-104'
- covariate effect for Q31 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'KA①_CT-1S01 and CT-USA-104 (1/d)' → 1/d (from the paper text: "Table 2 lists the parameter as 'KA①_CT-1S01 and CT-USA-104 (1/d) = 0.288', explicitly stating the unit 1/d for the absor")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=active moiety (risperidone + 9-OH-risperidone)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- population split: 'rykindo' subgroup of Wang_2024 (paper reports 2 populations: consta, rykindo)
- row roles: per-genotype parameters — typical value from the reference group: KA①_CT-1S01 and CT-USA-104 (1/d), CL②_male_CT-1S01 (l/d)
- row roles (LLM): model_class=compartmental; 17/17 row label(s) assigned, 21 linked by role; re-tagged parent→active moiety (risperidone + 9-OH-risperidone) ×43
- molar mass: no plausible PubChem entry for 'active moiety (risperidone + 9-OH-risperidone)' ('no full name in the paper') — left in mass units
- molar mass: none found for 'active moiety (risperidone + 9-OH-risperidone)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab2:row2:col2 = '27%'
- unparsed cell Tab2:row2:col3 = '7.84%'
- unparsed cell Tab2:row3:col4 = '26%'
- unparsed cell Tab2:row3:col5 = '14.4%'
- unparsed cell Tab2:row4:col2 = '35%'
- unparsed cell Tab2:row4:col3 = '5.38%'
- unparsed cell Tab2:row4:col6 = '34%'
- unparsed cell Tab2:row4:col7 = '0.82%'
- unparsed cell Tab2:row8:col2 = '52%'
- unparsed cell Tab2:row8:col3 = '19.8%'
- unparsed cell Tab2:row8:col6 = 'Fix to 0'
- unparsed cell Tab2:row9:col2 = '57%'
- unparsed cell Tab2:row9:col3 = '14.7%'
- unparsed cell Tab2:row9:col7 = '11.2%'
- unparsed cell Tab2:row11:col2 = 'Fix to 0'
- unparsed cell Tab2:row11:col6 = 'Fix to 0'
- unparsed cell Tab2:row12:col2 = 'Fix to 0'
- unparsed cell Tab2:row12:col6 = 'Fix to 0'
- unparsed cell Tab2:row13:col2 = 'Fix to 0'
- unparsed cell Tab2:row13:col6 = 'Fix to 0'
- unparsed cell Tab2:row16:col2 = 'Fix to 0'
- unparsed cell Tab2:row16:col7 = '21.6%'
- unparsed cell Tab2:row17:col2 = '52%'
- unparsed cell Tab2:row17:col3 = '12.0%'
- unparsed cell Tab2:row17:col7 = '11.4%'
- unparsed cell Tab2:row19:col3 = '8.15%'
- unparsed cell Tab2:row20:col1 = '26%'
- unparsed cell Tab2:row20:col4 = '32%'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col4'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['Tab2:row13:col1', 'Tab2:row13:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab2:row11:col1', 'Tab2:row11:col4'] |
| C5_dimension_Q99 | fail | [time] | d | not captured | not captured | ['Tab2:row8:col1', 'Tab2:row8:col4'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 186.7 | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.78 L/h | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_risperidone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2024` / `Wang_2024::rykindo`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 17:10 UTC</sub>
