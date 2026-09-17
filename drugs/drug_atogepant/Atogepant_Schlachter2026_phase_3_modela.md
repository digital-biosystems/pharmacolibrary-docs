<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;atogepant&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/&quot;},{&quot;label&quot;:&quot;Schlachter_2026 \u00b7 phase_3_modela&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atogepant_Schlachter2026_phase_1_model&quot;,&quot;label&quot;:&quot;Schlachter_2026_phase_1_model&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/Atogepant_Schlachter2026_phase_1_model.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atogepant_Schlachter2026_phase_1_model&quot;,&quot;label&quot;:&quot;Schlachter_2026_phase_1_model&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/Atogepant_Schlachter2026_phase_1_model.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atogepant_Schlachter2026_phase_2_modela&quot;,&quot;label&quot;:&quot;Schlachter_2026_phase_2_modela&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/Atogepant_Schlachter2026_phase_2_modela.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atogepant_Schlachter2026_phase_2_modela&quot;,&quot;label&quot;:&quot;Schlachter_2026_phase_2_modela&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/Atogepant_Schlachter2026_phase_2_modela.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atogepant_Schlachter2026_phase_3_modela&quot;,&quot;label&quot;:&quot;Schlachter_2026_phase_3_modela&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/Atogepant_Schlachter2026_phase_3_modela.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Atogepant_Schlachter2026_phase_3_modela&quot;,&quot;label&quot;:&quot;Schlachter_2026_phase_3_modela&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/Atogepant_Schlachter2026_phase_3_modela.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atogepant — `Atogepant_Schlachter2026_phase_3_modela`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the engineer did not exercise the covariate scenarios this record defines; the engineer's deviations are not documented and quantified. Evidence: T2_covariates_not_exercised; T6_deviations — got invented_absorption: not acceptable

**Steps:**
1. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
2. If the paper never reports it, the record cannot become a model.
3. Advisory only — the base model still replicates.
4. Check the record's covariate_definitions in _interpretv2.yaml.
5. Re-run the engineer for this drug if the covariate curves are wanted.
6. Read the .deviation.json and confirm each deviation names what changed and why.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
not matched (stem Schlachter_2026)

## Model component
<dbs-pgx drug="atogepant" model-id="Atogepant_Schlachter2026_phase_3_modela" status="model_quarantined" stale="false" population="healthy participants and patients with migraine" measured-compound="atogepant" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Apparent clearance patients [CL/F (L/h)] | `Q27` · CL/F | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab2:row3:col3, Tab2:row3:col4, Tab2:row3:col5 | — | not captured |
| Apparent central volume of distribution [V1/F (L)] | `Q290` · V1/F | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab2:row6:col3, Tab2:row6:col4, Tab2:row6:col5 | — | not captured |
| Apparent first intercompartmental clearance [Q/F (L/h)] | `Q69` · Q/F | —(suppressed) | not captured | — | not captured | not captured | llm_corrected (0.6) | Tab2:row7:col3, Tab2:row7:col4, Tab2:row7:col5 | — | not captured |
| Apparent first peripheral volume of distribution [V2/F (L)] | `Q82` · V2/F | —(suppressed) | not captured | — | not captured | not captured | llm_corrected (0.6) | Tab2:row8:col3, Tab2:row8:col4, Tab2:row8:col5 | — | not captured |
| Apparent second intercompartmental clearance [Q2/F (L/h)] | `Q80` · Q2/F | —(suppressed) | not captured | — | not captured | not captured | llm_corrected (0.6) | Tab2:row9:col3, Tab2:row9:col4, Tab2:row9:col5 | — | not captured |
| Apparent second peripheral volume of distribution [V3/F (L)] | `Q78` · V3/F | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab2:row10:col3, Tab2:row10:col4, Tab2:row10:col5 | — | not captured |
| Lag time [ALAG (h)] | `Q83` · tlag | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab2:row11:col3, Tab2:row11:col4, Tab2:row11:col5 | — | not captured |
| Itraconazole effect on Frel | `Q87` · Frel | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab2:row26:col3, Tab2:row26:col4, Tab2:row26:col5 | — | not captured |
| exponential_dose_effect_on_frel | `Q900` · exponential_dose_effect_on_frel | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Tab2:row31:col3, Tab2:row31:col4, Tab2:row31:col5 | — | not captured |
| theta_cl_f_hepatic | `Q900` · theta_cl_f_hepatic | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Tab2:row29:col3, Tab2:row29:col4 | — | not captured |
| theta_tlag_food | `Q900` · theta_tlag_food | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Tab2:row30:col3, Tab2:row30:col4, Tab2:row30:col5 | — | not captured |
| theta_q49_formulation | `Q900` · theta_q49_formulation | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Tab2:row32:col3, Tab2:row32:col4 | — | not captured |
| theta_v1_f_weight_power | `Q900` · theta_v1_f_weight_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Tab2:row33:col3, Tab2:row33:col4, Tab2:row33:col5 | — | not captured |
| theta_q49_weight_power | `Q900` · theta_q49_weight_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Tab2:row34:col3, Tab2:row34:col4, Tab2:row34:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q27 ('Apparent clearance healthy participants [CL/F (L/h)]', value '22.9') — already have one for this compound
- dropped unlinked row (NIL): 'Duration zero-order absorption [Tk0 (h)]' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col3', 'Tab2:row5:col4', 'Tab2:row5:col5'])
- dropped unlinked row (NIL): 'Fraction zero-order absorption (Fk0)' — extend the ontology if this is a real PK parameter (source ['Tab2:row16:col3', 'Tab2:row16:col4', 'Tab2:row16:col5'])
- dropped unlinked row (NIL): 'Blood-plasma ratio' — extend the ontology if this is a real PK parameter (source ['Tab2:row17:col3', 'Tab2:row17:col4', 'Tab2:row17:col5'])
- dropped duplicate Q27 ('Itraconazole effect on CL/F', value '-0.662') — already have one for this compound
- dropped duplicate Q27 ('Rifampin effect on CL/F after first dose', value '-0.128') — already have one for this compound
- dropped duplicate Q27 ('Rifampin effect on CL/F following multiple doses', value '0.818') — already have one for this compound
- dropped duplicate Q27 ('Quinidine effect on CL/F', value '-0.285') — already have one for this compound
- dropped unlinked row (NIL): 'Rifampin effect on Frel following multiple doses' — extend the ontology if this is a real PK parameter (source ['Tab2:row27:col3', 'Tab2:row27:col4'])
- dropped unlinked row (NIL): 'Rifampin effect on Frel after first dose' — extend the ontology if this is a real PK parameter (source ['Tab2:row28:col3', 'Tab2:row28:col4', 'Tab2:row28:col5'])
- covariate level 'Exponential dose effect on Frel' → Q900:exponential_dose_effect_on_frel = 0.119 (power on Q27)
- dropped duplicate Q82 ('CovQ/F,V2/F', value '0.422') — already have one for this compound
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=atogepant
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- bound model equation to Q40 (Fab): F = 86.1 * (bodyweight/76.8)^
- Q40 (Fab) is equation-defined: value moved to equation-variable 'F'; equation kept verbatim
- population split: 'phase 3 modela' subgroup of Schlachter_2026 (paper reports 3 populations: phase 1 model, phase 2 modela, phase 3 modela)

**Extraction notes:**
- unparsed cell Tab2:row18:col5 = '(−0.669 to −0.654)'
- unparsed cell Tab2:row19:col5 = '(−0.164 to −0.0924)'
- unparsed cell Tab2:row25:col5 = '(−0.305 to −0.266)'
- unparsed cell Tab2:row27:col5 = '(−0.325 to −0.172)'
- unparsed cell Tab2:row29:col5 = '(−0.503 to −0.230)'
- unparsed cell Tab2:row32:col1 = '−0.44/−0.42'
- unparsed cell Tab2:row32:col5 = '(−0.507 to −0.198)'
- LLM selected parameter table(s) 2
- LLM region Schlachter_2026:other_prose: no JSON records returned
- captured model equation F = 86.1 * (bodyweight/76.8)^

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 14 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 3 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 13 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_atogepant/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Schlachter_2026` / `Schlachter_2026::phase_3_modela`)
- model: `../../../knowledgebase/drugs/drug_atogepant/models/modelica/_needs_review/Atogepant_Schlachter2026_phase_3_modela.mo`
- deviation: `../../../knowledgebase/drugs/drug_atogepant/models/modelica/_needs_review/Atogepant_Schlachter2026_phase_3_modela.deviation.json`


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
