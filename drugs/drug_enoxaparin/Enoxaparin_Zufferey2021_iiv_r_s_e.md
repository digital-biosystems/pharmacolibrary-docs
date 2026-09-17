<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;enoxaparin&quot;,&quot;href&quot;:&quot;drugs/drug_enoxaparin/&quot;},{&quot;label&quot;:&quot;Zufferey_2021 \u00b7 iiv_r_s_e&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Enoxaparin_Zufferey2021_iiv_r_s_e&quot;,&quot;label&quot;:&quot;Zufferey_2021_iiv_r_s_e&quot;,&quot;href&quot;:&quot;drugs/drug_enoxaparin/Enoxaparin_Zufferey2021_iiv_r_s_e.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Enoxaparin_Zufferey2021_iiv_r_s_e&quot;,&quot;label&quot;:&quot;Zufferey_2021_iiv_r_s_e&quot;,&quot;href&quot;:&quot;drugs/drug_enoxaparin/Enoxaparin_Zufferey2021_iiv_r_s_e.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Enoxaparin_Zufferey2021_value_r_s_e&quot;,&quot;label&quot;:&quot;Zufferey_2021_value_r_s_e&quot;,&quot;href&quot;:&quot;drugs/drug_enoxaparin/Enoxaparin_Zufferey2021_value_r_s_e.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Enoxaparin_Zufferey2021_value_r_s_e&quot;,&quot;label&quot;:&quot;Zufferey_2021_value_r_s_e&quot;,&quot;href&quot;:&quot;drugs/drug_enoxaparin/Enoxaparin_Zufferey2021_value_r_s_e.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# enoxaparin — `Enoxaparin_Zufferey2021_iiv_r_s_e`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped

**Steps:**
1. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
2. If the paper never reports it, the record cannot become a model.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Zufferey PJ; Dupont A; Lanoiselée J; Bauters A; Poissy J; Goutay J; et al. et al. (2021). Thrombosis research 205
  ·  DOI: [10.1016/j.thromres.2021.07.010](https://doi.org/10.1016/j.thromres.2021.07.010)

## Model component
<dbs-pgx drug="enoxaparin" model-id="Enoxaparin_Zufferey2021_iiv_r_s_e" status="model_quarantined" stale="false" population="COVID-19 critically ill patients" measured-compound="enoxaparin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (h-1) | `Q49` · kabs | —(suppressed) | h-1 | — | 1/h | not captured | exact (1.0) | Zufferey_2021:results_prose | — | not captured |
| mean volume of distribution | `Q61` · V | —(suppressed) | L | — | L | not captured | boundary (0.8) | Zufferey_2021:discussion_prose | — | not captured |
| Cl (L.h-1) = θ1 × (eGFR/87)θ2 | `Q900` · Cl (L.h-1) = θ1 × (eGFR/87)θ2 | —(suppressed) | L.h-1 | — | not captured | not captured | not captured (not captured) | Zufferey_2021:results_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Cl (L.h-1) = θ1 × (eGFR/87)θ2 | Q22 | not captured | boundary |

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'Cl (L.h-1) = θ1 × (eGFR/87)θ2'
- dropped value-less row: 'V (L) = θ3 × (Wt/85)' (captured trailing unit 'Wt/85' for child rows)
- salvaged Q49 ('Ka (h-1)'=0.48) from results prose — parameter table was unreadable
- salvaged Q22 ('Cl (L.h-1) = θ1 × (eGFR/87)θ2'=0.4) from results prose — parameter table was unreadable
- salvaged Q61 ('mean volume of distribution'=17.9) from results prose — parameter table was unreadable
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Cl (L.h-1) = θ1 × (eGFR/87)θ2); Q61 (mean volume of distribution)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=enoxaparin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- bound model equation to Q22 (CL): Cl = θ1 * (eGFR/87)^θ2
- Q22 (CL) is equation-defined: value moved to equation-variable 'Cl (L.h-1) = θ1 × (eGFR/87)θ2'; equation kept verbatim
- status held at route_to_review — not promoted
- population split: 'iiv (r.s.e)' subgroup of Zufferey_2021 (paper reports 2 populations: iiv (r.s.e), value (r.s.e))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Zufferey_2021_table_3:row1:col1 = '3.35 [1.76–6.16]'
- unparsed cell Zufferey_2021_table_3:row1:col2 = '0.22 [0.13–0.37]'
- unparsed cell Zufferey_2021_table_3:row1:col3 = '0.06 [&lt;0.05–0.17]'
- unparsed cell Zufferey_2021_table_3:row2:col1 = '4.93 [2.62–8.59]'
- unparsed cell Zufferey_2021_table_3:row2:col2 = '0.25 [0.14–0.42]'
- unparsed cell Zufferey_2021_table_3:row2:col3 = '0.15 [0.05–0.31]'
- unparsed cell Zufferey_2021_table_3:row3:col1 = '4.99 [2.69–9.16]'
- unparsed cell Zufferey_2021_table_3:row3:col2 = '0.33 [0.19–0.56]'
- unparsed cell Zufferey_2021_table_3:row3:col3 = '0.09 [&lt;0.05–0.26]'
- unparsed cell Zufferey_2021_table_3:row4:col1 = '6.54 [3.59–11.90]'
- unparsed cell Zufferey_2021_table_3:row4:col2 = '0.33 [0.19–0.57]'
- unparsed cell Zufferey_2021_table_3:row4:col3 = '0.21 [0.07–0.31]'
- unparsed cell Zufferey_2021_table_3:row5:col1 = '7.17 [3.54–13.18]'
- unparsed cell Zufferey_2021_table_3:row5:col2 = '0.36 [0.20–0.63]'
- unparsed cell Zufferey_2021_table_3:row5:col3 = '0.22 [0.06–0.49]'
- unparsed cell Zufferey_2021_table_3:row6:col1 = '14.60 [7.41–26.76]'
- unparsed cell Zufferey_2021_table_3:row6:col2 = '0.72 [0.41–1.27]'
- unparsed cell Zufferey_2021_table_3:row6:col3 = '0.44 [0.13–0.95]'
- unparsed cell Zufferey_2021_table_3:row9:col1 = '5.15 [3.29–8.54]'
- unparsed cell Zufferey_2021_table_3:row9:col2 = '0.45 [0.31–0.68]'
- unparsed cell Zufferey_2021_table_3:row9:col3 = '0.07 [&lt;0.05–0.17]'
- companion parameter table 3 transcribed (13 record(s))
- LLM selected parameter table(s) 2, 3
- captured model equation Cl = θ1 * (eGFR/87)^θ2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 17.9 L | not captured | not captured | ['Zufferey_2021:discussion_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 64 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 68 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_enoxaparin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zufferey_2021` / `Zufferey_2021::iiv_r_s_e`)
- model: `../../../knowledgebase/drugs/drug_enoxaparin/models/modelica/_needs_review/Enoxaparin_Zufferey2021_iiv_r_s_e.mo`
- deviation: `../../../knowledgebase/drugs/drug_enoxaparin/models/modelica/_needs_review/Enoxaparin_Zufferey2021_iiv_r_s_e.deviation.json`


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
