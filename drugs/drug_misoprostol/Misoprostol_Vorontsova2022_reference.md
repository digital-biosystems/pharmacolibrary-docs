<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;misoprostol&quot;,&quot;href&quot;:&quot;drugs/drug_misoprostol/&quot;},{&quot;label&quot;:&quot;Vorontsova_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Misoprostol_Vorontsova2022_reference&quot;,&quot;label&quot;:&quot;Vorontsova_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_misoprostol/Misoprostol_Vorontsova2022_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# misoprostol — `Misoprostol_Vorontsova2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `kabs`, `Vmax`, `Km`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** a structural parameter has the wrong dimension.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Compare unit_verbatim with unit_canonical in _interpretv2.yaml for that parameter.
3. A misread unit in transcribe is the usual cause.

<sub>owner: **scholar** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `misoprostol`, measured `misoprostol acid`.

## Citation
Vorontsova Y; Haas DM; Flannery K; Masters AR; Silva LL; Pierson RC; et al. et al. (2022). Clinical and translational science 15
  ·  DOI: [10.1111/cts.13306](https://doi.org/10.1111/cts.13306)

## Model component
<dbs-pgx drug="misoprostol" model-id="Misoprostol_Vorontsova2022_reference" status="rejected" stale="false" population="women undergoing labor induction at term" measured-compound="misoprostol acid" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/Fb, L/h | `Q27` · CL/F | 730 | L/h | 0.00020277777777777777 | [l] / [h] | 22.5 | llm (0.6) | cts13306-tbl-0002:row1:col1, cts13306-tbl-0002:row1:col2, cts13306-tbl-0002:row1:col3 | — | not captured |
| V/Fb, L | `Q76` · V/F | 610 | L | 0.61 | [l] | 33.4 | llm (0.6) | cts13306-tbl-0002:row2:col1, cts13306-tbl-0002:row2:col2, cts13306-tbl-0002:row2:col3 | — | not captured |
| ka, 1/h (buccal, 25 μg) | `Q49` · kabs | 0.709 | buccal, 25 μg | not captured | [buccal] | 15.7 | exact (1.0) | cts13306-tbl-0002:row4:col1, cts13306-tbl-0002:row4:col2, cts13306-tbl-0002:row4:col3 | — | not captured |
| Vmax/Fb, pg/ml | `Q66` · Vmax | 5.45 | pg/ml | not captured | [pg] / [ml] | 12.8 | llm (0.6) | cts13306-tbl-0002:row8:col1, cts13306-tbl-0002:row8:col2, cts13306-tbl-0002:row8:col3 | — | not captured |
| Km, pg | `Q1` · Km | 2.5 | pg | not captured | [pg] | 41.2 | exact (1.0) | cts13306-tbl-0002:row9:col1, cts13306-tbl-0002:row9:col2, cts13306-tbl-0002:row9:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Fv/b' — extend the ontology if this is a real PK parameter (source ['cts13306-tbl-0002:row3:col1', 'cts13306-tbl-0002:row3:col2', 'cts13306-tbl-0002:row3:col3'])
- unit_dimension_unknown: 'buccal, 25 μg' (kabs)
- unit_dimension_unknown: 'buccal, 50 μg' (kabs)
- dropped duplicate Q49 ('ka, 1/h (buccal, 50 μg)', value '0.537') — already have one for this compound
- unit_dimension_unknown: 'vaginal, 25 μg' (kabs)
- dropped duplicate Q49 ('ka, 1/h (vaginal, 25 μg)', value '0.464') — already have one for this compound
- unit_dimension_unknown: 'vaginal, 50 μg' (kabs)
- dropped duplicate Q49 ('ka, 1/h (vaginal, 50 μg)', value '0.24') — already have one for this compound
- unit_dimension_mismatch: 'Vmax/Fb, pg/ml' → Q66 (unit '[mass] / [length] ** 3' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Km, pg' → Q1 (unit '[mass]' vs ontology '[mass] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=misoprostol acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cts13306-tbl-0002:row1:col4 = '705 (431–1099)'
- unparsed cell cts13306-tbl-0002:row2:col4 = '632 (343–1008)'
- unparsed cell cts13306-tbl-0002:row3:col4 = '2.4 (1.63–4.77)'
- unparsed cell cts13306-tbl-0002:row4:col4 = '0.724 (0.54–0.92)'
- unparsed cell cts13306-tbl-0002:row5:col4 = '0.531(0.37–0.63)'
- unparsed cell cts13306-tbl-0002:row6:col4 = '0.507 (0.2–1)'
- unparsed cell cts13306-tbl-0002:row7:col4 = '0.246 (0.103–0.453)'
- unparsed cell cts13306-tbl-0002:row8:col4 = '5.64 (3.141–10.453)'
- unparsed cell cts13306-tbl-0002:row9:col4 = '2.864 (0.73–10.41)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | fail | [mass] | pg | not captured | not captured | ['cts13306-tbl-0002:row9:col1', 'cts13306-tbl-0002:row9:col2', 'cts13306-tbl-0002:row9:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts13306-tbl-0002:row1:col1', 'cts13306-tbl-0002:row1:col2', 'cts13306-tbl-0002:row1:col3'] |
| C5_dimension_Q66 | fail | [mass] / [length] ** 3 | pg/ml | not captured | not captured | ['cts13306-tbl-0002:row8:col1', 'cts13306-tbl-0002:row8:col2', 'cts13306-tbl-0002:row8:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts13306-tbl-0002:row2:col1', 'cts13306-tbl-0002:row2:col2', 'cts13306-tbl-0002:row2:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 730 L/h | not captured | not captured | ['cts13306-tbl-0002:row1:col1', 'cts13306-tbl-0002:row1:col2', 'cts13306-tbl-0002:row1:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 610 L | not captured | not captured | ['cts13306-tbl-0002:row2:col1', 'cts13306-tbl-0002:row2:col2', 'cts13306-tbl-0002:row2:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_misoprostol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Vorontsova_2022` / `Vorontsova_2022::reference`)


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
