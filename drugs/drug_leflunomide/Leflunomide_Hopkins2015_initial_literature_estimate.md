<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;leflunomide&quot;,&quot;href&quot;:&quot;drugs/drug_leflunomide/&quot;},{&quot;label&quot;:&quot;Hopkins_2015 \u00b7 initial_literature_estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# leflunomide — `Leflunomide_Hopkins2015_initial_literature_estimate`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `leflunomide`, measured `teriflunomide`.

## Citation
Hopkins AM et al., Semiphysiologically Based Pharmacokinet…, CPT: pharmacometrics & syst… (2015)
  ·  DOI: [10.1002/psp4.46](https://doi.org/10.1002/psp4.46)

## Model component
<dbs-pgx drug="leflunomide" model-id="Leflunomide_Hopkins2015_initial_literature_estimate" status="needs_review" stale="false" population="rheumatoid arthritis patients" measured-compound="teriflunomide" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 13 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| QCO (L/day/70 kg FFM) | `Q369` · QH | 8640 | L/day/70kg | 0.0001 | L/h | not captured | exact (1.0) | tbl1:row3:col2 | — | not captured |
| QBODY (L/day/70 kg FFM) | `Q30` · Q | 6480 | L/day/70kg | 7.500000000000001e-05 | L/h | not captured | llm (0.6) | tbl1:row7:col2 | — | not captured |
| VLUNG (L/70 kg FFM) | `Q61` · V | 1 | L/70kg | 0.001 | L | not captured | llm (0.6) | tbl1:row8:col2 | — | not captured |
| VLIV (L/70 kg FFM) | `Q368` · VH | 1.5 | L/70kg | 0.0015 | L | not captured | exact (1.0) | tbl1:row9:col2 | — | not captured |
| VPORT (L/70 kg FFM) | `Q352` · Vnorm | 0.5 | L/70kg | 0.0005 | L | not captured | llm (0.6) | tbl1:row10:col2 | — | not captured |
| VBODYLEF (L/70 kg FFM) | `Q63` · V1 | 7.5 | L/70kg | 0.0075 | L | not captured | exact (1.0) | tbl1:row12:col2 | — | not captured |
| KALEF (day−1) | `Q49` · kabs | 24 | day−1 | 0.0002777777777777778 | [1] / [d] | not captured | exact (1.0) | tbl1:row13:col2 | — | not captured |
| KA (day−1) | `Q49` · kabs | 39.6 | day−1 | 0.0004583333333333333 | [1] / [d] | not captured | exact (1.0) | tbl1:row15:col2 | — | not captured |
| KOFF (day−1) | `Q47` · kel | 69120 | day−1 | 0.7999999999999999 | [1] / [d] | not captured | exact (1.0) | tbl1:row16:col2 | — | not captured |
| VBILE (L/70 kg FFM) | `Q61` · V | 0.5 | L/70kg | 0.0005 | L | not captured | exact (1.0) | tbl1:row17:col2 | — | not captured |
| CLM (L/day/70 kg FFM) | `Q370` · CLfm | 566.4 | L/day/70kg | 6.5555555555555556e-06 | L/h | not captured | exact (1.0) | tbl1:row21:col2 | — | not captured |
| MFCLL (θ1) | `Q305` · kfm | 0.7 | not captured | not captured | not captured | not captured | exact (1.0) | tbl1:row22:col2 | — | not captured |
| LGTFU (θ2) | `Q45` · fm | -6.14 | not captured | not captured | not captured | not captured | exact (1.0) | tbl1:row25:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| aQREABS (L/day/70 kg FFM) | Q22 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'OBJ' — extend the ontology if this is a real PK parameter (source ['tbl1:row1:col2'])
- unit_dimension_unknown: 'L/day/70 kg FFM' (QH)
- dropped duplicate Q369 ('QH (L/day/70 kg FFM)', value '2160') — already have one for this compound
- dropped duplicate Q369 ('QHP (L/day/70 kg FFM)', value None) — already have one for this compound
- dropped duplicate Q369 ('QHA (L/day/70 kg FFM)', value None) — already have one for this compound
- unit_dimension_unknown: 'L/day/70 kg FFM' (Q)
- unit_dimension_unknown: 'L/70 kg FFM' (V)
- unit_dimension_unknown: 'L/70 kg FFM' (VH)
- unit_dimension_unknown: 'L/70 kg FFM' (Vnorm)
- dropped unlinked row (NIL): 'CPROT (mg/L)' — extend the ontology if this is a real PK parameter (source ['tbl1:row11:col2'])
- unit_dimension_unknown: 'L/70 kg FFM' (V1)
- dropped unlinked row (NIL): 'RATEBBM (day−1)' — extend the ontology if this is a real PK parameter (source ['tbl1:row14:col2'])
- dropped unlinked row (NIL): 'BILEFLOW (L/day/70 kg FFM)' — extend the ontology if this is a real PK parameter (source ['tbl1:row18:col2'])
- unit_dimension_unknown: 'L/day/70 kg FFM' (CL)
- dropped duplicate Q22 ('aQE (L/day/70 kg FFM)', value None) — already have one for this compound
- unit_dimension_unknown: 'L/day/70 kg FFM' (CLfm)
- dropped duplicate Q370 ('CLL (L/day/70 kg FFM)', value None) — already have one for this compound
- dropped duplicate Q370 ('CLLM (L/day/70 kg FFM)', value None) — already have one for this compound
- dropped duplicate Q45 ('FU', value '0.00215') — already have one for this compound
- dropped duplicate Q22 ('CLINT (θ3) (L/day/70 kg FFM)', value '36') — already have one for this compound
- dropped unlinked row (NIL): 'QBILE (θ4) (L/day/70 kg FFM)' — extend the ontology if this is a real PK parameter (source ['tbl1:row28:col2'])
- dropped duplicate Q63 ('VBODY (θ5) (L/70 kg FFM)', value '7.5') — already have one for this compound
- dropped unlinked row (NIL): '(σ1; %CV)' — extend the ontology if this is a real PK parameter (source ['tbl1:row40:col2'])
- dropped unlinked row (NIL): '(σ2; %CV)' — extend the ontology if this is a real PK parameter (source ['tbl1:row43:col2'])
- dropped unlinked row (NIL): '(σ3; %CV)' — extend the ontology if this is a real PK parameter (source ['tbl1:row46:col2'])
- implicit units: 'QCO (L/day/70 kg FFM)' → L/day/70kg (from the paper text: "The parameter table header/caption context lists the unit as '(L/day/70 kg FFM)' immediately preceding the value 8640. T")
- implicit units: 'QBODY (L/day/70 kg FFM)' → L/day/70kg (from the paper text: "The parameter table header/caption context lists the unit as '(L/day/70 kg FFM)' immediately preceding the value 6480. Q")
- implicit units: 'VLUNG (L/70 kg FFM)' → L/70kg (from the paper text: "The parameter table header/caption context lists the unit as '(L/70 kg FFM)' immediately preceding the value 1. VLUNG is")
- implicit units: 'VLIV (L/70 kg FFM)' → L/70kg (from the paper text: "The parameter table header/caption context lists the unit as '(L/70 kg FFM)' immediately preceding the value 1.5. VLIV i")
- implicit units: 'VPORT (L/70 kg FFM)' → L/70kg (from the paper text: "The parameter table header/caption context lists the unit as '(L/70 kg FFM)' immediately preceding the value 0.5. VPORT ")
- implicit units: 'VBODYLEF (L/70 kg FFM)' → L/70kg (from the paper text: "The parameter table header/caption context lists the unit as '(L/70 kg FFM)' immediately preceding the value 7.5. VBODYL")
- implicit units: 'VBILE (L/70 kg FFM)' → L/70kg (from the paper text: "The parameter table header/caption context lists the unit as '(L/70 kg FFM)' immediately preceding the value 0.5. VBILE ")
- implicit units: 'CLM (L/day/70 kg FFM)' → L/day/70kg (from the paper text: "The parameter table header/caption context lists the unit as '(L/day/70 kg FFM)' immediately preceding the value 566.4. ")
- metabolite volume: 'VBILE (L/70 kg FFM)' Q63→Q61 for teriflunomide — it is 1-compartment, so its central volume is its only volume
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q30 (QBODY (L/day/70 kg FFM)); Q61 (VLUNG (L/70 kg FFM)); Q63 (VBODYLEF (L/70 kg FFM)); Q61 (VBILE (L/70 kg FFM)); Q22 (aQREABS (L/day/70 kg FFM))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=teriflunomide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_3C — hepatic compartment; parent 1 + hepatic, metabolites [1] (site hepatic: 'the record carries a hepatic compartment parameter (Q368, Q369)')
- status held at route_to_review — not promoted
- population split: 'initial literature estimate' subgroup of Hopkins_2015 (paper reports 3 populations: base model, covariate model, initial literature estimate)
- row roles (LLM): model_class=compartmental; 43/43 row label(s) assigned, 45 linked by role; re-tagged leflunomide→parent ×3, leflunomide→teriflunomide ×64
- review gap-fill skipped: this record measures 'teriflunomide', not leflunomide — the review values are the parent's

**Extraction notes:**
- unparsed cell tbl1:row3:col3 = '26, 27'
- unparsed cell tbl1:row4:col3 = '26, 27'
- unparsed cell tbl1:row5:col3 = '26, 28'
- unparsed cell tbl1:row6:col3 = '26, 28'
- unparsed cell tbl1:row7:col3 = '26, 27'
- unparsed cell tbl1:row8:col3 = '26, 27'
- unparsed cell tbl1:row9:col3 = '26, 27'
- unparsed cell tbl1:row10:col3 = '22, 24'
- unparsed cell tbl1:row12:col3 = '9, 18'
- unparsed cell tbl1:row17:col3 = '30, 31, 32'
- unparsed cell tbl1:row18:col1 = 'Bile flow for turnover of bile volume over 24 hours'
- unparsed cell tbl1:row18:col3 = '30, 31, 32'
- unparsed cell tbl1:row19:col3 = '30, 31, 32'
- unparsed cell tbl1:row20:col3 = '30, 31, 32'
- unparsed cell tbl1:row21:col3 = '9, 10'
- unparsed cell tbl1:row23:col3 = '9, 10'
- unparsed cell tbl1:row24:col3 = '9, 10'
- unparsed cell tbl1:row29:col3 = '9, 17'
- companion parameter table 3 transcribed (10 record(s), model stage 'base')
- LLM selected parameter table(s) 1, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl1:row7:col2'] |
| C5_dimension_Q352 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl1:row10:col2'] |
| C5_dimension_Q368 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl1:row9:col2'] |
| C5_dimension_Q369 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl1:row3:col2'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl1:row21:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['tbl1:row16:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tbl1:row13:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tbl1:row15:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl1:row8:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl1:row17:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl1:row12:col2'] |
| C5_unit_missing_Q305 | fail | 1 / [time] | not captured | not captured | not captured | ['tbl1:row22:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 1 L | not captured | not captured | ['tbl1:row8:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 0.5 L | not captured | not captured | ['tbl1:row17:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 7.5 L | not captured | not captured | ['tbl1:row12:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_leflunomide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hopkins_2015` / `Hopkins_2015::initial_literature_estimate`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 23:58 UTC</sub>
