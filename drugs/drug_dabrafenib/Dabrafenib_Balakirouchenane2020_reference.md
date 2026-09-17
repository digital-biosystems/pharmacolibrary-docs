<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;dabrafenib&quot;,&quot;href&quot;:&quot;drugs/drug_dabrafenib/&quot;},{&quot;label&quot;:&quot;Balakirouchenane_2020 \u00b7 reference&quot;}]"></div>

# dabrafenib — `Dabrafenib_Balakirouchenane2020_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `sigma`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the model was built differently from what the record describes; the engineer's deviations are not documented and quantified. Evidence: T3_param_coverage — expected 4 scholar param(s) emitted or defaulted — got 1 covered; T6_deviations — got defaulted_parameters: structural deviation not quantified.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
3. If the paper never reports it, the record cannot become a model.
4. Open the emitted .mo and compare its base class and parameters with the record.
5. Check the .deviation.json beside it for what the engineer defaulted or assumed.
6. A wrong base class or a defaulted core parameter means rebuilding, not curating.

<sub>owner: **scholar** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Balakirouchenane D; Guégan S; Csajka C; Jouinot A; Heidelberger V; Puszkiel A; et al. et al. (2020). Cancers 12
  ·  DOI: [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931)

## Model component
<dbs-pgx drug="dabrafenib" model-id="Dabrafenib_Balakirouchenane2020_reference" status="model_quarantined" stale="false" population="patients with BRAF-mutated metastatic melanoma" measured-compound="dabrafenib" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | —(suppressed) | L/h | — | [l] / [h] | 5.83 | exact (1.0) | tab_2:row1:col1, tab_2:row1:col2, tab_2:row1:col3, tab_2:row1:col4 | — | 18.9 (29.6% RSE) |
| V 2 /F (L) | `Q82` · V2/F | —(suppressed) | L | — | [l] | 61.9 | llm (0.5) | tab_2:row2:col1, tab_2:row2:col2, tab_2:row2:col3, tab_2:row2:col4 | — | not captured |
| k a (1/h) | `Q95` · t1/2ka | —(suppressed) | not captured | — | not captured | 0.913 | llm (0.5) | tab_2:row3:col1, tab_2:row3:col2, tab_2:row3:col3, tab_2:row3:col4 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | —(suppressed) | L/h | — | [l] / [h] | 64.9 | exact (1.0) | tab_2:row4:col1, tab_2:row4:col2, tab_2:row4:col3, tab_2:row4:col4 | — | not captured |
| V 3 /F (L) | `Q78` · V3/F | —(suppressed) | L | — | [l] | 417.0 | llm (0.5) | tab_2:row5:col1, tab_2:row5:col2, tab_2:row5:col3, tab_2:row5:col4 | — | not captured |
| Tlag (h) | `Q83` · tlag | —(suppressed) | h | — | [h] | 0.709 | exact (1.0) | tab_2:row6:col1, tab_2:row6:col2, tab_2:row6:col3, tab_2:row6:col4 | — | not captured |
| RUV (ng/mL) | `Q315` · sigma | —(suppressed) | ng/mL | — | [ng] / [ml] | 4.14 | exact (1.0) | tab_2:row9:col1, tab_2:row9:col2, tab_2:row9:col3, tab_2:row9:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameters' — extend the ontology if this is a real PK parameter (source ['tab_2:row0:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dabrafenib

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row1:col1', 'tab_2:row1:col2', 'tab_2:row1:col3', 'tab_2:row1:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row4:col1', 'tab_2:row4:col2', 'tab_2:row4:col3', 'tab_2:row4:col4'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row5:col1', 'tab_2:row5:col2', 'tab_2:row5:col3', 'tab_2:row5:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row2:col1', 'tab_2:row2:col2', 'tab_2:row2:col3', 'tab_2:row2:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['tab_2:row6:col1', 'tab_2:row6:col2', 'tab_2:row6:col3', 'tab_2:row6:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | fail | 4 scholar param(s) emitted or defaulted | 1 covered | not captured | neither emitted nor in defaulted[]: ['V2/F', 'Q/F', 'tlag'] |
| T3_topology_template | not captured | pass | parent_metabolite → PK_Parent_Metabolite* | PK_Parent_Metabolite | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: structural deviation not quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_dabrafenib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Balakirouchenane_2020` / `Balakirouchenane_2020::reference`)
- model: `../../../knowledgebase/drugs/drug_dabrafenib/models/modelica/_needs_review/Dabrafenib_Balakirouchenane2020_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_dabrafenib/models/modelica/_needs_review/Dabrafenib_Balakirouchenane2020_reference.deviation.json`


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
