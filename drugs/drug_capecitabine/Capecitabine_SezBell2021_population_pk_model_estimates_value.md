<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;capecitabine&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/&quot;},{&quot;label&quot;:&quot;S\u00e1ez-Bell\u00f3_2021 \u00b7 population_pk_model_estimates_value&quot;}]"></div>

# capecitabine — `Capecitabine_SezBell2021_population_pk_model_estimates_value`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — reviewer_tooling.** the check reported a failure without computing a comparison, so this is an inconclusive check rather than a demonstrated fault<br><sub>evidence: `C6_cl_magnitude failed (ratio None)`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** clearance is outside the plausible magnitude window.

**Steps:**
1. Not a curation fix — reviewer_tooling limitation.
2. Check the parameter's unit_verbatim — an unconverted per-kg or per-hour unit is the usual cause, not a genuinely extreme value.
3. Confirm value_si against the paper's reported number.
4. A 'ratio None' means the check could not compute a ratio, so treat the window as unverified rather than as a failure of the value.

<sub>owner: **curator** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Sáez-Belló M; Mangas-Sanjuán V; Martínez-Gómez MA; López-Montenegro Soria MÁ; Climente-Martí M; Merino-Sanjuán M et al. (2021). British journal of clinical pharmacology 87
  ·  DOI: [10.1111/bcp.14441](https://doi.org/10.1111/bcp.14441)

## Model component
<dbs-pgx drug="capecitabine" model-id="Capecitabine_SezBell2021_population_pk_model_estimates_value" status="needs_review" stale="false" population="adults with colorectal cancer" measured-compound="capecitabine" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| t₁ₐg (h) | `Q83` · tlag | —(suppressed) | h | — | [h] | not captured | llm (0.6) | Sáez-Belló_2021_table_p5_1:row0:col1 | — | not captured |
| kₐ (h⁻¹) | `Q49` · kabs | —(suppressed) | h⁻¹ | — | [1] / [h] | not captured | exact (1.0) | Sáez-Belló_2021_table_p5_1:row2:col1 | — | not captured |
| CL₀ CAP (L/h) | `Q22` · CL | —(suppressed) | L/h | — | [l] / [h] | not captured | llm (0.6) | Sáez-Belló_2021_table_p5_1:row3:col1 | — | not captured |
| V₂ CAP (L) | `Q64` · V2 | —(suppressed) | L | — | [l] | not captured | llm_confirmed (0.6) | Sáez-Belló_2021_table_p5_1:row9:col1 | — | not captured |
| V₃ 5'-DFUR(L) | `Q77` · V3 | —(suppressed) | L | — | [l] | not captured | llm_confirmed (0.6) | Sáez-Belló_2021_table_p5_1:row10:col1 | — | not captured |
| CL₂ (%) | `Q30` · Q | —(suppressed) | not captured | — | not captured | not captured | special_case (0.95) | Sáez-Belló_2021_table_p5_1:row16:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'beta_t1ag_oxaliplatin' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row1:col1'])
- dropped duplicate Q22 ('CL₂ CAP (L/h)', value '26.8') — already have one for this compound
- dropped duplicate Q22 ("CL₃ 5'-DFUR (L/h)", value '9.0') — already have one for this compound
- dropped unlinked row (NIL): 'beta_CL3_rs6720173' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row6:col1'])
- dropped duplicate Q22 ('CL₄ 5-FU (L/h)', value '12.8') — already have one for this compound
- dropped unlinked row (NIL): 'beta_CL4_rs2271862' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row8:col1'])
- dropped duplicate Q77 ('V₄ 5-FU(L)', value '1') — already have one for this compound
- dropped duplicate Q83 ('t₁ag (%)', value '20') — already have one for this compound
- dropped duplicate Q49 ('kₐ (%)', value '110') — already have one for this compound
- dropped unlinked row (NIL): 'CL₀ (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row15:col1'])
- dropped unlinked row (NIL): 'CL₃ (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row17:col1'])
- dropped unlinked row (NIL): 'CL₄ (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row18:col1'])
- dropped duplicate Q64 ('V₂ (%)', value '55') — already have one for this compound
- dropped unlinked row (NIL): 'CorrCL₂ − CL₀ (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row20:col1'])
- dropped unlinked row (NIL): 'Corrkₐ − CL₀ (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row21:col1'])
- dropped unlinked row (NIL): 'Corrkₐ − CL₂ (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row22:col1'])
- dropped unlinked row (NIL): 'CAP (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row24:col1'])
- dropped unlinked row (NIL): "5'-DFUR (%)" — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row25:col1'])
- dropped unlinked row (NIL): '5-FU (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row26:col1'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL₀ CAP (L/h)); Q64 (V₂ CAP (L)); Q30 (CL₂ (%))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=capecitabine
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- population split: 'population pk model estimates value' subgroup of Sáez-Belló_2021 (paper reports 3 populations: population pk model estimates rse (%), population pk model estimates shrinkage (%), population pk model estimates value)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Sáez-Belló_2021_table_p5_1:row21:col6 = '−88 to −71'
- unparsed cell Sáez-Belló_2021_table_p5_1:row22:col6 = '−101 to −87'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Sáez-Belló_2021_table_p5_1:row3:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Sáez-Belló_2021_table_p5_1:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Sáez-Belló_2021_table_p5_1:row9:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['Sáez-Belló_2021_table_p5_1:row10:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Sáez-Belló_2021_table_p5_1:row0:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 294.0 | not captured | not captured | ['Sáez-Belló_2021_table_p5_1:row3:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 294 L/h | not captured | not captured | ['Sáez-Belló_2021_table_p5_1:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 449 L | not captured | not captured | ['Sáez-Belló_2021_table_p5_1:row9:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_capecitabine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sáez-Belló_2021` / `Sáez-Belló_2021::population_pk_model_estimates_value`)


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
