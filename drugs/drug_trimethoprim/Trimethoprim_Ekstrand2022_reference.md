<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;trimethoprim&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/&quot;},{&quot;label&quot;:&quot;Ekstrand_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trimethoprim_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Trimethoprim_Tu1989_reference&quot;,&quot;label&quot;:&quot;Tu_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/Trimethoprim_Tu1989_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trimethoprim — `Trimethoprim_Ekstrand2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `trimethoprim and sulfadiazine`, measured `trimethoprim`.

## Citation
Ekstrand C et al., The disposition of trimethoprim and sul…, Veterinary medicine and sci… (2022)
  ·  DOI: [10.1002/vms3.763](https://doi.org/10.1002/vms3.763)

## Model component
<dbs-pgx drug="trimethoprim" model-id="Trimethoprim_Ekstrand2022_reference" status="rejected" stale="false" population="neonatal foals" measured-compound="trimethoprim" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 10 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vc | `Q63` · V1 | 1.38 | L/kg | 0.09659999999999999 | L | not captured | exact (1.0) | vms3763-tbl-0001:row2:col5, vms3763-tbl-0001:row2:col6 | — | not captured |
| Vt | `Q61` · V | 0.61 | L/kg | 0.042699999999999995 | L | not captured | llm (0.6) | vms3763-tbl-0001:row3:col5, vms3763-tbl-0001:row3:col6 | — | not captured |
| Cl | `Q22` · CL | 25.4 | L/kg/h | 0.0004938888888888889 | L/h | not captured | exact (1.0) | vms3763-tbl-0001:row4:col4, vms3763-tbl-0001:row4:col5, vms3763-tbl-0001:row4:col6, vms3763-tbl-0001:row4:col7 | — | not captured |
| Cld | `Q30` · Q | 3.83 | L/kg/h | 7.447222222222222e-05 | L/h | not captured | exact (1.0) | vms3763-tbl-0001:row5:col5, vms3763-tbl-0001:row5:col6 | — | not captured |
| α | `Q67` · λ1 | 9.13 | not captured | not captured | not captured | not captured | exact (1.0) | vms3763-tbl-0001:row7:col5 | — | not captured |
| β | `Q47` · kel | 0.16 | 1/h | 4.4444444444444447e-05 | 1/h | not captured | exact (1.0) | vms3763-tbl-0001:row8:col5 | — | not captured |
| t 1/2 α | `Q59` · t1/2α | 0.08 | h | 288.0 | h | not captured | space_fold (0.95) | vms3763-tbl-0001:row10:col5 | — | not captured |
| t 1/2 β | `Q60` · t1/2β | 4.2 | h | 15120.0 | h | not captured | space_fold (0.95) | vms3763-tbl-0001:row11:col5 | — | not captured |
| Vss | `Q65` · Vss | 1.99 | L/kg | 0.1393 | L | not captured | exact (1.0) | vms3763-tbl-0001:row13:col5 | — | not captured |
| 24 h fAUC | `Q19` · AUCt | 11.5 | μg·h/mL | not captured | μg·h/mL | not captured | llm (0.6) | vms3763-tbl-0001:row14:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q47 ('k 10', value '0.24') — already have one for this compound
- dropped duplicate Q63 ('t 1/2 c', value '2.9') — already have one for this compound
- implicit units: 'Vc' → L/kg (from the paper text: "Text states: 'The Vss for TMP in this study (1.99 L/kg) was consistent with 1.77 L/kg previously reported...' and 'The v")
- implicit units: 'Vt' → L/kg (from the paper text: "Text states: 'For SDZ, the Vss was 0.61 L/kg...'. Vt (V2) is a volume parameter consistent with Vss units reported in th")
- implicit units: 'Cl' → L/kg/h (from the paper text: "Text states: 'The value for Cl (0.33 L/kg·h) was, however, lower compared with 0.7 and 1.0 L/kg·h...'. Although the tabl")
- implicit units: 'Cld' → L/kg/h (from the popPK convention: 'Intercompartmental clearance (Cld/Q) is a clearance parameter. In population PK, clearances are typically reported in vo')
- implicit units: 'α' — the LLM proposed '1/h', whose dimension does not fit Q67; left unset
- implicit units: 'β' → 1/h (from the popPK convention: 'Terminal elimination rate constant (beta) is a first-order rate constant. Standard unit is 1/h. Value 0.16 1/h correspon')
- implicit units: 't 1/2 α' → h (from the popPK convention: 'Half-life is a time parameter. Standard unit is h. Value 0.08 h is consistent with alpha = 9.13 1/h (ln(2)/9.13 ≈ 0.076 ')
- implicit units: 't 1/2 β' → h (from the popPK convention: 'Half-life is a time parameter. Standard unit is h. Value 4.2 h is consistent with beta = 0.16 1/h (ln(2)/0.16 ≈ 4.33 h).')
- implicit units: 'Vss' → L/kg (from the paper text: "Text explicitly states: 'The Vss for TMP in this study (1.99 L/kg)...'")
- implicit units: '24 h fAUC' → μg·h/mL (from the paper text: "Text states: 'The 24 h fAUC for TMP was 11.5 μg·h/ml (8.2–14.6) (population mean [range]).'")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trimethoprim
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['vms3763-tbl-0001:row14:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['vms3763-tbl-0001:row4:col4', 'vms3763-tbl-0001:row4:col5', 'vms3763-tbl-0001:row4:col6', 'vms3763-tbl-0001:row4:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['vms3763-tbl-0001:row5:col5', 'vms3763-tbl-0001:row5:col6'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['vms3763-tbl-0001:row8:col5'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['vms3763-tbl-0001:row10:col5'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['vms3763-tbl-0001:row11:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['vms3763-tbl-0001:row3:col5', 'vms3763-tbl-0001:row3:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['vms3763-tbl-0001:row2:col5', 'vms3763-tbl-0001:row2:col6'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['vms3763-tbl-0001:row13:col5'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] | not captured | not captured | not captured | ['vms3763-tbl-0001:row7:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 25.4 | not captured | not captured | ['vms3763-tbl-0001:row4:col4', 'vms3763-tbl-0001:row4:col5', 'vms3763-tbl-0001:row4:col6', 'vms3763-tbl-0001:row4:col7'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.78e+03 L/h | not captured | not captured | ['vms3763-tbl-0001:row4:col4', 'vms3763-tbl-0001:row4:col5', 'vms3763-tbl-0001:row4:col6', 'vms3763-tbl-0001:row4:col7'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 42.7 L | not captured | not captured | ['vms3763-tbl-0001:row3:col5', 'vms3763-tbl-0001:row3:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 96.6 L | not captured | not captured | ['vms3763-tbl-0001:row2:col5', 'vms3763-tbl-0001:row2:col6'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 139 L | not captured | not captured | ['vms3763-tbl-0001:row13:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_trimethoprim/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ekstrand_2022` / `Ekstrand_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:15 UTC</sub>
