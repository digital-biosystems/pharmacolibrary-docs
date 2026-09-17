<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;flurbiprofen&quot;,&quot;href&quot;:&quot;drugs/drug_flurbiprofen/&quot;},{&quot;label&quot;:&quot;Yao_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flurbiprofen_Yao2025_reference&quot;,&quot;label&quot;:&quot;Yao_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_flurbiprofen/Flurbiprofen_Yao2025_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Flurbiprofen_Kumpulainen2010v2_reference&quot;,&quot;label&quot;:&quot;Kumpulainen_2010_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_flurbiprofen/Flurbiprofen_Kumpulainen2010v2_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flurbiprofen_Zhang2018_reference&quot;,&quot;label&quot;:&quot;Zhang_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_flurbiprofen/Flurbiprofen_Zhang2018_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# flurbiprofen — `Flurbiprofen_Yao2025_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped

**Steps:**
1. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
2. If the paper never reports it, the record cannot become a model.

<sub>owner: **scholar** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `flurbiprofen`, measured `R(-)-flurbiprofen and S(+)-flurbiprofen`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Yao H; Luo X; Yuan J; Zhang H; An H; Feng Y et al. (2025). Drug design, development and therapy 19
  ·  DOI: [10.2147/DDDT.S542722](https://doi.org/10.2147/DDDT.S542722)

## Model component
<dbs-pgx drug="flurbiprofen" model-id="Flurbiprofen_Yao2025_reference" status="model_quarantined" stale="false" population="selective joint replacement patients with postoperative pain" measured-compound="R(-)-flurbiprofen and S(+)-flurbiprofen" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V c , L | `Q61` · V | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_4:row3:col1, tab_4:row3:col2, tab_4:row3:col3 | — | not captured |
| CL, L•h -1 | `Q22` · CL | —(suppressed) | not captured | — | not captured | not captured | boundary (0.8) | tab_4:row4:col1, tab_4:row4:col2, tab_4:row4:col3 | — | not captured |
| Q, L•h -1 | `Q30` · Q | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_4:row6:col1, tab_4:row6:col2 | — | not captured |
| GA | `Q41` · FG | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_4:row9:col1, tab_4:row9:col2 | — | not captured |
| ωV c | `Q65` · Vss | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_4:row12:col1 | — | not captured |
| ωQ | `Q314` · omega_cov | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_4:row15:col1 | — | not captured |
| Plasma, additive error, σ | `Q317` · add_error | —(suppressed) | not captured | — | not captured | not captured | boundary (0.8) | tab_4:row17:col1 | — | not captured |
| CSF, multiplicative error, σ | `Q315` · sigma | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_4:row18:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q61 ('V p , L', value '33.5') — already have one for this compound
- dropped duplicate Q61 ('BSA on V c', value '0.59') — already have one for this compound
- dropped unlinked row (NIL): 'GG' — extend the ontology if this is a real PK parameter (source ['tab_4:row10:col1', 'tab_4:row10:col2'])
- dropped duplicate Q22 ('ωCL', value '0.12') — already have one for this compound
- dropped duplicate Q65 ('ωV p', value '0.22') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=R(-)-flurbiprofen and S(+)-flurbiprofen

**Extraction notes:**
- unparsed cell tab_4:row1:col3 = '95% CI'
- unparsed cell tab_4:row6:col3 = '0.19 to 0.92'
- unparsed cell tab_4:row7:col3 = '-0.07 to1.96'
- unparsed cell tab_4:row9:col3 = '-0.42 to -0.05'
- unparsed cell tab_4:row10:col3 = '-5.2 to -1.2'
- LLM region Yao_2025:other_prose: no JSON records returned
- LLM region Yao_2025:discussion_prose: no JSON records returned

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.92 | not captured | not captured | ['tab_4:row4:col1', 'tab_4:row4:col2', 'tab_4:row4:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_flurbiprofen/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yao_2025` / `Yao_2025::reference`)
- model: `../../../knowledgebase/drugs/drug_flurbiprofen/models/modelica/_needs_review/Flurbiprofen_Yao2025_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_flurbiprofen/models/modelica/_needs_review/Flurbiprofen_Yao2025_reference.deviation.json`


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
