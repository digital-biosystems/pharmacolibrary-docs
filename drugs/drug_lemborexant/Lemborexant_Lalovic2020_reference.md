<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;lemborexant&quot;,&quot;href&quot;:&quot;drugs/drug_lemborexant/&quot;},{&quot;label&quot;:&quot;Lalovic_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lemborexant — `Lemborexant_Lalovic2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Lalovic B et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2020)
  ·  DOI: [10.1002/jcph.1683](https://doi.org/10.1002/jcph.1683)

## Model component
<dbs-pgx drug="lemborexant" model-id="Lemborexant_Lalovic2020_reference" status="rejected" stale="false" population="subjects with insomnia disorder (phases 1-3, healthy and insomnia subjects)" measured-compound="lemborexant" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted, plus 3 covariate effects.

**Parameterization:** CL/F, Q3/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 22.7 | L/h | 6.305555555555556e-06 | [l] / [h] | 0.252 | exact (1.0) | jcph1683-tbl-0002:row1:col1, jcph1683-tbl-0002:row1:col2, jcph1683-tbl-0002:row1:col4 | — | 48.1 (None% RSE) |
| V2/F (L) | `Q82` · V2/F | 9.09 | L | 0.00909 | [l] | 0.0909 | exact (1.0) | jcph1683-tbl-0002:row5:col1, jcph1683-tbl-0002:row5:col2, jcph1683-tbl-0002:row5:col4 | — | 142 (None% RSE) |
| Q3/F (L/h) | `Q309` · Q3/F | 32.1 | L/h | 8.916666666666667e-06 | [l] / [h] | 0.0417 | exact (1.0) | jcph1683-tbl-0002:row6:col1, jcph1683-tbl-0002:row6:col2, jcph1683-tbl-0002:row6:col4 | — | 56.8 (None% RSE) |
| V3/F (L) | `Q78` · V3/F | 278 | L | 0.278 | [l] | 0.0156 | exact (1.0) | jcph1683-tbl-0002:row7:col1, jcph1683-tbl-0002:row7:col2, jcph1683-tbl-0002:row7:col4 | — | 82.0 (None% RSE) |
| D1, capsule (h) | `Q310` · D1 | 0.467 | h | 1681.2 | [h] | not captured | llm_confirmed (0.6) | jcph1683-tbl-0002:row10:col1 | — | 167 (None% RSE) |
| Ka, capsule (h−1) | `Q49` · kabs | 0.532 | h−1 | 0.0001477777777777778 | [1] / [h] | not captured | llm_confirmed (0.6) | jcph1683-tbl-0002:row13:col1 | — | 43.8 (None% RSE) |
| ALAG1 (h) | `Q83` · tlag | 0.403 | h | 1450.8000000000002 | [h] | not captured | llm (0.6) | jcph1683-tbl-0002:row16:col1 | — | not captured |
| theta_cl_f_bmi_power | `Q900` · theta_cl_f_bmi_power | -0.428 | not captured | not captured | not captured | 12.9 | not captured (not captured) | jcph1683-tbl-0002:row2:col1, jcph1683-tbl-0002:row2:col2, jcph1683-tbl-0002:row2:col4 | — | not captured |
| theta_kabs_food_ka | `Q900` · theta_kabs_food_ka | 0.695 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1683-tbl-0002:row15:col1 | — | not captured |
| theta_q40_food_f1 | `Q900` · theta_q40_food_f1 | 1.21 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1683-tbl-0002:row17:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'V2/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'Q3/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'V3/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'Q4/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'V4/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'D1' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'Ka' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'F1' routed out of structural estimates ('Interindividual variability (%CV)')
- table section residual_error: 'Proportional (TAD &gt; 3 h), % CV' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive (TAD &gt;3 h), ng/mL' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional (TAD ≤ 3 h), % CV' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive (TAD ≤3 h), ng/mL' routed out of structural estimates ('Residual variability')
- dropped duplicate Q27 ('CL/F, ALP', value '-0.118') — already have one for this compound
- dropped duplicate Q27 ('CL/F, elderly', value '0.739') — already have one for this compound
- dropped unlinked row (NIL): 'Q4/F (L/h)' — extend the ontology if this is a real PK parameter (source ['jcph1683-tbl-0002:row8:col1', 'jcph1683-tbl-0002:row8:col2', 'jcph1683-tbl-0002:row8:col4'])
- dropped unlinked row (NIL): 'V4/F (L)' — extend the ontology if this is a real PK parameter (source ['jcph1683-tbl-0002:row9:col1', 'jcph1683-tbl-0002:row9:col2', 'jcph1683-tbl-0002:row9:col4'])
- dropped duplicate Q310 ('D1, tablet', value '0.254') — already have one for this compound
- dropped duplicate Q310 ('D1, nighttime dosing', value '2.33') — already have one for this compound
- dropped duplicate Q49 ('Ka, tablet', value '1.12') — already have one for this compound
- dropped value-less row: 'ALAG1'
- dropped value-less row: 'CI'
- dropped value-less row: 'CL/F'
- dropped value-less row: 'CV'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['jcph1683-tbl-0002:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'D1'
- dropped value-less row: 'F1'
- dropped value-less row: 'Ka'
- dropped value-less row: 'Q2/F'
- dropped value-less row: 'Q3/F'
- dropped value-less row: 'TAD'
- dropped value-less row: 'V2/F'
- dropped value-less row: 'V3/F'
- dropped value-less row: 'V4/F'
- dropped value-less row: 'θk=θTV,k·(covi,contrefcont)θk,cont'
- dropped value-less row: 'θj=θTV,j·θj,catcovi,cat'
- dropped value-less row: 'a'
- dropped value-less row: 'b'
- covariate effect for Q40 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lemborexant
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell jcph1683-tbl-0002:row1:col3 = '(22.6‐22.8)'
- unparsed cell jcph1683-tbl-0002:row1:col5 = '(23.2‐24.2)'
- unparsed cell jcph1683-tbl-0002:row2:col3 = '(−0.536 to −0.320)'
- unparsed cell jcph1683-tbl-0002:row2:col5 = '(−0.579 to −0.348)'
- unparsed cell jcph1683-tbl-0002:row3:col3 = '(−0.167 to −0.069)'
- unparsed cell jcph1683-tbl-0002:row3:col5 = '(−0.34 to −0.22)'
- unparsed cell jcph1683-tbl-0002:row4:col3 = '(0.735 to −0.753)'
- unparsed cell jcph1683-tbl-0002:row4:col5 = '(0.680‐0.714)'
- unparsed cell jcph1683-tbl-0002:row5:col3 = '(9.07‐9.11)'
- unparsed cell jcph1683-tbl-0002:row5:col5 = '(8.62‐14.25)'
- unparsed cell jcph1683-tbl-0002:row6:col3 = '(32.1‐31.1)'
- unparsed cell jcph1683-tbl-0002:row6:col5 = '(30.68‐35.94)'
- unparsed cell jcph1683-tbl-0002:row7:col3 = '(278‐278)'
- unparsed cell jcph1683-tbl-0002:row7:col5 = '(254‐322)'
- unparsed cell jcph1683-tbl-0002:row8:col3 = '(30.9‐31.1)'
- unparsed cell jcph1683-tbl-0002:row8:col5 = '(26.9‐32.7)'
- unparsed cell jcph1683-tbl-0002:row9:col3 = '(782‐784)'
- unparsed cell jcph1683-tbl-0002:row9:col5 = '(732‐832)'
- unparsed cell jcph1683-tbl-0002:row19:col3 = '(45.1‐51.1)'
- unparsed cell jcph1683-tbl-0002:row19:col5 = '(44.7‐49.3)'
- unparsed cell jcph1683-tbl-0002:row20:col3 = '(86.7‐197.3)'
- unparsed cell jcph1683-tbl-0002:row20:col5 = '(107‐158)'
- unparsed cell jcph1683-tbl-0002:row21:col3 = '(40.4‐73.2)'
- unparsed cell jcph1683-tbl-0002:row21:col5 = '(32.1‐50.4)'
- unparsed cell jcph1683-tbl-0002:row22:col3 = '(61.3‐103)'
- unparsed cell jcph1683-tbl-0002:row22:col5 = '(58.9‐73.0)'
- unparsed cell jcph1683-tbl-0002:row23:col3 = '(37.6‐55.4)'
- unparsed cell jcph1683-tbl-0002:row23:col5 = '(41.6‐64.0)'
- unparsed cell jcph1683-tbl-0002:row24:col3 = '(34.1‐48.7)'
- unparsed cell jcph1683-tbl-0002:row24:col5 = '(33.5‐44.1)'
- unparsed cell jcph1683-tbl-0002:row29:col3 = '(14.0‐14.6)'
- unparsed cell jcph1683-tbl-0002:row29:col5 = '(13.4‐15.0)'
- unparsed cell jcph1683-tbl-0002:row30:col3 = '(0.012‐0.026)'
- unparsed cell jcph1683-tbl-0002:row30:col5 = '(0.011‐0.026)'
- unparsed cell jcph1683-tbl-0002:row31:col3 = '(32.2‐33.6)'
- unparsed cell jcph1683-tbl-0002:row31:col5 = '(32.1‐34.4)'
- unparsed cell jcph1683-tbl-0002:row32:col3 = '(2.48‐2.76)'
- unparsed cell jcph1683-tbl-0002:row32:col5 = '(0.44‐3.51)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph1683-tbl-0002:row1:col1', 'jcph1683-tbl-0002:row1:col2', 'jcph1683-tbl-0002:row1:col4'] |
| C5_dimension_Q309 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph1683-tbl-0002:row6:col1', 'jcph1683-tbl-0002:row6:col2', 'jcph1683-tbl-0002:row6:col4'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['jcph1683-tbl-0002:row10:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['jcph1683-tbl-0002:row13:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph1683-tbl-0002:row7:col1', 'jcph1683-tbl-0002:row7:col2', 'jcph1683-tbl-0002:row7:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph1683-tbl-0002:row5:col1', 'jcph1683-tbl-0002:row5:col2', 'jcph1683-tbl-0002:row5:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['jcph1683-tbl-0002:row16:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 22.7 L/h | not captured | not captured | ['jcph1683-tbl-0002:row1:col1', 'jcph1683-tbl-0002:row1:col2', 'jcph1683-tbl-0002:row1:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 9.09 L | not captured | not captured | ['jcph1683-tbl-0002:row5:col1', 'jcph1683-tbl-0002:row5:col2', 'jcph1683-tbl-0002:row5:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lemborexant/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lalovic_2020` / `Lalovic_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 21:09 UTC</sub>
