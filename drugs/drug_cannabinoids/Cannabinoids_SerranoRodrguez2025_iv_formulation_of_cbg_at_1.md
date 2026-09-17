<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;cannabinoids&quot;,&quot;href&quot;:&quot;drugs/drug_cannabinoids/&quot;},{&quot;label&quot;:&quot;Serrano-Rodr\u00edguez_2025 \u00b7 iv_formulation_of_cbg_at_1_0_mg_kg&quot;}]"></div>

# cannabinoids — `Cannabinoids_SerranoRodrguez2025_iv_formulation_of_cbg_at_1`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `AUCt`, `AUC`, `Cmax`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** a structural parameter has the wrong dimension.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Compare unit_verbatim with unit_canonical in _interpretv2.yaml for that parameter.
3. A misread unit in transcribe is the usual cause.

<sub>owner: **scholar** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Serrano-Rodríguez JM; Miraz R; Saitua A; Díez de Castro E; Ledesma-Escobar C; Ferreiro-Vera C; Priego-Capote F; Sánchez de Medina V; Sánchez de Medina A et al. (2025). Frontiers in veterinary science 12
  ·  DOI: [10.3389/fvets.2025.1688214](https://doi.org/10.3389/fvets.2025.1688214)

## Model component
<dbs-pgx drug="cannabinoids" model-id="Cannabinoids_SerranoRodrguez2025_iv_formulation_of_cbg_at_1" status="rejected" stale="false" population="healthy adult horses" measured-compound="cannabigerol" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC24 (μmol/L·h) | `Q19` · AUCt | —(suppressed) | μmol/L·h | — | [[µM] · [ol]] / [[h] · [l]] | not captured | llm (0.6) | Serrano-Rodríguez_2025_table_2:row2:col1, Serrano-Rodríguez_2025_table_2:row2:col2, Serrano-Rodríguez_2025_table_2:row2:col3, Serrano-Rodríguez_2025_table_2:row2:col4 | — | not captured |
| AUC (μmol/L·h) | `Q88` · AUC | —(suppressed) | μmol/L·h | — | [[µM] · [ol]] / [[h] · [l]] | not captured | exact (1.0) | Serrano-Rodríguez_2025_table_2:row3:col1, Serrano-Rodríguez_2025_table_2:row3:col2, Serrano-Rodríguez_2025_table_2:row3:col3, Serrano-Rodríguez_2025_table_2:row3:col4 | — | not captured |
| Cmax (μmol/L) | `Q32` · Cmax | —(suppressed) | μmol/L | — | [[µM] · [ol]] / [l] | not captured | exact (1.0) | Serrano-Rodríguez_2025_table_2:row4:col3, Serrano-Rodríguez_2025_table_2:row4:col4 | — | not captured |
| Tmax (h) | `Q56` · tmax | —(suppressed) | h | — | [h] | not captured | exact (1.0) | Serrano-Rodríguez_2025_table_2:row5:col3, Serrano-Rodríguez_2025_table_2:row5:col4 | — | not captured |
| t1/2 (h) | `Q57` · t1/2z | —(suppressed) | h | — | [h] | not captured | exact (1.0) | Serrano-Rodríguez_2025_table_2:row6:col1, Serrano-Rodríguez_2025_table_2:row6:col2, Serrano-Rodríguez_2025_table_2:row6:col3, Serrano-Rodríguez_2025_table_2:row6:col4 | — | not captured |
| Vss (L/kg) | `Q65` · Vss | —(suppressed) | L/kg | — | [l] / [kg] | not captured | exact (1.0) | Serrano-Rodríguez_2025_table_2:row7:col1, Serrano-Rodríguez_2025_table_2:row7:col2 | — | not captured |
| AUCm/AUCp | `Q21` · AUC ratio | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | Serrano-Rodríguez_2025_table_2:row8:col3, Serrano-Rodríguez_2025_table_2:row8:col4 | — | not captured |
| F | `Q40` · Fab | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | Serrano-Rodríguez_2025_table_S1:row1:col4, Serrano-Rodríguez_2025_table_S1:row1:col5, Serrano-Rodríguez_2025_table_S1:row1:col6, Serrano-Rodríguez_2025_table_S1:row1:col7 | — | 0.29 (None% RSE) |
| ka (1/h) | `Q49` · kabs | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | Serrano-Rodríguez_2025_table_S1:row2:col4, Serrano-Rodríguez_2025_table_S1:row2:col5, Serrano-Rodríguez_2025_table_S1:row2:col6, Serrano-Rodríguez_2025_table_S1:row2:col7 | — | 0.41 (None% RSE) |
| β | `Q47` · kel | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | Serrano-Rodríguez_2025_table_S1:row4:col4, Serrano-Rodríguez_2025_table_S1:row4:col5, Serrano-Rodríguez_2025_table_S1:row4:col6, Serrano-Rodríguez_2025_table_S1:row4:col7 | — | not captured |
| Cl (l/h/kg) | `Q22` · CL | —(suppressed) | l/h/kg | — | [l] / [[h] · [kg]] | not captured | exact (1.0) | Serrano-Rodríguez_2025_table_S1:row6:col4, Serrano-Rodríguez_2025_table_S1:row6:col5, Serrano-Rodríguez_2025_table_S1:row6:col6, Serrano-Rodríguez_2025_table_S1:row6:col7 | — | not captured |
| Vc (L/kg) | `Q63` · V1 | —(suppressed) | L/kg | — | [l] / [kg] | not captured | exact (1.0) | Serrano-Rodríguez_2025_table_S1:row7:col4, Serrano-Rodríguez_2025_table_S1:row7:col5, Serrano-Rodríguez_2025_table_S1:row7:col6, Serrano-Rodríguez_2025_table_S1:row7:col7 | — | not captured |
| Q (L/h/kg) | `Q30` · Q | —(suppressed) | L/h/kg | — | [l] / [[h] · [kg]] | not captured | exact (1.0) | Serrano-Rodríguez_2025_table_S1:row8:col4, Serrano-Rodríguez_2025_table_S1:row8:col5, Serrano-Rodríguez_2025_table_S1:row8:col6 | — | not captured |
| Vp (L/kg) | `Q64` · V2 | —(suppressed) | L/kg | — | [l] / [kg] | not captured | exact (1.0) | Serrano-Rodríguez_2025_table_S1:row9:col4, Serrano-Rodríguez_2025_table_S1:row9:col5, Serrano-Rodríguez_2025_table_S1:row9:col6, Serrano-Rodríguez_2025_table_S1:row9:col7 | — | not captured |
| Vm (L/kg) | `Q66` · Vmax | —(suppressed) | L/kg | — | [l] / [kg] | not captured | special_case (0.95) | Serrano-Rodríguez_2025_table_S1:row10:col4, Serrano-Rodríguez_2025_table_S1:row10:col5, Serrano-Rodríguez_2025_table_S1:row10:col6, Serrano-Rodríguez_2025_table_S1:row10:col7 | — | not captured |
| Clm (L/h/kg) | `Q351` · CLm/F | —(suppressed) | L/h/kg | — | [l] / [[h] · [kg]] | not captured | exact (1.0) | Serrano-Rodríguez_2025_table_S1:row12:col4, Serrano-Rodríguez_2025_table_S1:row12:col5, Serrano-Rodríguez_2025_table_S1:row12:col6, Serrano-Rodríguez_2025_table_S1:row12:col7 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'AUC24 (μmol/L·h)' → Q19 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC (μmol/L·h)' → Q88 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Cmax (μmol/L)' → Q32 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Covka_formulation' — extend the ontology if this is a real PK parameter (source ['Serrano-Rodríguez_2025_table_S1:row3:col4', 'Serrano-Rodríguez_2025_table_S1:row3:col5', 'Serrano-Rodríguez_2025_table_S1:row3:col6'])
- routed 'Covγ_formulation' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cannabigerol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'iv formulation of cbg at 1.0 mg/kg' subgroup of Serrano-Rodríguez_2025 (paper reports 3 populations: cbg, cbg-g, iv formulation of cbg at 1.0 mg/kg)
- review gap-fill skipped: this record measures 'cannabigerol', not cannabinoids — the review values are the parent's

**Extraction notes:**
- unparsed cell tab1:row9:col4 = 'b1'
- unparsed cell tab1:row10:col4 = 'b2'
- companion parameter table 2 transcribed (20 record(s))
- unparsed cell Serrano-Rodríguez_2025_table_3:row4:col2 = '1901.64*'
- unparsed cell Serrano-Rodríguez_2025_table_3:row4:col4 = '158703.12*'
- unparsed cell Serrano-Rodríguez_2025_table_3:row5:col2 = '4619.62*'
- unparsed cell Serrano-Rodríguez_2025_table_3:row5:col4 = '370173.09*'
- companion parameter table 3 transcribed (22 record(s))
- unparsed cell Serrano-Rodríguez_2025_table_S1:row19:col5 = 'b1'
- unparsed cell Serrano-Rodríguez_2025_table_S1:row20:col5 = 'b2'
- companion parameter table S1 transcribed (100 record(s))
- LLM selected parameter table(s) 1, 2, 3, S1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 16 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q19 | fail | [substance] * [time] / [length] ** 3 | μmol/L·h | not captured | not captured | ['Serrano-Rodríguez_2025_table_2:row2:col1', 'Serrano-Rodríguez_2025_table_2:row2:col2', 'Serrano-Rodríguez_2025_table_2:row2:col3', 'Serrano-Rodríguez_2025_table_2:row2:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Serrano-Rodríguez_2025_table_S1:row6:col4', 'Serrano-Rodríguez_2025_table_S1:row6:col5', 'Serrano-Rodríguez_2025_table_S1:row6:col6', 'Serrano-Rodríguez_2025_table_S1:row6:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Serrano-Rodríguez_2025_table_S1:row8:col4', 'Serrano-Rodríguez_2025_table_S1:row8:col5', 'Serrano-Rodríguez_2025_table_S1:row8:col6'] |
| C5_dimension_Q32 | fail | [substance] / [length] ** 3 | μmol/L | not captured | not captured | ['Serrano-Rodríguez_2025_table_2:row4:col3', 'Serrano-Rodríguez_2025_table_2:row4:col4'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Serrano-Rodríguez_2025_table_S1:row12:col4', 'Serrano-Rodríguez_2025_table_S1:row12:col5', 'Serrano-Rodríguez_2025_table_S1:row12:col6', 'Serrano-Rodríguez_2025_table_S1:row12:col7'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Serrano-Rodríguez_2025_table_2:row5:col3', 'Serrano-Rodríguez_2025_table_2:row5:col4'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Serrano-Rodríguez_2025_table_2:row6:col1', 'Serrano-Rodríguez_2025_table_2:row6:col2', 'Serrano-Rodríguez_2025_table_2:row6:col3', 'Serrano-Rodríguez_2025_table_2:row6:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Serrano-Rodríguez_2025_table_S1:row7:col4', 'Serrano-Rodríguez_2025_table_S1:row7:col5', 'Serrano-Rodríguez_2025_table_S1:row7:col6', 'Serrano-Rodríguez_2025_table_S1:row7:col7'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Serrano-Rodríguez_2025_table_S1:row9:col4', 'Serrano-Rodríguez_2025_table_S1:row9:col5', 'Serrano-Rodríguez_2025_table_S1:row9:col6', 'Serrano-Rodríguez_2025_table_S1:row9:col7'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Serrano-Rodríguez_2025_table_2:row7:col1', 'Serrano-Rodríguez_2025_table_2:row7:col2'] |
| C5_dimension_Q66 | pass | [length] ** 3 | not captured | not captured | not captured | ['Serrano-Rodríguez_2025_table_S1:row10:col4', 'Serrano-Rodríguez_2025_table_S1:row10:col5', 'Serrano-Rodríguez_2025_table_S1:row10:col6', 'Serrano-Rodríguez_2025_table_S1:row10:col7'] |
| C5_dimension_Q88 | fail | [substance] * [time] / [length] ** 3 | μmol/L·h | not captured | not captured | ['Serrano-Rodríguez_2025_table_2:row3:col1', 'Serrano-Rodríguez_2025_table_2:row3:col2', 'Serrano-Rodríguez_2025_table_2:row3:col3', 'Serrano-Rodríguez_2025_table_2:row3:col4'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.29 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 122 L/h | not captured | not captured | ['Serrano-Rodríguez_2025_table_S1:row6:col4', 'Serrano-Rodríguez_2025_table_S1:row6:col5', 'Serrano-Rodríguez_2025_table_S1:row6:col6', 'Serrano-Rodríguez_2025_table_S1:row6:col7'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.01e+03 L | not captured | not captured | ['Serrano-Rodríguez_2025_table_S1:row7:col4', 'Serrano-Rodríguez_2025_table_S1:row7:col5', 'Serrano-Rodríguez_2025_table_S1:row7:col6', 'Serrano-Rodríguez_2025_table_S1:row7:col7'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.89e+03 L | not captured | not captured | ['Serrano-Rodríguez_2025_table_S1:row9:col4', 'Serrano-Rodríguez_2025_table_S1:row9:col5', 'Serrano-Rodríguez_2025_table_S1:row9:col6', 'Serrano-Rodríguez_2025_table_S1:row9:col7'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_cannabinoids/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Serrano-Rodríguez_2025` / `Serrano-Rodríguez_2025::iv_formulation_of_cbg_at_1_0_mg_kg`)


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
