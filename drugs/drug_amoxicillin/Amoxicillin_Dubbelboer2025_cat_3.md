<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;amoxicillin&quot;,&quot;href&quot;:&quot;drugs/drug_amoxicillin/&quot;},{&quot;label&quot;:&quot;Dubbelboer_2025 \u00b7 cat_3&quot;}]"></div>

# amoxicillin — `Amoxicillin_Dubbelboer2025_cat_3`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the engineer's deviations are not documented and quantified. Evidence: T6_deviations — got defaulted_parameters: structural deviation not quantified

**Steps:**
1. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
2. If the paper never reports it, the record cannot become a model.
3. Read the .deviation.json and confirm each deviation names what changed and why.
4. Anything undocumented needs the engineer, not a curator.

<sub>owner: **scholar** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Dubbelboer IR; Olsén L; Pelander L; Lacroix MZ; Claustre L; Roques B; et al. et al. (2025). Journal of veterinary pharmacology and therapeutics 48
  ·  DOI: [10.1111/jvp.70003](https://doi.org/10.1111/jvp.70003)

## Model component
<dbs-pgx drug="amoxicillin" model-id="Amoxicillin_Dubbelboer2025_cat_3" status="model_quarantined" stale="false" population="healthy cats" measured-compound="amoxicillin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cl | `Q22` · CL | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | Dubbelboer_2025_table_1:row0:col4 | — | not captured |
| V d | `Q61` · V | —(suppressed) | not captured | — | not captured | not captured | space_fold (0.95) | Dubbelboer_2025_table_1:row1:col4 | — | not captured |
| C maxPO | `Q32` · Cmax | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | Dubbelboer_2025_table_1:row2:col4 | — | not captured |
| T maxPO | `Q56` · tmax | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | Dubbelboer_2025_table_1:row4:col4 | — | not captured |
| AUC0‐ꚙIV | `Q17` · AUC∞ | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | Dubbelboer_2025_table_1:row6:col4 | — | not captured |
| k eIV | `Q47` · kel | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | Dubbelboer_2025_table_1:row9:col4 | — | not captured |
| t 1/2zIV | `Q57` · t1/2z | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | Dubbelboer_2025_table_1:row12:col4 | — | not captured |
| ka (h−1) | `Q49` · kabs | —(suppressed) | h−1 | — | 1/h | not captured | review_gapfill (0.7) | Baklouti_2026:review | — | not captured |
| T lagpo | `Q83` · tlag | —(suppressed) | h | — | h | not captured | review_gapfill (0.7) | Dubbelboer_2025:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q32 ('C max SC', value '10.2') — already have one for this compound
- dropped duplicate Q56 ('T maxSC', value '2') — already have one for this compound
- dropped duplicate Q17 ('AUC0‐ꚙPO', value '21.4') — already have one for this compound
- dropped duplicate Q17 ('AUC0‐ꚙSC', value '62.0') — already have one for this compound
- dropped duplicate Q47 ('k ePO', value '0.21') — already have one for this compound
- dropped duplicate Q47 ('k eSC', value '0.33') — already have one for this compound
- dropped duplicate Q57 ('t 1/2zPO', value '3.3') — already have one for this compound
- dropped duplicate Q57 ('t 1/2zSC', value '2.1') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amoxicillin
- population split: 'cat 3' subgroup of Dubbelboer_2025 (paper reports 8 populations: cat 1, cat 2, cat 3, cat 4, cat 5, cat 6, median, typical value)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Baklouti_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Dubbelboer_2025's review values (primary lacked it)

**Extraction notes:**
- companion parameter table 1 transcribed (103 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Baklouti_2026:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Dubbelboer_2025:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.17 | not captured | not captured | ['Dubbelboer_2025_table_1:row0:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: structural deviation not quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amoxicillin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Dubbelboer_2025` / `Dubbelboer_2025::cat_3`)
- model: `../../../knowledgebase/drugs/drug_amoxicillin/models/modelica/_needs_review/Amoxicillin_Dubbelboer2025_cat_3.mo`
- deviation: `../../../knowledgebase/drugs/drug_amoxicillin/models/modelica/_needs_review/Amoxicillin_Dubbelboer2025_cat_3.deviation.json`


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
