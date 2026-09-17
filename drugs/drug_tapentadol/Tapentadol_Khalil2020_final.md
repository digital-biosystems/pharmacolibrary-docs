<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tapentadol&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/&quot;},{&quot;label&quot;:&quot;Khalil_2020 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tapentadol_Watson2019_reference&quot;,&quot;label&quot;:&quot;Watson_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Watson2019_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tapentadol_Khalil2020_final&quot;,&quot;label&quot;:&quot;Khalil_2020_final&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Khalil2020_final.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Tapentadol_Khalil2020_final&quot;,&quot;label&quot;:&quot;Khalil_2020_final&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Khalil2020_final.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Tapentadol_Joczyk2022_reference&quot;,&quot;label&quot;:&quot;Jo\u0144czyk_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Joczyk2022_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tapentadol_Zhang2017_reference&quot;,&quot;label&quot;:&quot;Zhang_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Zhang2017_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# tapentadol — `Tapentadol_Khalil2020_final`

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
Khalil F; Choi SL; Watson E; Tzschentke TM; Lefeber C; Eerdekens M; et al. et al. (2020). Journal of pain research 13
  ·  DOI: [10.2147/JPR.S269549](https://doi.org/10.2147/JPR.S269549)

## Model component
<dbs-pgx drug="tapentadol" model-id="Tapentadol_Khalil2020_final" status="needs_review" stale="false" population="pediatric patients with acute pain" measured-compound="tapentadol" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | t0003:row2:col1, t0003:row2:col2, t0003:row2:col3 | — | 0.0961 (None% RSE) |
| V (L) | `Q61` · V | —(suppressed) | L | — | [l] | not captured | exact (1.0) | t0003:row3:col1, t0003:row3:col2, t0003:row3:col3 | — | 0.13 (None% RSE) |
| Ka (h−1) | `Q49` · kabs | —(suppressed) | h−1 | — | [1] / [h] | not captured | exact (1.0) | t0003:row4:col1, t0003:row4:col2, t0003:row4:col3 | — | 2 (None% RSE) |
| F | `Q40` · Fab | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | t0003:row5:col1, t0003:row5:col2, t0003:row5:col3 | — | not captured |
| TLAG (h) | `Q83` · tlag | —(suppressed) | h | — | [h] | not captured | exact (1.0) | t0003:row6:col1, t0003:row6:col2, t0003:row6:col3 | — | not captured |
| k (wks −1) | `Q47` · kel | —(suppressed) | wks −1 | — | [1] / [wks] | not captured | exact (1.0) | t0003:row9:col1, t0003:row9:col2, t0003:row9:col3 | — | not captured |
| theta_q325_weight_power | `Q900` · theta_q325_weight_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | t0003:row8:col1 | — | not captured |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | t0003:row10:col1 | — | not captured |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | t0003:row11:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Pop. Estimate' — extend the ontology if this is a real PK parameter (source ['t0003:row1:col2'])
- dropped unlinked row (NIL): 'PMA50 (wks)' — extend the ontology if this is a real PK parameter (source ['t0003:row7:col1', 't0003:row7:col2', 't0003:row7:col3'])
- unit_dimension_unknown: 'wks −1' (kel)
- dropped duplicate Q22 ('Cov CL-V', value '0.0867') — already have one for this compound
- covariate effect for Q325 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tapentadol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- model-stage split: 'final model with fixed exponents' is the final model of Khalil_2020 (paper reports 2 stages: final model with estimated exponents, final model with fixed exponents); same population, different model-building step
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell t0003:row12:col2 = '21.1(15.9% shrinkage)'
- unparsed cell t0003:row12:col5 = '20(16.9% shrinkage)'
- unparsed cell t0003:row13:col2 = '30.5(22.4% shrinkage)'
- unparsed cell t0003:row13:col5 = '34.6(24.1% shrinkage)'
- unparsed cell t0003:row14:col2 = '27.9(26.8% shrinkage)'
- unparsed cell t0003:row14:col5 = '28.7(26.6% shrinkage)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['t0003:row2:col1', 't0003:row2:col2', 't0003:row2:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['t0003:row4:col1', 't0003:row4:col2', 't0003:row4:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['t0003:row3:col1', 't0003:row3:col2', 't0003:row3:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['t0003:row6:col1', 't0003:row6:col2', 't0003:row6:col3'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 94.6 | not captured | not captured | ['t0003:row2:col1', 't0003:row2:col2', 't0003:row2:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 94.6 L/h | not captured | not captured | ['t0003:row2:col1', 't0003:row2:col2', 't0003:row2:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 414 L | not captured | not captured | ['t0003:row3:col1', 't0003:row3:col2', 't0003:row3:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tapentadol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Khalil_2020` / `Khalil_2020::final`)


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
