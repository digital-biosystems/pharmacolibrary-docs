<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;tislelizumab&quot;,&quot;href&quot;:&quot;drugs/drug_tislelizumab/&quot;},{&quot;label&quot;:&quot;Budha_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tislelizumab_Kim2025_reference&quot;,&quot;label&quot;:&quot;Kim_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tislelizumab/Tislelizumab_Kim2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tislelizumab — `Tislelizumab_Budha2023_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Budha N et al., Model-based population pharmacokinetic…, CPT: pharmacometrics & syst… (2023)
  ·  DOI: [10.1002/psp4.12880](https://doi.org/10.1002/psp4.12880)

## Model component
<dbs-pgx drug="tislelizumab" model-id="Tislelizumab_Budha2023_reference" status="rejected" stale="false" population="patients with advanced tumors" measured-compound="tislelizumab" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| exp(θ 1 )*24 | `Q900` · equation variable | 0.153 | not captured | not captured | not captured | 0.816 | llm (0.6) | psp412880-tbl-0003:row1:col2 | — | not captured |
| θ 12 | `Q301` · k12 | 0.0966 | 1/h | 2.6833333333333336e-05 | 1/h | 51.7 | llm (0.6) | psp412880-tbl-0003:row11:col2 | — | not captured |
| V c | `Q63` · V1 | 16.7 | not captured | not captured | not captured | not captured | space_fold (0.95) | psp412880-tbl-0003:row18:col1 | — | not captured |
| V 2 | `Q64` · V2 | 74.7 | not captured | not captured | not captured | not captured | space_fold (0.95) | psp412880-tbl-0003:row19:col1 | — | not captured |
| V 3 | `Q77` · V3 | 99.9 | not captured | not captured | not captured | not captured | space_fold (0.95) | psp412880-tbl-0003:row20:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'parameter description' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'θ 7' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row2:col2'])
- dropped unlinked row (NIL): 'θ 10' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row3:col2'])
- dropped unlinked row (NIL): 'θ 11' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row4:col2'])
- dropped unlinked row (NIL): 'θ 13' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row5:col2'])
- dropped unlinked row (NIL): 'θ 14' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row6:col2'])
- dropped unlinked row (NIL): 'θ 15' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row7:col2'])
- dropped unlinked row (NIL): 'exp(θ 2 )' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row8:col2'])
- dropped unlinked row (NIL): 'θ 8' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row9:col2'])
- dropped unlinked row (NIL): 'θ 9' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row10:col2'])
- dropped duplicate Q900 ('exp(θ 3 )*24', value '0.740') — already have one for this compound
- dropped unlinked row (NIL): 'exp(θ 4 )' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row13:col2'])
- dropped duplicate Q900 ('exp(θ 5 )*24', value '0.092') — already have one for this compound
- dropped unlinked row (NIL): 'exp(θ 6 )' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row15:col2'])
- dropped unlinked row (NIL): 'Interindividual variability (% RSE)' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row17:col2'])
- implicit units: 'θ 12' → 1/h (from the popPK convention: 'The parameter is a first-order transfer rate constant (k12). In population pharmacokinetic modeling, first-order rate co')
- implicit units: 'V c' — the LLM proposed '%', whose dimension does not fit Q63; left unset
- implicit units: 'V 2' — the LLM proposed '%', whose dimension does not fit Q64; left unset
- implicit units: 'V 3' — the LLM proposed '%', whose dimension does not fit Q77; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tislelizumab
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- molar mass: none found for 'tislelizumab' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp412880-tbl-0003:row1:col3 = '0.154 (0.151, 0.157)'
- unparsed cell psp412880-tbl-0003:row2:col3 = '0.562 (0.491, 0.631)'
- unparsed cell psp412880-tbl-0003:row3:col3 = '−0.443 (−0.648, −0.229)'
- unparsed cell psp412880-tbl-0003:row4:col3 = '0.0757 (0.056, 0.0953)'
- unparsed cell psp412880-tbl-0003:row5:col3 = '0.110 (0.0783, 0.146)'
- unparsed cell psp412880-tbl-0003:row6:col3 = '0.0778 (−0.00319, 0.161)'
- unparsed cell psp412880-tbl-0003:row7:col3 = '−0.215 (−0.294, −0.137)'
- unparsed cell psp412880-tbl-0003:row8:col3 = '3.05 (3.02, 3.08)'
- unparsed cell psp412880-tbl-0003:row9:col3 = '0.395 (0.354, 0.437)'
- unparsed cell psp412880-tbl-0003:row10:col3 = '−0.116 (−0.135, −0.0997)'
- unparsed cell psp412880-tbl-0003:row11:col3 = '0.0957 (0.0602, 0.132)'
- unparsed cell psp412880-tbl-0003:row12:col3 = '0.746 (0.616, 0.944)'
- unparsed cell psp412880-tbl-0003:row13:col1 = 'Peripheral volume, V 2 (L)'
- unparsed cell psp412880-tbl-0003:row13:col3 = '1.27 (1.14, 1.43)'
- unparsed cell psp412880-tbl-0003:row14:col3 = '0.0923 (0.0796, 0.104)'
- unparsed cell psp412880-tbl-0003:row15:col1 = 'Peripheral volume, V 3 (L)'
- unparsed cell psp412880-tbl-0003:row15:col3 = '2.06 (1.81, 2.30)'
- unparsed cell psp412880-tbl-0003:row16:col3 = '0.0198 (0.0167, 0.0227)'
- unparsed cell psp412880-tbl-0003:row17:col3 = '26.4 (25.2, 27.7)'
- unparsed cell psp412880-tbl-0003:row18:col2 = '16.7 (15.8, 17.6)'
- unparsed cell psp412880-tbl-0003:row19:col2 = '76.3 (65.0, 86.8)'
- unparsed cell psp412880-tbl-0003:row20:col2 = '97.3 (85.7, 110)'
- unparsed cell psp412880-tbl-0003:row21:col3 = '12.6 (12.0, 13.2)'
- unparsed cell psp412880-tbl-0003:row22:col3 = '2.06 (1.79, 2.33)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412880-tbl-0003:row11:col2'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 | not captured | not captured | not captured | ['psp412880-tbl-0003:row18:col1'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 | not captured | not captured | not captured | ['psp412880-tbl-0003:row19:col1'] |
| C5_unit_missing_Q77 | fail | [length] ** 3 | not captured | not captured | not captured | ['psp412880-tbl-0003:row20:col1'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tislelizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Budha_2023` / `Budha_2023::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:11 UTC</sub>
