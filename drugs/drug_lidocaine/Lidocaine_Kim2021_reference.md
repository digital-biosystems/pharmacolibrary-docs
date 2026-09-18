<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;lidocaine&quot;,&quot;href&quot;:&quot;drugs/drug_lidocaine/&quot;},{&quot;label&quot;:&quot;Kim_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lidocaine_Bursi2017_reference&quot;,&quot;label&quot;:&quot;Bursi_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_lidocaine/Lidocaine_Bursi2017_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lidocaine_Reichel1998_reference&quot;,&quot;label&quot;:&quot;Reichel_1998_reference&quot;,&quot;href&quot;:&quot;drugs/drug_lidocaine/Lidocaine_Reichel1998_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lidocaine_He2025_reference&quot;,&quot;label&quot;:&quot;He_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_lidocaine/Lidocaine_He2025_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lidocaine_Kim2021_reference&quot;,&quot;label&quot;:&quot;Kim_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_lidocaine/Lidocaine_Kim2021_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lidocaine — `Lidocaine_Kim2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `t1/2ka`, `MTT`, `Vmax`, `Km`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** a structural parameter has the wrong dimension; a parameter falls outside the physiological window.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Compare unit_verbatim with unit_canonical in _interpretv2.yaml for that parameter.
3. A misread unit in transcribe is the usual cause.
4. Confirm the value and unit against the paper before treating it as an error.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Kim JH; Kang DW; Choi GW; Lee SB; Lee S; Cho HY et al. (2021). Pharmaceutics 13
  ·  DOI: [10.3390/pharmaceutics13020203](https://doi.org/10.3390/pharmaceutics13020203)

## Model component
<dbs-pgx drug="lidocaine" model-id="Lidocaine_Kim2021_reference" status="rejected" stale="false" population="male Sprague-Dawley rats" measured-compound="lidocaine" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Parameterization:** CLm/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka1 (h−1) | `Q95` · t1/2ka | 5.92 | h−1 | not captured | [1] / [h] | 12.97 | llm (0.6) | pharmaceutics-13-00203-t004:row3:col2, pharmaceutics-13-00203-t004:row3:col3 | — | not captured |
| V1/F (L) | `Q290` · V1/F | 2.57 | L | 0.00257 | [l] | 13.66 | exact (1.0) | pharmaceutics-13-00203-t004:row4:col2, pharmaceutics-13-00203-t004:row4:col3 | — | not captured |
| V2/F (L) | `Q82` · V2/F | 0.07 | L | 7.000000000000001e-05 | [l] | 3.22 | exact (1.0) | pharmaceutics-13-00203-t004:row5:col2, pharmaceutics-13-00203-t004:row5:col3 | — | not captured |
| CLd/F (L/h) | `Q69` · Q/F | 0.13 | L/h | 3.611111111111111e-08 | [l] / [h] | 0.37 | exact (1.0) | pharmaceutics-13-00203-t004:row6:col2, pharmaceutics-13-00203-t004:row6:col3 | — | not captured |
| Fr | `Q43` · FR | 0.373 | not captured | not captured | not captured | 1.19 | exact (1.0) | pharmaceutics-13-00203-t004:row7:col2, pharmaceutics-13-00203-t004:row7:col3 | — | not captured |
| MTT (h) | `Q81` · MTT | 0.64 | h | not captured | [h] | 11.35 | exact (1.0) | pharmaceutics-13-00203-t004:row8:col2, pharmaceutics-13-00203-t004:row8:col3 | — | not captured |
| Vmax (nmol/h) | `Q66` · Vmax | 423962.94 | nmol/h | not captured | [nM] / [h] | 10.05 | special_case (0.95) | pharmaceutics-13-00203-t004:row11:col2, pharmaceutics-13-00203-t004:row11:col3 | — | not captured |
| Km (nmol/L) | `Q1` · Km | 136808.67 | nmol/L | not captured | [nM] / [l] | 18.62 | exact (1.0) | pharmaceutics-13-00203-t004:row12:col2, pharmaceutics-13-00203-t004:row12:col3 | — | not captured |
| CLm1/F (L/h) | `Q351` · CLm/F | 14.94 | L/h | 4.15e-06 | [l] / [h] | 15.31 | llm_confirmed (0.6) | pharmaceutics-13-00203-t004:row13:col2, pharmaceutics-13-00203-t004:row13:col3 | — | not captured |
| Fm1 | `Q45` · fm | 0.65 | not captured | not captured | not captured | 1.06 | llm (0.6) | pharmaceutics-13-00203-t004:row14:col2, pharmaceutics-13-00203-t004:row14:col3 | — | not captured |
| ω CLd | `Q30` · Q | 0.19 | Lower, Upper | not captured | [l] · [ower] | 6.84 | llm_confirmed (0.6) | pharmaceutics-13-00203-t004:row19:col2, pharmaceutics-13-00203-t004:row19:col3 | — | not captured |
| ε1 | `Q900` · equation variable | 0.49 | Lower, Upper | not captured | [l] · [ower] | 2.02 | llm (0.6) | pharmaceutics-13-00203-t004:row25:col2, pharmaceutics-13-00203-t004:row25:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Ka1 (h−1)' → Q95 (unit '1 / [time]' vs ontology '[time]') — route to review
- dropped unlinked row (NIL): 'Ntr' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00203-t004:row9:col2', 'pharmaceutics-13-00203-t004:row9:col3'])
- unit_dimension_mismatch: 'Ka2(h−1)' → Q95 (unit '1 / [time]' vs ontology '[time]') — route to review
- dropped duplicate Q95 ('Ka2(h−1)', value '1.67') — already have one for this compound
- unit_dimension_mismatch: 'Vmax (nmol/h)' → Q66 (unit '[substance] / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Km (nmol/L)' → Q1 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q351 ('CLm2/F (L/h)', value '1.09') — already have one for this compound
- dropped duplicate Q45 ('Fm2', value '0.47') — already have one for this compound
- routed 'ω V' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- unit_dimension_unknown: 'Lower, Upper' (Q)
- unit_dimension_unknown: 'Lower, Upper' (Vmax)
- dropped duplicate Q66 ('ω Vmax', value '0.08') — already have one for this compound
- unit_dimension_unknown: 'Lower, Upper' (Km)
- dropped duplicate Q1 ('ω Km', value '0.17') — already have one for this compound
- routed 'ω CLm1' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω CLm2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- unit_dimension_unknown: 'Lower, Upper' (equation variable)
- dropped unlinked row (NIL): 'ε2' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00203-t004:row26:col2', 'pharmaceutics-13-00203-t004:row26:col3'])
- dropped unlinked row (NIL): 'ε3' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00203-t004:row27:col2', 'pharmaceutics-13-00203-t004:row27:col3'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lidocaine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell pharmaceutics-13-00203-t004:row3:col4 = '(5.19, 6.64)'
- unparsed cell pharmaceutics-13-00203-t004:row4:col1 = 'Apparent volume of distribution of compartment 1'
- unparsed cell pharmaceutics-13-00203-t004:row4:col4 = '(2.23, 2.89)'
- unparsed cell pharmaceutics-13-00203-t004:row5:col1 = 'Apparent volume of distribution of compartment 2'
- unparsed cell pharmaceutics-13-00203-t004:row5:col4 = '(0.06, 0.07)'
- unparsed cell pharmaceutics-13-00203-t004:row6:col4 = '(0.1323, 0.1332)'
- unparsed cell pharmaceutics-13-00203-t004:row7:col4 = '(0.371, 0.374)'
- unparsed cell pharmaceutics-13-00203-t004:row8:col4 = '(0.57, 0.70)'
- unparsed cell pharmaceutics-13-00203-t004:row9:col4 = '(4.96, 4.98)'
- unparsed cell pharmaceutics-13-00203-t004:row10:col4 = '(1.59, 1.74)'
- unparsed cell pharmaceutics-13-00203-t004:row11:col4 = '(383,479.15, 464,446.73)'
- unparsed cell pharmaceutics-13-00203-t004:row12:col4 = '(112,613.9, 161,003.44)'
- unparsed cell pharmaceutics-13-00203-t004:row13:col4 = '(12.76, 17.11)'
- unparsed cell pharmaceutics-13-00203-t004:row14:col4 = '(0.644, 0.646)'
- unparsed cell pharmaceutics-13-00203-t004:row15:col4 = '(1.04, 1.14)'
- unparsed cell pharmaceutics-13-00203-t004:row16:col4 = '(0.46, 0.47)'
- unparsed cell pharmaceutics-13-00203-t004:row18:col4 = '(0.127, 0.152)'
- unparsed cell pharmaceutics-13-00203-t004:row19:col4 = '(0.181, 0.208)'
- unparsed cell pharmaceutics-13-00203-t004:row20:col4 = '(0.077, 0.089)'
- unparsed cell pharmaceutics-13-00203-t004:row21:col4 = '(0.159, 0.183)'
- unparsed cell pharmaceutics-13-00203-t004:row22:col4 = '(0.350, 0.402)'
- unparsed cell pharmaceutics-13-00203-t004:row23:col1 = 'IIV of CLm2'
- unparsed cell pharmaceutics-13-00203-t004:row23:col4 = '(0.216, 0.248)'
- unparsed cell pharmaceutics-13-00203-t004:row25:col4 = '(0.485, 0.504)'
- unparsed cell pharmaceutics-13-00203-t004:row26:col4 = '(0.562, 0.597)'
- unparsed cell pharmaceutics-13-00203-t004:row27:col4 = '(0.399, 0.430)'
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | fail | [substance] / [length] ** 3 | nmol/L | not captured | not captured | ['pharmaceutics-13-00203-t004:row12:col2', 'pharmaceutics-13-00203-t004:row12:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-13-00203-t004:row4:col2', 'pharmaceutics-13-00203-t004:row4:col3'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00203-t004:row13:col2', 'pharmaceutics-13-00203-t004:row13:col3'] |
| C5_dimension_Q66 | fail | [substance] / [time] | nmol/h | not captured | not captured | ['pharmaceutics-13-00203-t004:row11:col2', 'pharmaceutics-13-00203-t004:row11:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00203-t004:row6:col2', 'pharmaceutics-13-00203-t004:row6:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-13-00203-t004:row5:col2', 'pharmaceutics-13-00203-t004:row5:col3'] |
| C5_dimension_Q95 | fail | 1 / [time] | h−1 | not captured | not captured | ['pharmaceutics-13-00203-t004:row3:col2', 'pharmaceutics-13-00203-t004:row3:col3'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | Fm=0.65 present with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 2.57 L | not captured | not captured | ['pharmaceutics-13-00203-t004:row4:col2', 'pharmaceutics-13-00203-t004:row4:col3'] |
| C9_phys_window_Q82 | fail | volume within physiological range | 0.07 L | not captured | not captured | ['pharmaceutics-13-00203-t004:row5:col2', 'pharmaceutics-13-00203-t004:row5:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lidocaine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kim_2021` / `Kim_2021::reference`)


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
