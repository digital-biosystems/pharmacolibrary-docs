<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;gabapentin&quot;,&quot;href&quot;:&quot;drugs/drug_gabapentin/&quot;},{&quot;label&quot;:&quot;Zhou_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gabapentin_AlZubaydi2024_reference&quot;,&quot;label&quot;:&quot;Al-Zubaydi_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_gabapentin/Gabapentin_AlZubaydi2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gabapentin_Siao2010_reference&quot;,&quot;label&quot;:&quot;Siao_2010_reference&quot;,&quot;href&quot;:&quot;drugs/drug_gabapentin/Gabapentin_Siao2010_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gabapentin_Adrian2018_reference&quot;,&quot;label&quot;:&quot;Adrian_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_gabapentin/Gabapentin_Adrian2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gabapentin_Ahmed2017_reference&quot;,&quot;label&quot;:&quot;Ahmed_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_gabapentin/Gabapentin_Ahmed2017_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gabapentin_Silvola2025_reference&quot;,&quot;label&quot;:&quot;Silvola_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_gabapentin/Gabapentin_Silvola2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gabapentin_Hampton2021_reference&quot;,&quot;label&quot;:&quot;Hampton_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_gabapentin/Gabapentin_Hampton2021_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gabapentin_Larsen2016_reference&quot;,&quot;label&quot;:&quot;Larsen_2016_reference&quot;,&quot;href&quot;:&quot;drugs/drug_gabapentin/Gabapentin_Larsen2016_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gabapentin_Zhou2026_reference&quot;,&quot;label&quot;:&quot;Zhou_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_gabapentin/Gabapentin_Zhou2026_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gabapentin — `Gabapentin_Zhou2026_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `λ2`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** a structural parameter has the wrong dimension.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Compare unit_verbatim with unit_canonical in _interpretv2.yaml for that parameter.
3. A misread unit in transcribe is the usual cause.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Zhou L; Yamamoto PA; Walker M; Conchon Costa AC; Lauretti GR; Dach F; et al. et al. (2026). Frontiers in pharmacology 17
  ·  DOI: [10.3389/fphar.2026.1760901](https://doi.org/10.3389/fphar.2026.1760901)

## Model component
<dbs-pgx drug="gabapentin" model-id="Gabapentin_Zhou2026_reference" status="rejected" stale="false" population="patients with chronic neuropathic pain" measured-compound="gabapentin" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tlag (h) | `Q83` · tlag | 0.34 | h | 1224.0 | [h] | 8.03 | exact (1.0) | T1:row2:col1 | — | 0.52 (14.23% RSE) |
| ka (h-1) | `Q49` · kabs | 0.14 | h-1 | 3.888888888888889e-05 | [1] / [h] | 7.04 | exact (1.0) | T1:row3:col1 | — | 0.15 (45.06% RSE) |
| CL/F (L/h) | `Q27` · CL/F | 10.16 | L/h | 2.8222222222222223e-06 | [l] / [h] | 12.15 | exact (1.0) | T1:row4:col1 | — | not captured |
| logt_egfr_84.85_on_cl_f | `Q900` · logt_egfr_84.85_on_cl_f | 1.34 | not captured | not captured | not captured | 24.38 | not captured (not captured) | T1:row5:col1 | — | not captured |
| V1/F (L) | `Q290` · V1/F | 18.16 | L | 0.01816 | [l] | 15.13 | exact (1.0) | T1:row6:col1 | — | not captured |
| Q (L/h) | `Q30` · Q | 6.58 | L/h | 1.8277777777777777e-06 | [l] / [h] | 18.68 | exact (1.0) | T1:row7:col1 | — | 0.64 (16.19% RSE) |
| V2/F (L) | `Q82` · V2/F | 357.67 | L | 0.35767000000000004 | [l] | 31.27 | exact (1.0) | T1:row8:col1 | — | not captured |
| ke1 (h-1) | `Q47` · kel | 0.53 | h-1 | 0.00014722222222222223 | [1] / [h] | 55.76 | llm (0.6) | T1:row9:col1 | — | not captured |
| ke2 (h-1) | `Q68` · λ2 | 1 | h-1 | not captured | [1] / [h] | not captured | llm (0.6) | T1:row13:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate level 'logt (eGFR/84.85) on CL/F' → Q900:logt_egfr_84.85_on_cl_f = 1.34 (power on Q27)
- dropped unlinked row (NIL): 'OCT2 on ke1' — extend the ontology if this is a real PK parameter (source ['T1:row10:col1'])
- dropped PD-category row 'E0' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T1:row11:col1'])
- dropped PD-category row 'IC50 (ng/mL)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T1:row12:col1'])
- unit_dimension_mismatch: 'ke2 (h-1)' → Q68 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped PD-category row 'Imax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T1:row14:col1'])
- dropped unlinked row (NIL): 'Additive (a)' — extend the ontology if this is a real PK parameter (source ['T1:row24:col1', 'T1:row26:col1'])
- dropped unlinked row (NIL): 'Proportional (b)' — extend the ontology if this is a real PK parameter (source ['T1:row27:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=gabapentin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell T1:row2:col2 = '0.32 (0.23–0.42)'
- unparsed cell T1:row3:col2 = '0.15 (0.13–0.19)'
- unparsed cell T1:row4:col2 = '10.06 (6.57–13.40)'
- unparsed cell T1:row5:col2 = '1.35 (0.56–2.20)'
- unparsed cell T1:row6:col2 = '20.98 (14.43–30.72)'
- unparsed cell T1:row7:col2 = '7.25 (3.82–11.49)'
- unparsed cell T1:row8:col2 = '335.79 (149.49–854.09)'
- unparsed cell T1:row9:col2 = '0.47 (0.14–1.38)'
- unparsed cell T1:row10:col2 = '−2.42 (−4.81–−0.80)'
- unparsed cell T1:row11:col2 = '7.27 (6.01–8.23)'
- unparsed cell T1:row16:col2 = '0.56 (0.37–0.81)'
- unparsed cell T1:row17:col2 = '0.11 (0.037–0.29)'
- unparsed cell T1:row18:col2 = '0.46 (0.32–0.61)'
- unparsed cell T1:row19:col2 = '0.53 (0.30–0.70)'
- unparsed cell T1:row20:col2 = '0.57 (0.34–0.84)'
- unparsed cell T1:row21:col2 = '2.02 (0.91–3.19)'
- unparsed cell T1:row22:col2 = '1.03 (0.47–1.76)'
- unparsed cell T1:row24:col2 = '0.18 (0.13–0.24)'
- unparsed cell T1:row26:col2 = '0.53 (0.36–0.97)'
- unparsed cell T1:row27:col2 = '0.29 (0-0.48)'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q27 | fail | 10.16 | 12.66 | 1.2461 | 0.05 | footnote reference category |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row4:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['T1:row6:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row7:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['T1:row9:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['T1:row3:col1'] |
| C5_dimension_Q68 | fail | 1 / [time] | h-1 | not captured | not captured | ['T1:row13:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['T1:row8:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['T1:row2:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 10.2 L/h | not captured | not captured | ['T1:row4:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 18.2 L | not captured | not captured | ['T1:row6:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 358 L | not captured | not captured | ['T1:row8:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_gabapentin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhou_2026` / `Zhou_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
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
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
