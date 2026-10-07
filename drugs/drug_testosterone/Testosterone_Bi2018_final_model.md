<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03B&quot;,&quot;href&quot;:&quot;atc/G03B.md&quot;},{&quot;label&quot;:&quot;testosterone&quot;,&quot;href&quot;:&quot;drugs/drug_testosterone/&quot;},{&quot;label&quot;:&quot;Bi_2018 \u00b7 final_model&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# testosterone — `Testosterone_Bi2018_final_model`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `testosterone cypionate`, measured `testosterone`.

## Citation
Bi Y et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2018)
  ·  DOI: [10.1002/psp4.12287](https://doi.org/10.1002/psp4.12287)

## Model component
<dbs-pgx drug="testosterone" model-id="Testosterone_Bi2018_final_model" status="rejected" stale="false" population="healthy male subjects" measured-compound="testosterone" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F, kL/day | `Q27` · CL/F | 2.6 | kL/day | not captured | kL/day | not captured | llm_confirmed (0.6) | psp412287-tbl-0002:row2:col1 | — | not captured |
| V/F, kL | `Q76` · V/F | 14.4 | kL | not captured | kL | not captured | llm_confirmed (0.6) | psp412287-tbl-0002:row3:col1 | — | not captured |
| Ka, day−1 | `Q49` · kabs | 1.22 | day−1 | 1.412037037037037e-05 | [1] / [d] | not captured | exact (1.0) | psp412287-tbl-0002:row4:col1 | — | not captured |
| A_0, TC | `Q900` · equation variable | 6.24 | not captured | not captured | not captured | not captured | llm (0.6) | psp412287-tbl-0002:row9:col1 | — | not captured |
| θCalbumin−V | `Q61` · V | -0.27 | not captured | not captured | not captured | not captured | llm (0.6) | psp412287-tbl-0002:row11:col1 | — | not captured |
| θBWT−CL | `Q22` · CL | 0.785 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | psp412287-tbl-0002:row13:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'βbase, mg/day' — extend the ontology if this is a real PK parameter (source ['psp412287-tbl-0002:row5:col1'])
- dropped PD-category row 'Lambda(λ)' → Q342 (lambda_hazard, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412287-tbl-0002:row6:col1'])
- dropped PD-category row 'Emax, mg/day' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412287-tbl-0002:row7:col1'])
- dropped unlinked row (NIL): 'LH50, IU/L' — extend the ontology if this is a real PK parameter (source ['psp412287-tbl-0002:row8:col1'])
- dropped unlinked row (NIL): 'θBalbumin−V' — extend the ontology if this is a real PK parameter (source ['psp412287-tbl-0002:row10:col1'])
- dropped unlinked row (NIL): 'θBWT−V' — extend the ontology if this is a real PK parameter (source ['psp412287-tbl-0002:row12:col1'])
- dropped unlinked row (NIL): 'θCWT−CL' — extend the ontology if this is a real PK parameter (source ['psp412287-tbl-0002:row14:col1'])
- implicit units: 'CL/F, kL/day' → kL/day (from the paper text: "The paper states in the Results section: 'The CL/F and V/F for tT were estimated to be 2.6 (kL/day) and 14.4 kL in healt")
- implicit units: 'V/F, kL' → kL (from the paper text: "The paper states in the Results section: 'The CL/F and V/F for tT were estimated to be 2.6 (kL/day) and 14.4 kL in healt")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=testosterone
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- population split: 'final model' subgroup of Bi_2018 (paper reports 2 populations: bootstrapa, final model)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp412287-tbl-0002:row10:col4 = '(−3.56 to −0.842)'
- unparsed cell psp412287-tbl-0002:row11:col4 = '(−0.369 to −0.108)'
- unparsed cell psp412287-tbl-0002:row17:col1 = '9.66% (25.2)'
- unparsed cell psp412287-tbl-0002:row17:col2 = '8.60%'
- unparsed cell psp412287-tbl-0002:row17:col4 = '(2.98%–12.29%)'
- unparsed cell psp412287-tbl-0002:row18:col1 = '37% (14.6)'
- unparsed cell psp412287-tbl-0002:row18:col2 = '35.9%'
- unparsed cell psp412287-tbl-0002:row18:col4 = '(18.3%–51.7%)'
- unparsed cell psp412287-tbl-0002:row19:col1 = '53.9% (42.5)'
- unparsed cell psp412287-tbl-0002:row19:col2 = '52.4%'
- unparsed cell psp412287-tbl-0002:row19:col4 = '(0.54%–87.5%)'
- unparsed cell psp412287-tbl-0002:row20:col1 = '45.3% (16.3)'
- unparsed cell psp412287-tbl-0002:row20:col2 = '43.1%'
- unparsed cell psp412287-tbl-0002:row20:col4 = '(14.5%–66.3%)'
- unparsed cell psp412287-tbl-0002:row21:col1 = '75.9% (25.3)'
- unparsed cell psp412287-tbl-0002:row21:col2 = '72.9%'
- unparsed cell psp412287-tbl-0002:row21:col4 = '(40.0%–99.6%)'
- unparsed cell psp412287-tbl-0002:row22:col1 = '13.6% (49.6)'
- unparsed cell psp412287-tbl-0002:row22:col2 = '13.3%'
- unparsed cell psp412287-tbl-0002:row22:col4 = '(0.14%–21.3%)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q61 | fail | not captured | -0.27 | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412287-tbl-0002:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412287-tbl-0002:row4:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412287-tbl-0002:row3:col1'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412287-tbl-0002:row13:col1'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | not captured | not captured | not captured | ['psp412287-tbl-0002:row11:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_testosterone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bi_2018` / `Bi_2018::final_model`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:29 UTC</sub>
