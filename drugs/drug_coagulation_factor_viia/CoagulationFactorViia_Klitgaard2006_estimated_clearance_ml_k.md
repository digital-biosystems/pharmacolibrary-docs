<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;coagulation factor VIIa&quot;,&quot;href&quot;:&quot;drugs/drug_coagulation_factor_viia/&quot;},{&quot;label&quot;:&quot;Klitgaard_2006 \u00b7 estimated_clearance_ml_kg_1_h_1&quot;}]"></div>

# coagulation factor VIIa — `CoagulationFactorViia_Klitgaard2006_estimated_clearance_ml_k`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the engineer's deviations are not documented and quantified. Evidence: T6_deviations — got defaulted_parameters: structural deviation not quantified

**Steps:**
1. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
2. If the paper never reports it, the record cannot become a model.
3. Read the .deviation.json and confirm each deviation names what changed and why.
4. Anything undocumented needs the engineer, not a curator.

<sub>owner: **scholar** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `recombinant activated factor VII`, measured `factor VII coagulant activity`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Klitgaard T; Tabanera y Palacios R; Boffard KD; Iau PT; Warren B; Rizoli S; et al. et al. (2006). Critical care (London, England) 10
  ·  DOI: [10.1186/cc4977](https://doi.org/10.1186/cc4977)

## Model component
<dbs-pgx drug="coagulation factor VIIa" model-id="CoagulationFactorViia_Klitgaard2006_estimated_clearance_ml_k" status="model_quarantined" stale="false" population="trauma patients with severe bleeding" measured-compound="factor VII coagulant activity" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Hemophiliaa | `Q22` · CL | —(suppressed) | ml.kg-1.h-1 | — | [ml] / [[h] · [kg]] | not captured | llm (0.6) | Klitgaard_2006_table_3:row0:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Trauma' — extend the ontology if this is a real PK parameter (source ['Klitgaard_2006_table_3:row1:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=factor VII coagulant activity
- population split: 'estimated clearance (ml.kg-1.h-1)' subgroup of Klitgaard_2006 (paper reports 2 populations: estimated clearance (ml.kg-1.h-1), terminal half-life (h))
- review gap-fill skipped: this record measures 'factor VII coagulant activity', not coagulation_factor_viia — the review values are the parent's

**Extraction notes:**
- companion parameter table 3 transcribed (5 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Klitgaard_2006_table_3:row0:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 29.0 | not captured | not captured | ['Klitgaard_2006_table_3:row0:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.03 L/h | not captured | not captured | ['Klitgaard_2006_table_3:row0:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 1 scholar param(s) emitted or defaulted | 1 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: structural deviation not quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | skipped | 2.4 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 2.6 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.7 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_coagulation_factor_viia/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Klitgaard_2006` / `Klitgaard_2006::estimated_clearance_ml_kg_1_h_1`)
- model: `../../../knowledgebase/drugs/drug_coagulation_factor_viia/models/modelica/_needs_review/CoagulationFactorViia_Klitgaard2006_estimated_clearance_ml_k.mo`
- deviation: `../../../knowledgebase/drugs/drug_coagulation_factor_viia/models/modelica/_needs_review/CoagulationFactorViia_Klitgaard2006_estimated_clearance_ml_k.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_coagulation_factor_viia/CoagulationFactorViia_Klitgaard2006_estimated_clearance_ml_k/CoagulationFactorViia_Klitgaard2006_estimated_clearance_ml_k_matlab.zip" download>CoagulationFactorViia_Klitgaard2006_estimated_clearance_ml_k_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_coagulation_factor_viia/CoagulationFactorViia_Klitgaard2006_estimated_clearance_ml_k/CoagulationFactorViia_Klitgaard2006_estimated_clearance_ml_k_matlab_simbio.zip" download>CoagulationFactorViia_Klitgaard2006_estimated_clearance_ml_k_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_coagulation_factor_viia/CoagulationFactorViia_Klitgaard2006_estimated_clearance_ml_k/CoagulationFactorViia_Klitgaard2006_estimated_clearance_ml_k_sbml.zip" download>CoagulationFactorViia_Klitgaard2006_estimated_clearance_ml_k_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_coagulation_factor_viia/CoagulationFactorViia_Klitgaard2006_estimated_clearance_ml_k/CoagulationFactorViia_Klitgaard2006_estimated_clearance_ml_k_cellml.zip" download>CoagulationFactorViia_Klitgaard2006_estimated_clearance_ml_k_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
