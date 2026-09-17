<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;methotrexate&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/&quot;},{&quot;label&quot;:&quot;Wang_2019 \u00b7 reference&quot;}]"></div>

# methotrexate — `Methotrexate_Wang2019_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `kabs`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** a structural parameter has the wrong dimension; a compartment is unreachable, or a metabolite is unlinked.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Compare unit_verbatim with unit_canonical in _interpretv2.yaml for that parameter.
3. A misread unit in transcribe is the usual cause.
4. Check the record's links in _interpretv2.yaml — every compartment needs a path to the dosed one.
5. Parent/metabolite records commonly miss the formation link.

<sub>owner: **scholar** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Wang Z; Zhang N; Chen C; Chen S; Xu J; Zhou Y; et al. et al. (2019). Current drug metabolism 20
  ·  DOI: [10.2174/1389200220666190701094756](https://doi.org/10.2174/1389200220666190701094756)

## Model component
<dbs-pgx drug="methotrexate" model-id="Methotrexate_Wang2019_reference" status="rejected" stale="false" population="Chinese patients with rheumatoid arthritis" measured-compound="methotrexate" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ1 CL/F (L/h) | `Q27` · CL/F | —(suppressed) | L/h | — | [l] / [h] | not captured | llm_confirmed (0.6) | T3:row1:col1, T3:row1:col2 | — | not captured |
| θ2 V/F (L) | `Q82` · V2/F | —(suppressed) | L | — | [l] | not captured | llm_corrected (0.6) | T3:row2:col1, T3:row2:col2 | — | not captured |
| θ3 Ka (h/L) | `Q49` · kabs | —(suppressed) | h/L | — | [h] / [l] | not captured | llm_confirmed (0.6) | T3:row3:col1, T3:row3:col2 | — | not captured |
| θ5 RS2306283 on CL | `Q22` · CL | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | T3:row5:col1, T3:row5:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'θ3 Ka (h/L)' → Q49 (unit '[time] / [length] ** 3' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'θ4 F' — extend the ontology if this is a real PK parameter (source ['T3:row4:col1', 'T3:row4:col2'])
- dropped duplicate Q22 ('θ6 RS2306283 on CL', value '0.589') — already have one for this compound
- dropped duplicate Q22 ('ωCL', value '0.167') — already have one for this compound
- routed 'ωv' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q49 ('ωKa', value '0') — already have one for this compound
- routed 'ωF' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=methotrexate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell T3:row1:col3 = '(6.02, 32.19)'
- unparsed cell T3:row5:col3 = '(0.188, 1.051)'
- unparsed cell T3:row6:col3 = '(0.147, 0.915)'
- unparsed cell T3:row11:col3 = '(0.412, 0.888)'
- unparsed cell T3:row12:col3 = '(1.52, 3.98)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T3:row1:col1', 'T3:row1:col2'] |
| C5_dimension_Q49 | fail | [time] / [length] ** 3 | h/L | not captured | not captured | ['T3:row3:col1', 'T3:row3:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['T3:row2:col1', 'T3:row2:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 8.04 L/h | not captured | not captured | ['T3:row1:col1', 'T3:row1:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 32.8 L | not captured | not captured | ['T3:row2:col1', 'T3:row2:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_methotrexate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2019` / `Wang_2019::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
