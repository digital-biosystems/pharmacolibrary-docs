<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07D&quot;,&quot;href&quot;:&quot;atc/A07D.md&quot;},{&quot;label&quot;:&quot;loperamide&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/&quot;},{&quot;label&quot;:&quot;Valenzuela_2025 \u00b7 m1&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Loperamide_Valenzuela2025_loperamide&quot;,&quot;label&quot;:&quot;Valenzuela_2025_loperamide&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/Loperamide_Valenzuela2025_loperamide.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Loperamide_Valenzuela2025_loperamide&quot;,&quot;label&quot;:&quot;Valenzuela_2025_loperamide&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/Loperamide_Valenzuela2025_loperamide.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Loperamide_Valenzuela2025_m1&quot;,&quot;label&quot;:&quot;Valenzuela_2025_m1&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/Loperamide_Valenzuela2025_m1.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Loperamide_Valenzuela2025_m1&quot;,&quot;label&quot;:&quot;Valenzuela_2025_m1&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/Loperamide_Valenzuela2025_m1.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Loperamide_Valenzuela2025_loperamide_model&quot;,&quot;label&quot;:&quot;Valenzuela_2025_loperamide_model&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/Loperamide_Valenzuela2025_loperamide_model.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Loperamide_Valenzuela2025_loperamide_model&quot;,&quot;label&quot;:&quot;Valenzuela_2025_loperamide_model&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/Loperamide_Valenzuela2025_loperamide_model.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Loperamide_Valenzuela2025_m1_model&quot;,&quot;label&quot;:&quot;Valenzuela_2025_m1_model&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/Loperamide_Valenzuela2025_m1_model.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Loperamide_Valenzuela2025_m1_model&quot;,&quot;label&quot;:&quot;Valenzuela_2025_m1_model&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/Loperamide_Valenzuela2025_m1_model.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# loperamide — `Loperamide_Valenzuela2025_m1`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the model was built differently from what the record describes. Evidence: T3_param_coverage — expected 6 scholar param(s) emitted or defaulted — got 4 covered; T3_topology_template — expected parent_metabolite → PK_Parent_Metabolite* — got PK_1C_enteral

**Steps:**
1. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
2. If the paper never reports it, the record cannot become a model.
3. Open the emitted .mo and compare its base class and parameters with the record.
4. Check the .deviation.json beside it for what the engineer defaulted or assumed.
5. A wrong base class or a defaulted core parameter means rebuilding, not curating.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Valenzuela B; Gisleskog PO; Cirillo I; Coenen E; Ariyawansa J; Ali SR; et al. et al. (2025). Clinical and translational science 18
  ·  DOI: [10.1111/cts.70114](https://doi.org/10.1111/cts.70114)

## Model component
<dbs-pgx drug="loperamide" model-id="Loperamide_Valenzuela2025_m1" status="model_quarantined" stale="false" population="healthy adults" measured-compound="loperamide" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | Valenzuela_2025_table_1:row1:col5 | — | not captured |
| Vc/F (L) | `Q290` · V1/F | —(suppressed) | L | — | [l] | not captured | exact (1.0) | Valenzuela_2025_table_1:row2:col5 | — | not captured |
| Vp/F (L) | `Q82` · V2/F | —(suppressed) | L | — | [l] | not captured | exact (1.0) | Valenzuela_2025_table_1:row3:col5 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | Valenzuela_2025_table_1:row4:col5 | — | not captured |
| F 8 mg | `Q87` · Frel | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | Valenzuela_2025_table_1:row5:col5 | — | not captured |
| k a 8 mg (h−1) | `Q49` · kabs | —(suppressed) | h−1 | — | [1] / [h] | not captured | llm (0.6) | Valenzuela_2025_table_1:row7:col5 | — | not captured |
| Alag 8 mg (h) | `Q83` · tlag | —(suppressed) | h | — | [h] | not captured | llm_confirmed (0.6) | Valenzuela_2025_table_1:row9:col5 | — | not captured |
| D1 (h) | `Q310` · D1 | —(suppressed) | h | — | [h] | not captured | exact (1.0) | Valenzuela_2025_table_1:row11:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q87 ('F 48 mg', value '1.10') — already have one for this compound
- dropped duplicate Q49 ('k a 48 mg (h−1)', value '0.991') — already have one for this compound
- dropped duplicate Q83 ('Alag 48 mg (h)', value '0.376') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=loperamide
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- population split: 'm1' subgroup of Valenzuela_2025 (paper reports 4 populations: loperamide, loperamide model, m1, m1 model)

**Extraction notes:**
- unparsed cell cts70114-tbl-0002:row9:col2 = '0.00001 (−)'
- unparsed cell Valenzuela_2025_table_1:row1:col2 = '(5.3)'
- unparsed cell Valenzuela_2025_table_1:row1:col6 = '(5.12)'
- unparsed cell Valenzuela_2025_table_1:row2:col2 = '(6.8)'
- unparsed cell Valenzuela_2025_table_1:row2:col3 = '19.6%'
- unparsed cell Valenzuela_2025_table_1:row2:col4 = '(16.2)'
- unparsed cell Valenzuela_2025_table_1:row2:col6 = '(5.98)'
- unparsed cell Valenzuela_2025_table_1:row2:col7 = '32.3%'
- unparsed cell Valenzuela_2025_table_1:row2:col8 = '(13.3)'
- unparsed cell Valenzuela_2025_table_1:row3:col2 = '(6.2)'
- unparsed cell Valenzuela_2025_table_1:row3:col6 = '(11.2)'
- unparsed cell Valenzuela_2025_table_1:row4:col2 = '(10.9)'
- unparsed cell Valenzuela_2025_table_1:row4:col6 = '(14.7)'
- unparsed cell Valenzuela_2025_table_1:row5:col3 = '43.5%'
- unparsed cell Valenzuela_2025_table_1:row5:col4 = '(7.51)'
- unparsed cell Valenzuela_2025_table_1:row5:col7 = '20.8%'
- unparsed cell Valenzuela_2025_table_1:row5:col8 = '(11.8)'
- unparsed cell Valenzuela_2025_table_1:row6:col2 = '(3.26)'
- unparsed cell Valenzuela_2025_table_1:row6:col6 = '(3.13)'
- unparsed cell Valenzuela_2025_table_1:row7:col2 = '(10.2)'
- unparsed cell Valenzuela_2025_table_1:row7:col3 = '98.6%'
- unparsed cell Valenzuela_2025_table_1:row7:col4 = '(10.9)'
- unparsed cell Valenzuela_2025_table_1:row7:col6 = '(7.98)'
- unparsed cell Valenzuela_2025_table_1:row7:col7 = '40.6%'
- unparsed cell Valenzuela_2025_table_1:row7:col8 = '(11.7)'
- unparsed cell Valenzuela_2025_table_1:row8:col2 = '(12.1)'
- unparsed cell Valenzuela_2025_table_1:row8:col6 = '(12.9)'
- unparsed cell Valenzuela_2025_table_1:row9:col2 = '(14.7)'
- unparsed cell Valenzuela_2025_table_1:row9:col3 = '76.2% a'
- unparsed cell Valenzuela_2025_table_1:row9:col4 = '(9.91)'
- unparsed cell Valenzuela_2025_table_1:row9:col6 = '(12.0)'
- unparsed cell Valenzuela_2025_table_1:row9:col7 = '59.3% a'
- unparsed cell Valenzuela_2025_table_1:row9:col8 = '(9.10)'
- unparsed cell Valenzuela_2025_table_1:row10:col2 = '(10.2)'
- unparsed cell Valenzuela_2025_table_1:row10:col6 = '(6.86)'
- unparsed cell Valenzuela_2025_table_1:row11:col2 = '(4.34)'
- unparsed cell Valenzuela_2025_table_1:row11:col3 = '72.9% a'
- unparsed cell Valenzuela_2025_table_1:row11:col4 = '(9.51)'
- unparsed cell Valenzuela_2025_table_1:row11:col6 = '(10.7)'
- unparsed cell Valenzuela_2025_table_1:row11:col7 = '97.1% a'
- unparsed cell Valenzuela_2025_table_1:row11:col8 = '(9.33)'
- unparsed cell Valenzuela_2025_table_1:row12:col2 = '(5.8)'
- unparsed cell Valenzuela_2025_table_1:row12:col6 = '(4.29)'
- companion parameter table 1 transcribed (24 record(s))
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Valenzuela_2025_table_1:row1:col5'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Valenzuela_2025_table_1:row2:col5'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['Valenzuela_2025_table_1:row11:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Valenzuela_2025_table_1:row7:col5'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Valenzuela_2025_table_1:row4:col5'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Valenzuela_2025_table_1:row3:col5'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Valenzuela_2025_table_1:row9:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 52.4 L/h | not captured | not captured | ['Valenzuela_2025_table_1:row1:col5'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 1.65e+03 L | not captured | not captured | ['Valenzuela_2025_table_1:row2:col5'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 805 L | not captured | not captured | ['Valenzuela_2025_table_1:row3:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | fail | 6 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['V2/F', 'Q/F'] |
| T3_topology_template | not captured | fail | parent_metabolite → PK_Parent_Metabolite* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | -0.53 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 6.06 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | -0.76 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 5.46 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_loperamide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Valenzuela_2025` / `Valenzuela_2025::m1`)
- model: `../../../knowledgebase/drugs/drug_loperamide/models/modelica/_needs_review/Loperamide_Valenzuela2025_m1.mo`
- deviation: `../../../knowledgebase/drugs/drug_loperamide/models/modelica/_needs_review/Loperamide_Valenzuela2025_m1.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_loperamide/Loperamide_Valenzuela2025_m1/Loperamide_Valenzuela2025_m1_matlab.zip" download>Loperamide_Valenzuela2025_m1_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_loperamide/Loperamide_Valenzuela2025_m1/Loperamide_Valenzuela2025_m1_matlab_simbio.zip" download>Loperamide_Valenzuela2025_m1_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_loperamide/Loperamide_Valenzuela2025_m1/Loperamide_Valenzuela2025_m1_sbml.zip" download>Loperamide_Valenzuela2025_m1_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_loperamide/Loperamide_Valenzuela2025_m1/Loperamide_Valenzuela2025_m1_cellml.zip" download>Loperamide_Valenzuela2025_m1_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
