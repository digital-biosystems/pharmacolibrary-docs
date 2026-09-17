<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;von Willebrand factor&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/&quot;},{&quot;label&quot;:&quot;Bukkems_2021 \u00b7 final&quot;}]"></div>

# von Willebrand factor — `VonWillebrandFactor_Bukkems2021_final`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the engineer's deviations are not documented and quantified. Evidence: T6_deviations — got defaulted_parameters: structural deviation not quantified

**Steps:**
1. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
2. If the paper never reports it, the record cannot become a model.
3. Read the .deviation.json and confirm each deviation names what changed and why.
4. Anything undocumented needs the engineer, not a curator.

<sub>owner: **scholar** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `VWF/FVIII concentrate`, measured `von Willebrand factor`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Bukkems LH; Heijdra JM; de Jager NCB; Hazendonk HCAM; Fijnvandraat K; Meijer K; et al. et al. (2021). Blood advances 5
  ·  DOI: [10.1182/bloodadvances.2020003891](https://doi.org/10.1182/bloodadvances.2020003891)

## Model component
<dbs-pgx drug="von Willebrand factor" model-id="VonWillebrandFactor_Bukkems2021_final" status="model_quarantined" stale="false" population="patients with von Willebrand disease" measured-compound="von Willebrand factor" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL FVIII, mL/70 kg/h | `Q22` · CL | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | tab_1:row2:col2, tab_1:row2:col3, tab_1:row2:col4, tab_1:row2:col6 | — | 11.3 (None% RSE) |
| V FVIII, mL/70 kg | `Q352` · Vnorm | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | tab_1:row3:col2, tab_1:row3:col3, tab_1:row3:col4, tab_1:row3:col6 | — | not captured |
| Vd value | `Q61` · V | —(suppressed) | mL/70 kg | — | L | not captured | review_gapfill (0.7) | Al_2025:review | — | not captured |
| Absorption rate constant (kapop) [h−1] | `Q49` · kabs | —(suppressed) | h−1 | — | 1/h | not captured | review_gapfill (0.7) | Schöning_2026:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Baseline FVIII, IU/mL' — extend the ontology if this is a real PK parameter (source ['tab_1:row4:col2', 'tab_1:row4:col3', 'tab_1:row4:col4', 'tab_1:row4:col6'])
- dropped duplicate Q22 ('CL VWF, mL/70 kg/h', value '7.5') — already have one for this compound
- dropped duplicate Q352 ('V VWF, mL/70 kg', value '4.1') — already have one for this compound
- dropped unlinked row (NIL): 'Baseline VWF, IU/mL' — extend the ontology if this is a real PK parameter (source ['tab_1:row7:col2', 'tab_1:row7:col3', 'tab_1:row7:col4', 'tab_1:row7:col6'])
- dropped PD-category row 'IC 50 , IU/mL' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row8:col2', 'tab_1:row8:col3', 'tab_1:row8:col4', 'tab_1:row8:col6'])
- dropped PD-category row 'I max' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row9:col3', 'tab_1:row9:col6'])
- dropped unlinked row (NIL): 'Duration of surgery on CL VWF' — extend the ontology if this is a real PK parameter (source ['tab_1:row23:col3', 'tab_1:row23:col4'])
- dropped unlinked row (NIL): 'VWD type 2 on baseline VWF' — extend the ontology if this is a real PK parameter (source ['tab_1:row24:col3', 'tab_1:row24:col4', 'tab_1:row24:col6'])
- dropped unlinked row (NIL): 'VWD type 3 on baseline VWF' — extend the ontology if this is a real PK parameter (source ['tab_1:row25:col3', 'tab_1:row25:col4', 'tab_1:row25:col6'])
- dropped unlinked row (NIL): 'ASA score III/IV on baseline VWF' — extend the ontology if this is a real PK parameter (source ['tab_1:row26:col3', 'tab_1:row26:col4', 'tab_1:row26:col6'])
- dropped unlinked row (NIL): 'VWD type 2 on CL FVIII' — extend the ontology if this is a real PK parameter (source ['tab_1:row27:col3', 'tab_1:row27:col4', 'tab_1:row27:col6'])
- dropped unlinked row (NIL): 'VWD type 3 on CL FVIII' — extend the ontology if this is a real PK parameter (source ['tab_1:row28:col3', 'tab_1:row28:col4', 'tab_1:row28:col6'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=von Willebrand factor
- model-stage split: 'final model' is the final model of Bukkems_2021 (paper reports 2 stages: final model, structural model); same population, different model-building step
- gap-filled Q61 (V) from Al_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Schöning_2026's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_1:row16:col6 = '22.9 to 60.3'
- unparsed cell tab_1:row23:col6 = '20.56 to 20.18'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Schöning_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Al_2025:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 39.1 | not captured | not captured | ['tab_1:row2:col2', 'tab_1:row2:col3', 'tab_1:row2:col4', 'tab_1:row2:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 6.49 L | not captured | not captured | ['Al_2025:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: structural deviation not quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | skipped | 11.4 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 11.4 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 12 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 6.6 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 60 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 12 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_von_willebrand_factor/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bukkems_2021` / `Bukkems_2021::final`)
- model: `../../../knowledgebase/drugs/drug_von_willebrand_factor/models/modelica/_needs_review/VonWillebrandFactor_Bukkems2021_final.mo`
- deviation: `../../../knowledgebase/drugs/drug_von_willebrand_factor/models/modelica/_needs_review/VonWillebrandFactor_Bukkems2021_final.deviation.json`


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
