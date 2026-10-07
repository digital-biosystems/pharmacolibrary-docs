<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;sacituzumab govitecan&quot;,&quot;href&quot;:&quot;drugs/drug_sacituzumab_govitecan/&quot;},{&quot;label&quot;:&quot;Sathe_2024 \u00b7 final&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sacituzumab govitecan — `SacituzumabGovitecan_Sathe2024_final`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Sathe AG et al., Population Pharmacokinetics of Sacituzu…, Clinical pharmacokinetics (2024)
  ·  DOI: [10.1007/s40262-024-01366-3](https://doi.org/10.1007/s40262-024-01366-3)

## Model component
<dbs-pgx drug="sacituzumab govitecan" model-id="SacituzumabGovitecan_Sathe2024_final" status="rejected" stale="false" population="patients with metastatic triple-negative breast cancer and other solid tumors" measured-compound="sacituzumab_govitecan" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 8 extracted, plus 7 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLSG, L/h | `Q22` · CL | 0.133 | L/h | 3.6944444444444447e-08 | [l] / [h] | 1.01 | llm (0.6) | Tab1:row1:col1 | — | not captured |
| QSG, L/h | `Q30` · Q | 0.006 | L/h | 1.6666666666666667e-09 | [l] / [h] | 3.07 | llm (0.6) | Tab1:row2:col1 | — | not captured |
| V1SG, L | `Q63` · V1 | 2.770 | L | 0.00277 | [l] | 0.87 | exact (1.0) | Tab1:row3:col1 | — | not captured |
| V2SG, L | `Q64` · V2 | 0.908 | L | 0.0009080000000000001 | [l] | 3.29 | exact (1.0) | Tab1:row4:col1 | — | not captured |
| baseline_serum_albumin_exponent_on_clsg | `Q900` · baseline_serum_albumin_exponent_on_clsg | -0.355 | not captured | not captured | not captured | 14.90 | not captured (not captured) | Tab1:row8:col1 | — | not captured |
| CLtAB, L/h | `Q22` · CL | 0.016 | L/h | 4.444444444444444e-09 | [l] / [h] | 2.76 | llm (0.6) | Sathe_2024_table_3:row0:col1 | — | not captured |
| QtAB, L/h | `Q30` · Q | 0.010 | L/h | 2.777777777777778e-09 | [l] / [h] | 9.62 | llm (0.6) | Sathe_2024_table_3:row1:col1 | — | not captured |
| V1tAB, L | `Q63` · V1 | 3.06 | L | 0.0030600000000000002 | [l] | 1.18 | exact (1.0) | Sathe_2024_table_3:row2:col1 | — | not captured |
| V2tAB, L | `Q64` · V2 | 1.20 | L | 0.0012 | [l] | 10.9 | exact (1.0) | Sathe_2024_table_3:row3:col1 | — | not captured |
| male_sex_on_v1tab | `Q900` · male_sex_on_v1tab | 0.121 | not captured | not captured | not captured | 23.5 | not captured (not captured) | Sathe_2024_table_3:row8:col1 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.508 | not captured | not captured | not captured | 6.77 | not captured (not captured) | Tab1:row6:col1 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.532 | not captured | not captured | not captured | 6.28 | not captured (not captured) | Tab1:row7:col1 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.372 | not captured | not captured | not captured | 10.2 | not captured (not captured) | Sathe_2024_table_3:row4:col1 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.446 | not captured | not captured | not captured | 2.26 | not captured (not captured) | Sathe_2024_table_3:row5:col1 | — | not captured |
| theta_q319_albumin_power | `Q900` · theta_q319_albumin_power | -0.735 | not captured | not captured | not captured | 20.2 | not captured (not captured) | Sathe_2024_table_3:row6:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate level 'Baseline serum albumin exponent on CLSG' → Q900:baseline_serum_albumin_exponent_on_clsg = -0.355 (power on Q22)
- dropped unlinked row (NIL): 'Other cancer type on CLtAB' — extend the ontology if this is a real PK parameter (source ['Sathe_2024_table_3:row7:col1'])
- covariate level 'Male sex on V1tAB' → Q900:male_sex_on_v1tab = 0.121 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'Maximum relative reduction of CLtAB, %' — extend the ontology if this is a real PK parameter (source ['Sathe_2024_table_3:row10:col1'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sacituzumab_govitecan
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at route_to_review — not promoted
- model-stage split: 'final model estimate (%rse)' is the final model of Sathe_2024 (paper reports 3 stages: final model estimate (%rse), final model estimatea (%rse), untransformed estimate); same population, different model-building step
- row roles (LLM): model_class=compartmental; 34/34 row label(s) assigned, 14 linked by role; re-tagged parent→free SN-38 ×13, parent→total antibody ×14

**Extraction notes:**
- unparsed cell Tab1:row1:col2 = '0.133 (0.131 to 0.137)'
- unparsed cell Tab1:row2:col2 = '0.006 (0.005 to 0.006)'
- unparsed cell Tab1:row3:col2 = '2.770 (2.72 to 2.82)'
- unparsed cell Tab1:row4:col2 = '0.906 (0.852 to 0.974)'
- unparsed cell Tab1:row5:col2 = '0.011 (0.008 to 0.016)'
- unparsed cell Tab1:row6:col2 = '0.503 (0.428 to 0.567)'
- unparsed cell Tab1:row7:col2 = '0.526 (0.463 to 0.593)'
- unparsed cell Tab1:row8:col2 = '–0.355 (–0.467 to –0.256)'
- unparsed cell Tab1:row9:col2 = '0.005 (0.004 to 0.008)'
- unparsed cell Tab1:row10:col2 = '0.202 (0.182 to 0.23)'
- unparsed cell Sathe_2024_table_2:row0:col2 = '–2.35 (–2.48 to –2.22)'
- unparsed cell Sathe_2024_table_2:row1:col2 = '6.00 (5.89 to 6.13)'
- unparsed cell Sathe_2024_table_2:row2:col2 = '5.51 (5.34 to 5.70)'
- unparsed cell Sathe_2024_table_2:row5:col2 = '0.341 (0.258 to 0.430)'
- unparsed cell Sathe_2024_table_2:row6:col2 = '0.412 (0.299 to 0.555)'
- unparsed cell Sathe_2024_table_2:row7:col2 = '0.494 (0.355 to 0.648)'
- unparsed cell Sathe_2024_table_2:row8:col2 = '0.011 (0.009 to 0.013)'
- unparsed cell Sathe_2024_table_2:row9:col2 = '–0.224 (–0.361 to 0.038)'
- unparsed cell Sathe_2024_table_2:row10:col2 = '–1.05 (–1.33 to –0.860)'
- unparsed cell Sathe_2024_table_2:row11:col2 = '0.274 (0.191 to 0.370)'
- companion parameter table 2 transcribed (14 record(s))
- unparsed cell Sathe_2024_table_3:row0:col2 = '0.016 (0.015 to 0.018)'
- unparsed cell Sathe_2024_table_3:row1:col2 = '0.010 (0.008 to 0.012)'
- unparsed cell Sathe_2024_table_3:row2:col2 = '3.06 (2.97 to 3.13)'
- unparsed cell Sathe_2024_table_3:row3:col2 = '1.18 (0.852 to 1.71)'
- unparsed cell Sathe_2024_table_3:row4:col2 = '0.374 (0.210 to 0.548)'
- unparsed cell Sathe_2024_table_3:row5:col2 = '0.449 (0.332 to 0.553)'
- unparsed cell Sathe_2024_table_3:row6:col2 = '–0.756 (–1.04 to –0.404)'
- unparsed cell Sathe_2024_table_3:row7:col2 = '–0.135 (–0.195 to –0.082)'
- unparsed cell Sathe_2024_table_3:row8:col2 = '0.122 (0.068 to 0.182)'
- unparsed cell Sathe_2024_table_3:row9:col2 = '–0.259 (–0.346 to –0.152)'
- unparsed cell Sathe_2024_table_3:row10:col2 = '17.8 (6.85 to 27.3)'
- unparsed cell Sathe_2024_table_3:row12:col2 = '0.206 (0.172 to 0.264)'
- unparsed cell Sathe_2024_table_3:row13:col2 = '26.2 (12.7 to 35.9)'
- unparsed cell Sathe_2024_table_3:row14:col2 = '0.102 (0.073 to 0.132)'
- unparsed cell Sathe_2024_table_3:row15:col2 = '0.045 (0.036 to 0.061)'
- unparsed cell Sathe_2024_table_3:row16:col2 = '0.045 (0.032 to 0.062)'
- companion parameter table 3 transcribed (16 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab1:row1:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Sathe_2024_table_3:row0:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab1:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Sathe_2024_table_3:row1:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row3:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Sathe_2024_table_3:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Sathe_2024_table_3:row3:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.133 | not captured | not captured | ['Tab1:row1:col1'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['KREL'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.133 L/h | not captured | not captured | ['Tab1:row1:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.016 L/h | not captured | not captured | ['Sathe_2024_table_3:row0:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.77 L | not captured | not captured | ['Tab1:row3:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.06 L | not captured | not captured | ['Sathe_2024_table_3:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.908 L | not captured | not captured | ['Tab1:row4:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.2 L | not captured | not captured | ['Sathe_2024_table_3:row3:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_sacituzumab_govitecan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sathe_2024` / `Sathe_2024::final`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 19:58 UTC</sub>
