<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;von Willebrand factor&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/&quot;},{&quot;label&quot;:&quot;Bauer_2023 \u00b7 pdvwf_fviii_model&quot;}]"></div>

# von Willebrand factor — `VonWillebrandFactor_Bauer2023_pdvwf_fviii_model`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the engineer did not exercise the covariate scenarios this record defines. Evidence: T2_covariates_not_exercised

**Steps:**
1. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
2. If the paper never reports it, the record cannot become a model.
3. Advisory only — the base model still replicates.
4. Check the record's covariate_definitions in _interpretv2.yaml.
5. Re-run the engineer for this drug if the covariate curves are wanted.

<sub>owner: **scholar** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Bauer A; Friberg-Hietala S; Smania G; Wolfsegger M et al. (2023). Journal of blood medicine 14
  ·  DOI: [10.2147/jbm.s395845](https://doi.org/10.2147/jbm.s395845)

## Model component
<dbs-pgx drug="von Willebrand factor" model-id="VonWillebrandFactor_Bauer2023_pdvwf_fviii_model" status="model_quarantined" stale="false" population="patients with von Willebrand disease" measured-compound="von Willebrand factor" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL, dL/h | `Q22` · CL | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | t0004:row3:col3, t0004:row3:col4 | — | 0.235 (None% RSE) |
| Vc, dL | `Q63` · V1 | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | t0004:row4:col3, t0004:row4:col4 | — | 0.373 (None% RSE) |
| Q, dL/h | `Q30` · Q | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | t0004:row5:col3, t0004:row5:col4 | — | not captured |
| Vp, dL | `Q64` · V2 | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | t0004:row6:col3, t0004:row6:col4 | — | not captured |
| wt_effect_on_cl_and_q | `Q900` · wt_effect_on_cl_and_q | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | t0004:row8:col3 | — | not captured |
| theta_q61_wt | `Q900` · theta_q61_wt | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | t0004:row9:col3 | — | not captured |
| Absorption rate constant (kapop) [h−1] | `Q49` · kabs | —(suppressed) | h−1 | — | 1/h | not captured | review_gapfill (0.7) | Schöning_2026:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'EVWF, VWD type 3, IU/dL' — extend the ontology if this is a real PK parameter (source ['t0004:row7:col3'])
- covariate level 'WT effect on CL and Q' → Q900:wt_effect_on_cl_and_q = 0.750 (linear_fractional on Q22)
- dropped duplicate Q63 ('Hematocrit effect on Vc', value '-0.334') — already have one for this compound
- dropped PD-category row 'Baseline FVIII, IU/dLc,d' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0004:row16:col3'])
- dropped PD-category row 'kout, h−1 c' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0004:row17:col3'])
- dropped PD-category row 'Imax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0004:row18:col3', 't0004:row18:col4'])
- dropped PD-category row 'IC50, IU/dL' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0004:row19:col3', 't0004:row19:col4'])
- dropped unlinked row (NIL): 'Hematocrit effect on baseline FVIII' — extend the ontology if this is a real PK parameter (source ['t0004:row20:col3'])
- covariate effect for Q61 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=von Willebrand factor
- population split: 'pdvwf/fviii model' subgroup of Bauer_2023 (paper reports 2 populations: pdvwf/fviii model, rvwf model)
- gap-filled Q49 (kabs) from Schöning_2026's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Schöning_2026:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.14 | not captured | not captured | ['t0004:row3:col3', 't0004:row3:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | skipped | 1.74 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_von_willebrand_factor/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bauer_2023` / `Bauer_2023::pdvwf_fviii_model`)
- model: `../../../knowledgebase/drugs/drug_von_willebrand_factor/models/modelica/_needs_review/VonWillebrandFactor_Bauer2023_pdvwf_fviii_model.mo`
- deviation: `../../../knowledgebase/drugs/drug_von_willebrand_factor/models/modelica/_needs_review/VonWillebrandFactor_Bauer2023_pdvwf_fviii_model.deviation.json`


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
