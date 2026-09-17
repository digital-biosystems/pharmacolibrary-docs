<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;amiodarone&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/&quot;},{&quot;label&quot;:&quot;Hirai_2022 \u00b7 reference&quot;}]"></div>

# amiodarone — `Amiodarone_Hirai2022_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `V`, `Frel`, `t1/2ka`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the engineer's deviations are not documented and quantified. Evidence: T6_deviations — got defaulted_parameters: structural deviation not quantified.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
3. If the paper never reports it, the record cannot become a model.
4. Read the .deviation.json and confirm each deviation names what changed and why.
5. Anything undocumented needs the engineer, not a curator.

<sub>owner: **scholar** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Hirai T; Kasai H; Takahashi M; Uchida S; Akai N; Hanada K; et al. et al. (2022). Biological & pharmaceutical bulletin 45
  ·  DOI: [10.1248/bpb.b21-00940](https://doi.org/10.1248/bpb.b21-00940)

## Model component
<dbs-pgx drug="amiodarone" model-id="Amiodarone_Hirai2022_reference" status="model_quarantined" stale="false" population="adult patients treated with amiodarone" measured-compound="amiodarone" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL AMD , L/h | `Q22` · CL | —(suppressed) | not captured | — | not captured | not captured | boundary (0.8) | tab_0:row4:col1, tab_0:row4:col2, tab_0:row4:col3 | — | not captured |
| Vd AMD , L/kg (fixed) | `Q61` · V | —(suppressed) | fixed | — | [fixed] | not captured | boundary (0.8) | tab_0:row5:col1, tab_0:row5:col3 | — | not captured |
| F oral , % (fixed) | `Q87` · Frel | —(suppressed) | fixed | — | [fixed] | not captured | llm (0.5) | tab_0:row6:col1, tab_0:row6:col3 | — | not captured |
| k a , /h (fixed) | `Q95` · t1/2ka | —(suppressed) | fixed | — | [fixed] | not captured | llm (0.5) | tab_0:row7:col1, tab_0:row7:col3 | — | not captured |
| σ, % | `Q315` · sigma | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_0:row11:col1, tab_0:row11:col2, tab_0:row11:col3, tab_0:row19:col1, tab_0:row19:col2, tab_0:row19:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL AMD | Q22 | not captured | boundary |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'fixed' (V)
- unit_dimension_unknown: 'fixed' (Frel)
- unit_dimension_unknown: 'fixed' (t1/2ka )
- dropped duplicate Q22 ('ωCL AMD , %', value '46.9') — already have one for this compound
- dropped duplicate Q22 ('CL DEA /f m , L/h Glucocorticoids on CL DEA /f m', value '10.1') — already have one for this compound
- dropped duplicate Q61 ('Vd DEA , L/kg (fixed)', value '14.0') — already have one for this compound
- dropped duplicate Q22 ('ωCL DEA , %', value '42.6') — already have one for this compound
- NIL: refused to back-fill base 'V' from footnote/prose loose number 14.0 (source ['fig_0:caption']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'CL' from footnote/prose loose number 10.3 (source ['fig_0:caption']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amiodarone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell tab_0:row1:col4 = '95% CI'
- unparsed cell tab_0:row4:col4 = '7.6 to 7.8'
- unparsed cell tab_0:row9:col4 = '46.1 to 47.8'
- unparsed cell tab_0:row11:col4 = '30.7 to 31.1'
- unparsed cell tab_0:row14:col2 = '11.0 42.5'
- unparsed cell tab_0:row14:col4 = '10.0 to 10.2 -0.38 to -0.36'
- unparsed cell tab_0:row17:col4 = '41.7 to 43.5'
- unparsed cell tab_0:row19:col4 = '23.1 to 23.5'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.7 | not captured | not captured | ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | parent_metabolite → PK_Parent_Metabolite* | PK_Parent_Metabolite | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: structural deviation not quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amiodarone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hirai_2022` / `Hirai_2022::reference`)
- model: `../../../knowledgebase/drugs/drug_amiodarone/models/modelica/_needs_review/Amiodarone_Hirai2022_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_amiodarone/models/modelica/_needs_review/Amiodarone_Hirai2022_reference.deviation.json`


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
