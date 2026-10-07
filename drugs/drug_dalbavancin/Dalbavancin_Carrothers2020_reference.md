<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01X&quot;,&quot;href&quot;:&quot;atc/J01X.md&quot;},{&quot;label&quot;:&quot;dalbavancin&quot;,&quot;href&quot;:&quot;drugs/drug_dalbavancin/&quot;},{&quot;label&quot;:&quot;Carrothers_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dalbavancin_Baiardi2025_reference&quot;,&quot;label&quot;:&quot;Baiardi_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dalbavancin/Dalbavancin_Baiardi2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dalbavancin_Cojutti2023_reference&quot;,&quot;label&quot;:&quot;Cojutti_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dalbavancin/Dalbavancin_Cojutti2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dalbavancin — `Dalbavancin_Carrothers2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Carrothers TJ et al., Dalbavancin Population Pharmacokinetic…, Clinical pharmacology in dr… (2020)
  ·  DOI: [10.1002/cpdd.695](https://doi.org/10.1002/cpdd.695)

## Model component
<dbs-pgx drug="dalbavancin" model-id="Dalbavancin_Carrothers2020_reference" status="rejected" stale="false" population="adults with acute bacterial skin and skin structure infections" measured-compound="dalbavancin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ1 | `Q900` · equation variable | 0.0531 | not captured | not captured | not captured | 1.1 | llm (0.6) | cpdd695-tbl-0003:row1:col2, cpdd695-tbl-0003:row1:col3 | — | not captured |
| θ12 | `Q301` · k12 | 0.486 | 1/h | 0.000135 | 1/h | 12.1 | llm (0.6) | cpdd695-tbl-0003:row12:col2, cpdd695-tbl-0003:row12:col3 | — | not captured |
| θ14 | `Q347` · k14 | 0.365 | 1/h | 0.00010138888888888889 | 1/h | 29.6 | llm (0.6) | cpdd695-tbl-0003:row14:col2, cpdd695-tbl-0003:row14:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'name' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- routed 'θ2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q900 ('θ3', value '8.78') — already have one for this compound
- dropped unlinked row (NIL): 'θ4' — extend the ontology if this is a real PK parameter (source ['cpdd695-tbl-0003:row4:col2', 'cpdd695-tbl-0003:row4:col3'])
- routed 'θ5' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q900 ('θ6', value '2.11') — already have one for this compound
- dropped unlinked row (NIL): 'θ7' — extend the ontology if this is a real PK parameter (source ['cpdd695-tbl-0003:row7:col2', 'cpdd695-tbl-0003:row7:col3'])
- dropped duplicate Q900 ('θ8', value '0.273') — already have one for this compound
- routed 'θ9' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'θ10' — extend the ontology if this is a real PK parameter (source ['cpdd695-tbl-0003:row10:col2', 'cpdd695-tbl-0003:row10:col3'])
- dropped unlinked row (NIL): 'θ11' — extend the ontology if this is a real PK parameter (source ['cpdd695-tbl-0003:row11:col2', 'cpdd695-tbl-0003:row11:col3'])
- dropped duplicate Q900 ('θ13', value '-0.413') — already have one for this compound
- dropped unlinked row (NIL): 'θ16' — extend the ontology if this is a real PK parameter (source ['cpdd695-tbl-0003:row15:col2', 'cpdd695-tbl-0003:row15:col3'])
- dropped unlinked row (NIL): 'θ17' — extend the ontology if this is a real PK parameter (source ['cpdd695-tbl-0003:row16:col2', 'cpdd695-tbl-0003:row16:col3'])
- dropped unlinked row (NIL): 'Name' — extend the ontology if this is a real PK parameter (source ['cpdd695-tbl-0003:row17:col1'])
- dropped unlinked row (NIL): 'Estimate' — extend the ontology if this is a real PK parameter (source ['cpdd695-tbl-0003:row17:col2'])
- dropped unlinked row (NIL): 'RSE, %' — extend the ontology if this is a real PK parameter (source ['cpdd695-tbl-0003:row17:col3'])
- dropped duplicate Q900 ('ω1.1', value '0.0489') — already have one for this compound
- dropped duplicate Q900 ('ω3.3', value '0.0566') — already have one for this compound
- dropped unlinked row (NIL): 'ω4.3' — extend the ontology if this is a real PK parameter (source ['cpdd695-tbl-0003:row22:col2', 'cpdd695-tbl-0003:row22:col3'])
- routed 'ω4.4' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- implicit units: 'θ12' → 1/h (from the popPK convention: 'The paper does not explicitly state the unit for k12. However, k12 is defined as a first-order transfer rate constant, w')
- implicit units: 'θ14' → 1/h (from the popPK convention: 'The paper does not explicitly state the unit for k14. However, k14 is defined as a first-order transfer rate constant, w')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dalbavancin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cpdd695-tbl-0003:row1:col4 = '0.0519, 0.0543'
- unparsed cell cpdd695-tbl-0003:row2:col1 = 'V1 (L)'
- unparsed cell cpdd695-tbl-0003:row2:col4 = '2.8, 3.28'
- unparsed cell cpdd695-tbl-0003:row3:col1 = 'V2 (L)'
- unparsed cell cpdd695-tbl-0003:row3:col4 = '8.11, 9.44'
- unparsed cell cpdd695-tbl-0003:row4:col1 = 'V3 (L)'
- unparsed cell cpdd695-tbl-0003:row4:col4 = '2.67, 3.9'
- unparsed cell cpdd695-tbl-0003:row5:col4 = '0.213, 0.362'
- unparsed cell cpdd695-tbl-0003:row6:col4 = '1.66, 2.55'
- unparsed cell cpdd695-tbl-0003:row7:col4 = '−0.587, −0.367'
- unparsed cell cpdd695-tbl-0003:row8:col4 = '0.208, 0.338'
- unparsed cell cpdd695-tbl-0003:row9:col4 = '0.291, 0.491'
- unparsed cell cpdd695-tbl-0003:row10:col1 = 'V1·ALB'
- unparsed cell cpdd695-tbl-0003:row10:col4 = '−0.53, −0.149'
- unparsed cell cpdd695-tbl-0003:row11:col1 = 'V1·WT'
- unparsed cell cpdd695-tbl-0003:row11:col4 = '0.537, 0.83'
- unparsed cell cpdd695-tbl-0003:row12:col1 = 'V2·AGE'
- unparsed cell cpdd695-tbl-0003:row12:col4 = '0.371, 0.601'
- unparsed cell cpdd695-tbl-0003:row13:col1 = 'V2·ALB'
- unparsed cell cpdd695-tbl-0003:row13:col4 = '−0.633, −0.193'
- unparsed cell cpdd695-tbl-0003:row14:col1 = 'V2·WT'
- unparsed cell cpdd695-tbl-0003:row14:col4 = '0.153, 0.577'
- unparsed cell cpdd695-tbl-0003:row15:col1 = 'V3·ALB'
- unparsed cell cpdd695-tbl-0003:row15:col4 = '−1.03, −0.0714'
- unparsed cell cpdd695-tbl-0003:row16:col1 = 'V3·WT'
- unparsed cell cpdd695-tbl-0003:row16:col4 = '0.0644, 0.972'
- unparsed cell cpdd695-tbl-0003:row17:col4 = '8.51, 9.02'
- unparsed cell cpdd695-tbl-0003:row18:col1 = 'ω2CL'
- unparsed cell cpdd695-tbl-0003:row18:col4 = '0.034, 0.0638'
- unparsed cell cpdd695-tbl-0003:row19:col1 = 'ωCL,V2'
- unparsed cell cpdd695-tbl-0003:row19:col4 = '0.0462, 0.118'
- unparsed cell cpdd695-tbl-0003:row20:col1 = 'ω2V2'
- unparsed cell cpdd695-tbl-0003:row20:col4 = '0.064, 0.242'
- unparsed cell cpdd695-tbl-0003:row21:col1 = 'ω2V1'
- unparsed cell cpdd695-tbl-0003:row21:col4 = '0.0271, 0.0862'
- unparsed cell cpdd695-tbl-0003:row22:col1 = 'ω2V1,V3'
- unparsed cell cpdd695-tbl-0003:row22:col4 = '0.0293, 0.192'
- unparsed cell cpdd695-tbl-0003:row23:col1 = 'ω2v3'
- unparsed cell cpdd695-tbl-0003:row23:col4 = '0.271, 0.602'
- unparsed cell cpdd695-tbl-0003:row24:col1 = 'σ2proportional'
- unparsed cell cpdd695-tbl-0003:row24:col4 = '0.0292, 0.0432'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['cpdd695-tbl-0003:row12:col2', 'cpdd695-tbl-0003:row12:col3'] |
| C5_dimension_Q347 | pass | 1 / [time] | not captured | not captured | not captured | ['cpdd695-tbl-0003:row14:col2', 'cpdd695-tbl-0003:row14:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_dalbavancin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Carrothers_2020` / `Carrothers_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:56 UTC</sub>
