<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M05B&quot;,&quot;href&quot;:&quot;atc/M05B.md&quot;},{&quot;label&quot;:&quot;denosumab&quot;,&quot;href&quot;:&quot;drugs/drug_denosumab/&quot;},{&quot;label&quot;:&quot;S\u00e1nchez-Vidaurre_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Denosumab_Ding2023_reference&quot;,&quot;label&quot;:&quot;Ding_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_denosumab/Denosumab_Ding2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Denosumab_Sutjandra2011_reference&quot;,&quot;label&quot;:&quot;Sutjandra_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_denosumab/Denosumab_Sutjandra2011_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# denosumab — `Denosumab_SnchezVidaurre2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Sánchez-Vidaurre S et al., Population PK Modeling of Denosumab Bio…, Pharmaceutics (2025)
  ·  DOI: [10.3390/pharmaceutics17091146](https://doi.org/10.3390/pharmaceutics17091146)

## Model component
<dbs-pgx drug="denosumab" model-id="Denosumab_SnchezVidaurre2025_reference" status="rejected" stale="false" population="healthy adult men and postmenopausal women with osteoporosis" measured-compound="denosumab" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KA (1/day) | `Q49` · kabs | 0.406 | 1/day | 4.699074074074074e-06 | 1/h | not captured | exact (1.0) | pharmaceutics-17-01146-t004:row2:col1, pharmaceutics-17-01146-t004:row2:col3, pharmaceutics-17-01146-t004:row2:col4, Sánchez-Vidaurre_2025_table_3:row1:col1, Sánchez-Vidaurre_2025_table_3:row1:col3, Sánchez-Vidaurre_2025_table_3:row1:col4 | — | not captured |
| V/F (L) | `Q76` · V/F | 9.33 | L | 0.00933 | [l] | not captured | exact (1.0) | pharmaceutics-17-01146-t004:row3:col1, pharmaceutics-17-01146-t004:row3:col3, pharmaceutics-17-01146-t004:row3:col4, Sánchez-Vidaurre_2025_table_3:row2:col1, Sánchez-Vidaurre_2025_table_3:row2:col3, Sánchez-Vidaurre_2025_table_3:row2:col4 | — | not captured |
| CL/F (L/day) | `Q27` · CL/F | 0.123 | L/day | 1.4236111111111112e-09 | [l] / [d] | not captured | exact (1.0) | pharmaceutics-17-01146-t004:row4:col1, pharmaceutics-17-01146-t004:row4:col3, pharmaceutics-17-01146-t004:row4:col4, Sánchez-Vidaurre_2025_table_3:row3:col1, Sánchez-Vidaurre_2025_table_3:row3:col3, Sánchez-Vidaurre_2025_table_3:row3:col4 | — | not captured |
| BW~CL | `Q22` · CL | 1.32 | L/day/kg | 1.0694444444444445e-06 | L/h | not captured | llm_confirmed (0.6) | pharmaceutics-17-01146-t004:row5:col1, pharmaceutics-17-01146-t004:row5:col3, pharmaceutics-17-01146-t004:row5:col4, Sánchez-Vidaurre_2025_table_3:row4:col1, Sánchez-Vidaurre_2025_table_3:row4:col3, Sánchez-Vidaurre_2025_table_3:row4:col4 | — | not captured |
| Km (ng/mL) | `Q1` · Km | 0.124 | ng/mL | not captured | [ng] / [ml] | not captured | exact (1.0) | pharmaceutics-17-01146-t004:row6:col1, pharmaceutics-17-01146-t004:row6:col3, pharmaceutics-17-01146-t004:row6:col4, Sánchez-Vidaurre_2025_table_3:row5:col1, Sánchez-Vidaurre_2025_table_3:row5:col3, Sánchez-Vidaurre_2025_table_3:row5:col4 | — | not captured |
| Vm (ng/day) | `Q66` · Vmax | 0.139 | ng/day | not captured | [ng] / [d] | not captured | special_case (0.95) | pharmaceutics-17-01146-t004:row7:col1, pharmaceutics-17-01146-t004:row7:col3, pharmaceutics-17-01146-t004:row7:col4, Sánchez-Vidaurre_2025_table_3:row6:col1, Sánchez-Vidaurre_2025_table_3:row6:col3, Sánchez-Vidaurre_2025_table_3:row6:col4 | — | not captured |
| Study~V | `Q61` · V | -0.534 | not captured | not captured | not captured | not captured | llm (0.6) | pharmaceutics-17-01146-t004:row8:col1, pharmaceutics-17-01146-t004:row8:col3, pharmaceutics-17-01146-t004:row8:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Vm (ng/day)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- implicit units: 'KA (1/day)' → 1/day (from the paper text: "The provided parameter description line explicitly states 'KA (1/day) = 0.406'.")
- implicit units: 'BW~CL' → L/day/kg (from the paper text: "The text states 'For a 70 kg subject, the apparent clearance... were 0.123 L/day' and 'Body weight was included on clear")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=denosumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- status held at route_to_review — not promoted
- molar mass: none found for 'denosumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pharmaceutics-17-01146-t004:row2:col2 = '2.7%'
- unparsed cell pharmaceutics-17-01146-t004:row2:col5 = '60%'
- unparsed cell pharmaceutics-17-01146-t004:row3:col2 = '0.8%'
- unparsed cell pharmaceutics-17-01146-t004:row3:col5 = '15.7%'
- unparsed cell pharmaceutics-17-01146-t004:row4:col2 = '2.6%'
- unparsed cell pharmaceutics-17-01146-t004:row4:col5 = '34.6%'
- unparsed cell pharmaceutics-17-01146-t004:row5:col2 = '9.8%'
- unparsed cell pharmaceutics-17-01146-t004:row6:col2 = '18.8%'
- unparsed cell pharmaceutics-17-01146-t004:row7:col2 = '7.6%'
- unparsed cell pharmaceutics-17-01146-t004:row8:col2 = '33.7%'
- unparsed cell Sánchez-Vidaurre_2025_table_3:row1:col2 = '3.92%'
- unparsed cell Sánchez-Vidaurre_2025_table_3:row1:col5 = '61%'
- unparsed cell Sánchez-Vidaurre_2025_table_3:row2:col2 = '1.21%'
- unparsed cell Sánchez-Vidaurre_2025_table_3:row2:col5 = '13%'
- unparsed cell Sánchez-Vidaurre_2025_table_3:row3:col2 = '3.55%'
- unparsed cell Sánchez-Vidaurre_2025_table_3:row3:col5 = '37%'
- unparsed cell Sánchez-Vidaurre_2025_table_3:row4:col2 = '16.2%'
- unparsed cell Sánchez-Vidaurre_2025_table_3:row5:col2 = '9.27%'
- unparsed cell Sánchez-Vidaurre_2025_table_3:row6:col2 = '5.28%'
- companion parameter table 3 transcribed (18 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q61 | fail | not captured | -0.534 | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-17-01146-t004:row6:col1', 'pharmaceutics-17-01146-t004:row6:col3', 'pharmaceutics-17-01146-t004:row6:col4', 'Sánchez-Vidaurre_2025_table_3:row5:col1', 'Sánchez-Vidaurre_2025_table_3:row5:col3', 'Sánchez-Vidaurre_2025_table_3:row5:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-17-01146-t004:row5:col1', 'pharmaceutics-17-01146-t004:row5:col3', 'pharmaceutics-17-01146-t004:row5:col4', 'Sánchez-Vidaurre_2025_table_3:row4:col1', 'Sánchez-Vidaurre_2025_table_3:row4:col3', 'Sánchez-Vidaurre_2025_table_3:row4:col4'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-17-01146-t004:row4:col1', 'pharmaceutics-17-01146-t004:row4:col3', 'pharmaceutics-17-01146-t004:row4:col4', 'Sánchez-Vidaurre_2025_table_3:row3:col1', 'Sánchez-Vidaurre_2025_table_3:row3:col3', 'Sánchez-Vidaurre_2025_table_3:row3:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-17-01146-t004:row2:col1', 'pharmaceutics-17-01146-t004:row2:col3', 'pharmaceutics-17-01146-t004:row2:col4', 'Sánchez-Vidaurre_2025_table_3:row1:col1', 'Sánchez-Vidaurre_2025_table_3:row1:col3', 'Sánchez-Vidaurre_2025_table_3:row1:col4'] |
| C5_dimension_Q66 | fail | [mass] / [time] | ng/day | not captured | not captured | ['pharmaceutics-17-01146-t004:row7:col1', 'pharmaceutics-17-01146-t004:row7:col3', 'pharmaceutics-17-01146-t004:row7:col4', 'Sánchez-Vidaurre_2025_table_3:row6:col1', 'Sánchez-Vidaurre_2025_table_3:row6:col3', 'Sánchez-Vidaurre_2025_table_3:row6:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-17-01146-t004:row3:col1', 'pharmaceutics-17-01146-t004:row3:col3', 'pharmaceutics-17-01146-t004:row3:col4', 'Sánchez-Vidaurre_2025_table_3:row2:col1', 'Sánchez-Vidaurre_2025_table_3:row2:col3', 'Sánchez-Vidaurre_2025_table_3:row2:col4'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-17-01146-t004:row8:col1', 'pharmaceutics-17-01146-t004:row8:col3', 'pharmaceutics-17-01146-t004:row8:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.85 L/h | not captured | not captured | ['pharmaceutics-17-01146-t004:row5:col1', 'pharmaceutics-17-01146-t004:row5:col3', 'pharmaceutics-17-01146-t004:row5:col4', 'Sánchez-Vidaurre_2025_table_3:row4:col1', 'Sánchez-Vidaurre_2025_table_3:row4:col3', 'Sánchez-Vidaurre_2025_table_3:row4:col4'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.00513 L/h | not captured | not captured | ['pharmaceutics-17-01146-t004:row4:col1', 'pharmaceutics-17-01146-t004:row4:col3', 'pharmaceutics-17-01146-t004:row4:col4', 'Sánchez-Vidaurre_2025_table_3:row3:col1', 'Sánchez-Vidaurre_2025_table_3:row3:col3', 'Sánchez-Vidaurre_2025_table_3:row3:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 9.33 L | not captured | not captured | ['pharmaceutics-17-01146-t004:row3:col1', 'pharmaceutics-17-01146-t004:row3:col3', 'pharmaceutics-17-01146-t004:row3:col4', 'Sánchez-Vidaurre_2025_table_3:row2:col1', 'Sánchez-Vidaurre_2025_table_3:row2:col3', 'Sánchez-Vidaurre_2025_table_3:row2:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_denosumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sánchez-Vidaurre_2025` / `Sánchez-Vidaurre_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 03:16 UTC</sub>
