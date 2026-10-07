<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;trimethoprim&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/&quot;},{&quot;label&quot;:&quot;Leegwater_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trimethoprim_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Trimethoprim_Tu1989_reference&quot;,&quot;label&quot;:&quot;Tu_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/Trimethoprim_Tu1989_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trimethoprim — `Trimethoprim_Leegwater2025_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `cotrimoxazole`, measured `trimethoprim`.

## Citation
Leegwater E et al., Population Pharmacokinetics of Trimetho…, Clinical pharmacology and t… (2025)
  ·  DOI: [10.1002/cpt.3421](https://doi.org/10.1002/cpt.3421)

## Model component
<dbs-pgx drug="trimethoprim" model-id="Trimethoprim_Leegwater2025_reference" status="needs_review" stale="false" population="hospitalized patients with renal insufficiency or receiving CRRT" measured-compound="trimethoprim" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 5 extracted, plus 1 covariate effect.

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Biological availability | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | llm (0.6) | cpt3421-tbl-0002:row2:col1, cpt3421-tbl-0002:row2:col3, Leegwater_2025_table_3:row1:col1, Leegwater_2025_table_3:row1:col3 | — | not captured |
| Absorption rate constant | `Q49` · kabs | 0.95 | 1/h | 0.00026388888888888886 | 1/h | 45 | exact (1.0) | cpt3421-tbl-0002:row3:col1, cpt3421-tbl-0002:row3:col2, cpt3421-tbl-0002:row3:col3, cpt3421-tbl-0002:row3:col4, Leegwater_2025_table_3:row2:col1, Leegwater_2025_table_3:row2:col2, Leegwater_2025_table_3:row2:col3, Leegwater_2025_table_3:row2:col4 | — | not captured |
| Apparent clearance (L/hour)a | `Q27` · CL/F | 1.33 | L/h | 3.6944444444444447e-07 | L/h | 4 | llm_confirmed (0.6) | cpt3421-tbl-0002:row4:col1, cpt3421-tbl-0002:row4:col2, cpt3421-tbl-0002:row4:col3, cpt3421-tbl-0002:row4:col4, Leegwater_2025_table_3:row3:col1, Leegwater_2025_table_3:row3:col2, Leegwater_2025_table_3:row3:col3, Leegwater_2025_table_3:row3:col4, Leegwater_2025_table_3:row11:col1, Leegwater_2025_table_3:row11:col2, Leegwater_2025_table_3:row11:col3, Leegwater_2025_table_3:row11:col4 | — | not captured |
| egfr_on_cl | `Q900` · egfr_on_cl | 0.79 | not captured | not captured | not captured | 7 | not captured (not captured) | cpt3421-tbl-0002:row5:col1, cpt3421-tbl-0002:row5:col2, cpt3421-tbl-0002:row5:col3, cpt3421-tbl-0002:row5:col4, Leegwater_2025_table_3:row4:col1, Leegwater_2025_table_3:row4:col2, Leegwater_2025_table_3:row4:col3, Leegwater_2025_table_3:row4:col4, Leegwater_2025_table_3:row12:col1, Leegwater_2025_table_3:row12:col2, Leegwater_2025_table_3:row12:col3, Leegwater_2025_table_3:row12:col4 | — | not captured |
| CRRT on CL | `Q357` · CL_CRRT | 0.68 | not captured | not captured | not captured | 11 | llm_corrected (0.6) | cpt3421-tbl-0002:row6:col1, cpt3421-tbl-0002:row6:col2, cpt3421-tbl-0002:row6:col3, cpt3421-tbl-0002:row6:col4, Leegwater_2025_table_3:row5:col1, Leegwater_2025_table_3:row5:col2, Leegwater_2025_table_3:row5:col3, Leegwater_2025_table_3:row5:col4, Leegwater_2025_table_3:row13:col1, Leegwater_2025_table_3:row13:col2, Leegwater_2025_table_3:row13:col3, Leegwater_2025_table_3:row13:col4 | — | not captured |
| Volume of distribution (L) | `Q61` · V | 3.87 | L | 0.00387 | [l] | 24 | exact (1.0) | cpt3421-tbl-0002:row7:col1, cpt3421-tbl-0002:row7:col2, cpt3421-tbl-0002:row7:col3, cpt3421-tbl-0002:row7:col4, Leegwater_2025_table_3:row6:col1, Leegwater_2025_table_3:row6:col2, Leegwater_2025_table_3:row6:col3, Leegwater_2025_table_3:row6:col4, Leegwater_2025_table_3:row14:col1, Leegwater_2025_table_3:row14:col2, Leegwater_2025_table_3:row14:col3, Leegwater_2025_table_3:row14:col4 | — | 60.2 (11% RSE) |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate level 'eGFR on CL' → Q900:egfr_on_cl = 0.79 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'Trimethoprim' — extend the ontology if this is a real PK parameter (source ['cpt3421-tbl-0002:row12:col1', 'cpt3421-tbl-0002:row12:col2', 'cpt3421-tbl-0002:row12:col3', 'cpt3421-tbl-0002:row12:col4'])
- dropped unlinked row (NIL): 'Sulfamethoxazole' — extend the ontology if this is a real PK parameter (source ['Leegwater_2025_table_3:row17:col1', 'Leegwater_2025_table_3:row17:col2', 'Leegwater_2025_table_3:row17:col3', 'Leegwater_2025_table_3:row17:col4'])
- dropped unlinked row (NIL): 'N‐acetyl sulfamethoxazole' — extend the ontology if this is a real PK parameter (source ['Leegwater_2025_table_3:row18:col1', 'Leegwater_2025_table_3:row18:col2', 'Leegwater_2025_table_3:row18:col3', 'Leegwater_2025_table_3:row18:col4'])
- implicit units: 'Absorption rate constant' → 1/h (from the popPK convention: 'The parameter is an absorption rate constant (kabs). First-order rate constants are conventionally expressed in reciproc')
- implicit units: 'Apparent clearance (L/hour)a' → L/h (from the paper text: "The parameter label in the provided text for item 2 explicitly includes the unit: 'Apparent clearance (L/hour)a'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=trimethoprim
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- row roles (LLM): model_class=compartmental; 12/12 row label(s) assigned, 32 linked by role; re-tagged parent→trimethoprim ×84
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 3 transcribed (58 record(s))
- no LLM table selection; kept 2 deterministically-scored parameter table(s)
- LLM region Leegwater_2025:other_prose: Error code: 429 - {'error': {'message': 'Rate limit exceeded for api_key: 8d79104cac3d0b5a8019d9c3dd60ff02e7a84591fb3552ddb3bbcabd52b31d23. Limit type: max_parallel_requests. Current limit: 4, Remaining: 0. Limit resets at: 2026-10-07 11:46:33 UTC', 'type': 'throttling_error', 'param': None, 'code': '429'}}

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt3421-tbl-0002:row4:col1', 'cpt3421-tbl-0002:row4:col2', 'cpt3421-tbl-0002:row4:col3', 'cpt3421-tbl-0002:row4:col4', 'Leegwater_2025_table_3:row3:col1', 'Leegwater_2025_table_3:row3:col2', 'Leegwater_2025_table_3:row3:col3', 'Leegwater_2025_table_3:row3:col4', 'Leegwater_2025_table_3:row11:col1', 'Leegwater_2025_table_3:row11:col2', 'Leegwater_2025_table_3:row11:col3', 'Leegwater_2025_table_3:row11:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cpt3421-tbl-0002:row3:col1', 'cpt3421-tbl-0002:row3:col2', 'cpt3421-tbl-0002:row3:col3', 'cpt3421-tbl-0002:row3:col4', 'Leegwater_2025_table_3:row2:col1', 'Leegwater_2025_table_3:row2:col2', 'Leegwater_2025_table_3:row2:col3', 'Leegwater_2025_table_3:row2:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt3421-tbl-0002:row7:col1', 'cpt3421-tbl-0002:row7:col2', 'cpt3421-tbl-0002:row7:col3', 'cpt3421-tbl-0002:row7:col4', 'Leegwater_2025_table_3:row6:col1', 'Leegwater_2025_table_3:row6:col2', 'Leegwater_2025_table_3:row6:col3', 'Leegwater_2025_table_3:row6:col4', 'Leegwater_2025_table_3:row14:col1', 'Leegwater_2025_table_3:row14:col2', 'Leegwater_2025_table_3:row14:col3', 'Leegwater_2025_table_3:row14:col4'] |
| C5_unit_missing_Q357 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt3421-tbl-0002:row6:col1', 'cpt3421-tbl-0002:row6:col2', 'cpt3421-tbl-0002:row6:col3', 'cpt3421-tbl-0002:row6:col4', 'Leegwater_2025_table_3:row5:col1', 'Leegwater_2025_table_3:row5:col2', 'Leegwater_2025_table_3:row5:col3', 'Leegwater_2025_table_3:row5:col4', 'Leegwater_2025_table_3:row13:col1', 'Leegwater_2025_table_3:row13:col2', 'Leegwater_2025_table_3:row13:col3', 'Leegwater_2025_table_3:row13:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.33 L/h | not captured | not captured | ['cpt3421-tbl-0002:row4:col1', 'cpt3421-tbl-0002:row4:col2', 'cpt3421-tbl-0002:row4:col3', 'cpt3421-tbl-0002:row4:col4', 'Leegwater_2025_table_3:row3:col1', 'Leegwater_2025_table_3:row3:col2', 'Leegwater_2025_table_3:row3:col3', 'Leegwater_2025_table_3:row3:col4', 'Leegwater_2025_table_3:row11:col1', 'Leegwater_2025_table_3:row11:col2', 'Leegwater_2025_table_3:row11:col3', 'Leegwater_2025_table_3:row11:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.87 L | not captured | not captured | ['cpt3421-tbl-0002:row7:col1', 'cpt3421-tbl-0002:row7:col2', 'cpt3421-tbl-0002:row7:col3', 'cpt3421-tbl-0002:row7:col4', 'Leegwater_2025_table_3:row6:col1', 'Leegwater_2025_table_3:row6:col2', 'Leegwater_2025_table_3:row6:col3', 'Leegwater_2025_table_3:row6:col4', 'Leegwater_2025_table_3:row14:col1', 'Leegwater_2025_table_3:row14:col2', 'Leegwater_2025_table_3:row14:col3', 'Leegwater_2025_table_3:row14:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_trimethoprim/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Leegwater_2025` / `Leegwater_2025::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:16 UTC</sub>
