<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;tiropramide&quot;,&quot;href&quot;:&quot;drugs/drug_tiropramide/&quot;},{&quot;label&quot;:&quot;Jeong_2020 \u00b7 shrinkage&quot;}]"></div>

# tiropramide — `Tiropramide_Jeong2020_shrinkage`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `Cmax`, `AUCt`, `AUC∞`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** every check the reviewer could run passed.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **scholar** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Jeong SH; Jang JH; Cho HY; Lee YB et al. (2020). Pharmaceutics 12
  ·  DOI: [10.3390/pharmaceutics12040374](https://doi.org/10.3390/pharmaceutics12040374)

## Model component
<dbs-pgx drug="tiropramide" model-id="Tiropramide_Jeong2020_shrinkage" status="rejected" stale="false" population="healthy Korean adults" measured-compound="tiropramide" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Half-Life (h−1) | `Q47` · kel | —(suppressed) | h−1 | — | [1] / [h] | not captured | llm (0.6) | Jeong_2020_table_3:row1:col3, Jeong_2020_table_3:row1:col4, Jeong_2020_table_3:row1:col7, Jeong_2020_table_3:row1:col8, Jeong_2020_table_3:row1:col11, Jeong_2020_table_3:row1:col12, Jeong_2020_table_3:row1:col14, Jeong_2020_table_3:row1:col15, Jeong_2020_table_3:row1:col16, Jeong_2020_table_3:row1:col19, Jeong_2020_table_3:row1:col22, Jeong_2020_table_3:row1:col23 | — | not captured |
| Tmax (h) | `Q56` · tmax | —(suppressed) | h | — | [h] | not captured | exact (1.0) | Jeong_2020_table_3:row2:col3, Jeong_2020_table_3:row2:col4, Jeong_2020_table_3:row2:col7, Jeong_2020_table_3:row2:col8, Jeong_2020_table_3:row2:col11, Jeong_2020_table_3:row2:col12, Jeong_2020_table_3:row2:col14, Jeong_2020_table_3:row2:col15, Jeong_2020_table_3:row2:col16, Jeong_2020_table_3:row2:col19, Jeong_2020_table_3:row2:col22, Jeong_2020_table_3:row2:col23 | — | not captured |
| Cmax (ng/mL) | `Q32` · Cmax | —(suppressed) | ng/mL | — | [ng] / [ml] | not captured | exact (1.0) | Jeong_2020_table_3:row3:col3, Jeong_2020_table_3:row3:col4, Jeong_2020_table_3:row3:col7, Jeong_2020_table_3:row3:col8, Jeong_2020_table_3:row3:col11, Jeong_2020_table_3:row3:col12, Jeong_2020_table_3:row3:col14, Jeong_2020_table_3:row3:col15, Jeong_2020_table_3:row3:col16, Jeong_2020_table_3:row3:col19, Jeong_2020_table_3:row3:col22, Jeong_2020_table_3:row3:col23 | — | not captured |
| AUC0–t (h·ng/mL) | `Q19` · AUCt | —(suppressed) | h·ng/mL | — | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Jeong_2020_table_3:row4:col3, Jeong_2020_table_3:row4:col4, Jeong_2020_table_3:row4:col7, Jeong_2020_table_3:row4:col8, Jeong_2020_table_3:row4:col11, Jeong_2020_table_3:row4:col12, Jeong_2020_table_3:row4:col14, Jeong_2020_table_3:row4:col15, Jeong_2020_table_3:row4:col16, Jeong_2020_table_3:row4:col19, Jeong_2020_table_3:row4:col22, Jeong_2020_table_3:row4:col23 | — | not captured |
| AUC0–∞ (h·ng/mL) | `Q17` · AUC∞ | —(suppressed) | h·ng/mL | — | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Jeong_2020_table_3:row5:col3, Jeong_2020_table_3:row5:col4, Jeong_2020_table_3:row5:col7, Jeong_2020_table_3:row5:col8, Jeong_2020_table_3:row5:col11, Jeong_2020_table_3:row5:col12, Jeong_2020_table_3:row5:col14, Jeong_2020_table_3:row5:col15, Jeong_2020_table_3:row5:col16, Jeong_2020_table_3:row5:col19, Jeong_2020_table_3:row5:col22, Jeong_2020_table_3:row5:col23 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | Jeong_2020_table_3:row6:col3, Jeong_2020_table_3:row6:col4, Jeong_2020_table_3:row6:col7, Jeong_2020_table_3:row6:col8, Jeong_2020_table_3:row6:col11, Jeong_2020_table_3:row6:col12, Jeong_2020_table_3:row6:col14, Jeong_2020_table_3:row6:col15, Jeong_2020_table_3:row6:col16, Jeong_2020_table_3:row6:col19, Jeong_2020_table_3:row6:col22, Jeong_2020_table_3:row6:col23 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Genotypes' — extend the ontology if this is a real PK parameter (source ['Jeong_2020_table_3:row0:col3', 'Jeong_2020_table_3:row0:col4', 'Jeong_2020_table_3:row0:col7', 'Jeong_2020_table_3:row0:col8', 'Jeong_2020_table_3:row0:col11', 'Jeong_2020_table_3:row0:col12', 'Jeong_2020_table_3:row0:col14', 'Jeong_2020_table_3:row0:col15', 'Jeong_2020_table_3:row0:col16', 'Jeong_2020_table_3:row0:col19', 'Jeong_2020_table_3:row0:col22', 'Jeong_2020_table_3:row0:col23'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tiropramide
- population split: 'shrinkage (%)' subgroup of Jeong_2020 (paper reports 8 populations: 1236c&gt;t, 1287g&gt;c, 2677g&gt;t/a, 3435c&gt;t, 808g&gt;t, estimate, iiv (%), shrinkage (%))

**Extraction notes:**
- unparsed cell pharmaceutics-12-00374-t006:row4:col1 = '1,717,060.491'
- unparsed cell pharmaceutics-12-00374-t006:row16:col1 = '1,889,250.002'
- transposed table Jeong_2020_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 3 transcribed (119 record(s))
- LLM selected parameter table(s) 3, 6
- dropped sensitivity-analysis table(s) 7 from the LLM selection — perturbations of a model, not a model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [time] * [mass] / [length] ** 3 | not captured | not captured | not captured | ['Jeong_2020_table_3:row5:col3', 'Jeong_2020_table_3:row5:col4', 'Jeong_2020_table_3:row5:col7', 'Jeong_2020_table_3:row5:col8', 'Jeong_2020_table_3:row5:col11', 'Jeong_2020_table_3:row5:col12', 'Jeong_2020_table_3:row5:col14', 'Jeong_2020_table_3:row5:col15', 'Jeong_2020_table_3:row5:col16', 'Jeong_2020_table_3:row5:col19', 'Jeong_2020_table_3:row5:col22', 'Jeong_2020_table_3:row5:col23'] |
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 | not captured | not captured | not captured | ['Jeong_2020_table_3:row4:col3', 'Jeong_2020_table_3:row4:col4', 'Jeong_2020_table_3:row4:col7', 'Jeong_2020_table_3:row4:col8', 'Jeong_2020_table_3:row4:col11', 'Jeong_2020_table_3:row4:col12', 'Jeong_2020_table_3:row4:col14', 'Jeong_2020_table_3:row4:col15', 'Jeong_2020_table_3:row4:col16', 'Jeong_2020_table_3:row4:col19', 'Jeong_2020_table_3:row4:col22', 'Jeong_2020_table_3:row4:col23'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Jeong_2020_table_3:row6:col3', 'Jeong_2020_table_3:row6:col4', 'Jeong_2020_table_3:row6:col7', 'Jeong_2020_table_3:row6:col8', 'Jeong_2020_table_3:row6:col11', 'Jeong_2020_table_3:row6:col12', 'Jeong_2020_table_3:row6:col14', 'Jeong_2020_table_3:row6:col15', 'Jeong_2020_table_3:row6:col16', 'Jeong_2020_table_3:row6:col19', 'Jeong_2020_table_3:row6:col22', 'Jeong_2020_table_3:row6:col23'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Jeong_2020_table_3:row3:col3', 'Jeong_2020_table_3:row3:col4', 'Jeong_2020_table_3:row3:col7', 'Jeong_2020_table_3:row3:col8', 'Jeong_2020_table_3:row3:col11', 'Jeong_2020_table_3:row3:col12', 'Jeong_2020_table_3:row3:col14', 'Jeong_2020_table_3:row3:col15', 'Jeong_2020_table_3:row3:col16', 'Jeong_2020_table_3:row3:col19', 'Jeong_2020_table_3:row3:col22', 'Jeong_2020_table_3:row3:col23'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Jeong_2020_table_3:row1:col3', 'Jeong_2020_table_3:row1:col4', 'Jeong_2020_table_3:row1:col7', 'Jeong_2020_table_3:row1:col8', 'Jeong_2020_table_3:row1:col11', 'Jeong_2020_table_3:row1:col12', 'Jeong_2020_table_3:row1:col14', 'Jeong_2020_table_3:row1:col15', 'Jeong_2020_table_3:row1:col16', 'Jeong_2020_table_3:row1:col19', 'Jeong_2020_table_3:row1:col22', 'Jeong_2020_table_3:row1:col23'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Jeong_2020_table_3:row2:col3', 'Jeong_2020_table_3:row2:col4', 'Jeong_2020_table_3:row2:col7', 'Jeong_2020_table_3:row2:col8', 'Jeong_2020_table_3:row2:col11', 'Jeong_2020_table_3:row2:col12', 'Jeong_2020_table_3:row2:col14', 'Jeong_2020_table_3:row2:col15', 'Jeong_2020_table_3:row2:col16', 'Jeong_2020_table_3:row2:col19', 'Jeong_2020_table_3:row2:col22', 'Jeong_2020_table_3:row2:col23'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 551 L/h | not captured | not captured | ['Jeong_2020_table_3:row6:col3', 'Jeong_2020_table_3:row6:col4', 'Jeong_2020_table_3:row6:col7', 'Jeong_2020_table_3:row6:col8', 'Jeong_2020_table_3:row6:col11', 'Jeong_2020_table_3:row6:col12', 'Jeong_2020_table_3:row6:col14', 'Jeong_2020_table_3:row6:col15', 'Jeong_2020_table_3:row6:col16', 'Jeong_2020_table_3:row6:col19', 'Jeong_2020_table_3:row6:col22', 'Jeong_2020_table_3:row6:col23'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tiropramide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jeong_2020` / `Jeong_2020::shrinkage`)


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
