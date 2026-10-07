<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01G&quot;,&quot;href&quot;:&quot;atc/J01G.md&quot;},{&quot;label&quot;:&quot;plazomicin&quot;,&quot;href&quot;:&quot;drugs/drug_plazomicin/&quot;},{&quot;label&quot;:&quot;Trang_2019_2 \u00b7 final_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Plazomicin_Kuti2019v2_reference&quot;,&quot;label&quot;:&quot;Kuti_2019_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_plazomicin/Plazomicin_Kuti2019v2_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Plazomicin_Trang2019v2_geometric_mean_value_cv_d&quot;,&quot;label&quot;:&quot;Trang_2019_2_geometric_mean_value_cv_d&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_plazomicin/Plazomicin_Trang2019v2_geometric_mean_value_cv_d.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# plazomicin — `Plazomicin_Trang2019v2_final_model`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Trang M et al., Population Pharmacokinetic Analyses for…, Antimicrobial agents and ch… (2019)
  ·  DOI: [10.1128/AAC.02329-18](https://doi.org/10.1128/AAC.02329-18)

## Model component
<dbs-pgx drug="plazomicin" model-id="Plazomicin_Trang2019v2_final_model" status="needs_review" stale="false" population="adult patients with cUTI/AP and serious infections caused by CRE" measured-compound="plazomicin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted, plus 5 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Nonrenal CL (liters/h) | `Q79` · CLNR | 0.491 | liters/h | 1.363888888888889e-07 | [l] / [h] | not captured | llm_corrected (0.6) | T2:row3:col1, T2:row3:col2 | — | not captured |
| CLR maximum (liters/h) | `Q26` · CLR | 4.80 | liters/h | 1.3333333333333332e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | T2:row4:col1, T2:row4:col2 | — | not captured |
| Coefficient | `Q900` · equation variable | 9.10 | liters | not captured | [l] | not captured | llm (0.6) | T2:row11:col1, T2:row11:col2, T2:row16:col1, T2:row16:col2, T2:row19:col1, T2:row19:col2, T2:row24:col1, T2:row24:col2, T2:row29:col1, T2:row29:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.529 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row7:col1, T2:row7:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 1.23 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row12:col1, T2:row12:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 1.17 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row20:col1, T2:row20:col2 | — | not captured |
| theta_q335_age_vp1_slope | `Q900` · theta_q335_age_vp1_slope | 0.00954 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row21:col1, T2:row21:col2 | — | not captured |
| theta_q319_height_power | `Q900` · theta_q319_height_power | 3.38 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row25:col1, T2:row25:col2 | — | not captured |
| Tigecycline 4 Vc (L) | `Q61` · V | 100.2 | L | 0.10020000000000001 | L | not captured | review_gapfill (0.7) | Kuti_2019_2:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Additive component' routed out of structural estimates ('Residual variability, σ2')
- table section residual_error: 'CCV component for phase 1 studies' routed out of structural estimates ('Residual variability, σ2')
- table section residual_error: 'CCV component for phase 2 studies' routed out of structural estimates ('Residual variability, σ2')
- table section residual_error: 'CCV component for phase 3 studies' routed out of structural estimates ('Residual variability, σ2')
- dropped unlinked row (NIL): 'Baseline CLCR50 (ml/min/1.73 m2)' — extend the ontology if this is a real PK parameter (source ['T2:row5:col1', 'T2:row5:col2'])
- dropped PD-category row 'Hill coefficient' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row6:col1', 'T2:row6:col2'])
- dropped unlinked row (NIL): 'Proportional increase for AP patients' — extend the ontology if this is a real PK parameter (source ['T2:row8:col1', 'T2:row8:col2'])
- dropped unlinked row (NIL): 'Proportional increase for BSI patients' — extend the ontology if this is a real PK parameter (source ['T2:row9:col1', 'T2:row9:col2'])
- dropped unlinked row (NIL): 'Proportional increase for cUTI and AP patients' — extend the ontology if this is a real PK parameter (source ['T2:row13:col1', 'T2:row13:col2', 'T2:row17:col1', 'T2:row17:col2', 'T2:row22:col1', 'T2:row22:col2', 'T2:row26:col1', 'T2:row26:col2'])
- dropped unlinked row (NIL): 'Proportional increase for BSI and HABP/VABP patients' — extend the ontology if this is a real PK parameter (source ['T2:row14:col1', 'T2:row14:col2', 'T2:row27:col1', 'T2:row27:col2'])
- dropped unlinked row (NIL): 'Vp2-weight power' — extend the ontology if this is a real PK parameter (source ['T2:row30:col1', 'T2:row30:col2'])
- dropped unlinked row (NIL): 'Proportional increase for vasopressor use' — extend the ontology if this is a real PK parameter (source ['T2:row31:col1', 'T2:row31:col2'])
- dropped unlinked row (NIL): 'Sum of UFR and DFR (liters/h)' — extend the ontology if this is a real PK parameter (source ['T2:row33:col1'])
- dropped unlinked row (NIL): 'Sieving coefficient' — extend the ontology if this is a real PK parameter (source ['T2:row34:col1', 'T2:row34:col2'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q335 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=plazomicin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'final model' subgroup of Trang_2019_2 (paper reports 2 populations: final model, geometric mean value (% cv)d)
- gap-filled Q61 (V) from Kuti_2019_2's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell T2:row3:col4 = '0.210 to 0.577'
- unparsed cell T2:row4:col4 = '4.44 to 5.48'
- unparsed cell T2:row5:col4 = '41.9 to 49.8'
- unparsed cell T2:row6:col4 = '2.01 to 2.93'
- unparsed cell T2:row7:col4 = '0.397 to 0.651'
- unparsed cell T2:row8:col4 = '0.0776 to 0.179'
- unparsed cell T2:row9:col4 = '–0.300 to 0.0648'
- unparsed cell T2:row11:col4 = '8.54 to 9.64'
- unparsed cell T2:row12:col4 = '0.869 to 1.59'
- unparsed cell T2:row13:col4 = '0.867 to 1.23'
- unparsed cell T2:row14:col4 = '1.14 to 1.99'
- unparsed cell T2:row16:col4 = '7.09 to 9.15'
- unparsed cell T2:row17:col4 = '–0.880 to 0.748'
- unparsed cell T2:row19:col4 = '8.19 to 9.16'
- unparsed cell T2:row20:col4 = '0.670 to 1.72'
- unparsed cell T2:row21:col4 = '0.00796 to 0.0111'
- unparsed cell T2:row22:col4 = '–0.530 to 0.309'
- unparsed cell T2:row24:col4 = '0.186 to 0.215'
- unparsed cell T2:row25:col4 = '2.15 to 4.43'
- unparsed cell T2:row26:col4 = '–0.533 to 0.0699'
- unparsed cell T2:row27:col4 = '1.62 to 5.00'
- unparsed cell T2:row29:col4 = '5.99 to 8.23'
- unparsed cell T2:row30:col4 = '0.881 to 2.13'
- unparsed cell T2:row31:col4 = '2.05 to 6.99'
- unparsed cell T2:row34:col4 = '0.405 to 0.999'
- unparsed cell T2:row35:col4 = '0.0870 to 0.120'
- unparsed cell T2:row36:col4 = '0.156 to 0.270'
- unparsed cell T2:row37:col4 = '0.00196 to 0.120'
- unparsed cell T2:row38:col4 = '0.0491 to 0.0998'
- unparsed cell T2:row39:col4 = '0.0165 to 0.0469'
- unparsed cell T2:row40:col4 = '0.0433 to 0.221'
- unparsed cell T2:row41:col4 = '0.000413 to 0.00287'
- unparsed cell T2:row42:col4 = '0.0701 to 0.122'
- unparsed cell T2:row43:col4 = '0.0589 to 0.0952'
- unparsed cell T2:row44:col4 = '0.0491 to 0.0906'
- unparsed cell T2:row46:col4 = '0.0000511 to 0.000179'
- unparsed cell T2:row47:col4 = '0.0256 to 0.0345'
- unparsed cell T2:row48:col4 = '0.133 to 0.207'
- unparsed cell T2:row49:col4 = '0.0727 to 0.0967'
- companion parameter table 3 transcribed (32 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row4:col1', 'T2:row4:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kuti_2019_2:review'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row3:col1', 'T2:row3:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 100 L | not captured | not captured | ['Kuti_2019_2:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_plazomicin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Trang_2019_2` / `Trang_2019_2::final_model`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:58 UTC</sub>
