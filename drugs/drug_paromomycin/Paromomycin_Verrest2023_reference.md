<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;paromomycin&quot;,&quot;href&quot;:&quot;drugs/drug_paromomycin/&quot;},{&quot;label&quot;:&quot;Verrest_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Paromomycin_Lentzen1981_reference&quot;,&quot;label&quot;:&quot;Lentzen_1981_reference&quot;,&quot;href&quot;:&quot;drugs/drug_paromomycin/Paromomycin_Lentzen1981_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paromomycin_Verrest2021v2_reference&quot;,&quot;label&quot;:&quot;Verrest_2021_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_paromomycin/Paromomycin_Verrest2021v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paromomycin_Verrest2023_reference&quot;,&quot;label&quot;:&quot;Verrest_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_paromomycin/Paromomycin_Verrest2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# paromomycin — `Paromomycin_Verrest2023_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** C5 dimensioned parameter(s) without a unit: Q30 — no SI value to build from
**How to address:** Compare unit_verbatim with unit_canonical in _interpretv2.yaml for that parameter.
<sub>owner: **curator**</sub>

## Citation
Verrest L; Roseboom IC; Wasunna M; Mbui J; Njenga S; Musa AM; et al. et al. (2023). The Journal of antimicrobial chemotherapy 78
  ·  DOI: [10.1093/jac/dkad286](https://doi.org/10.1093/jac/dkad286)

## Model component
<dbs-pgx drug="paromomycin" model-id="Paromomycin_Verrest2023_reference" status="needs_review" stale="false" population="children and adults with visceral leishmaniasis" measured-compound="paromomycin" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 2.62 | L/h | 7.277777777777778e-07 | [l] / [h] | not captured | exact (1.0) | dkad286-T3:row2:col1, dkad286-T3:row2:col2 | — | not captured |
| V c (L) | `Q63` · V1 | 13.6 | L | 0.0136 | [l] | not captured | space_fold (0.95) | dkad286-T3:row3:col1, dkad286-T3:row3:col2, Verrest_2023_table_4:row2:col1, Verrest_2023_table_4:row2:col2 | — | not captured |
| Q | `Q30` · Q | 0.26 | not captured | not captured | not captured | not captured | exact (1.0) | dkad286-T3:row4:col1, dkad286-T3:row4:col2 | — | not captured |
| V p (L) | `Q64` · V2 | 2.22 | L | 0.00222 | [l] | not captured | space_fold (0.95) | dkad286-T3:row5:col1, dkad286-T3:row5:col2, Verrest_2023_table_4:row4:col1, Verrest_2023_table_4:row4:col2 | — | not captured |
| ka (h−1) | `Q49` · kabs | 2.05 | h−1 | 0.0005694444444444444 | [1] / [h] | not captured | exact (1.0) | dkad286-T3:row6:col1, dkad286-T3:row6:col2 | — | not captured |
| F1 | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | dkad286-T3:row7:col1, Verrest_2023_table_4:row6:col1 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | -2.40 | not captured | not captured | not captured | not captured | not captured (not captured) | Verrest_2023_table_4:row8:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'COVCL,neutrc (fractional change/103 cells/µL)' — extend the ontology if this is a real PK parameter (source ['dkad286-T3:row8:col1'])
- dropped unlinked row (NIL): 'CL (CV%)' — extend the ontology if this is a real PK parameter (source ['dkad286-T3:row10:col1', 'dkad286-T3:row10:col2', 'Verrest_2023_table_4:row10:col1', 'Verrest_2023_table_4:row10:col2'])
- dropped duplicate Q22 ('CL (L/day)', value '1.85') — already have one for this compound
- dropped duplicate Q30 ('Q (L/day)', value '0.17') — already have one for this compound
- dropped duplicate Q49 ('ka (day−1)', value '0.037') — already have one for this compound
- dropped unlinked row (NIL): 'COVF,W1b (fractional change)' — extend the ontology if this is a real PK parameter (source ['Verrest_2023_table_4:row7:col1'])
- dropped unlinked row (NIL): 'COVF,W1 (CV%)' — extend the ontology if this is a real PK parameter (source ['Verrest_2023_table_4:row11:col1', 'Verrest_2023_table_4:row11:col2'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=paromomycin
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell dkad286-T3:row8:col2 = '−0.16 to −0.10'
- unparsed cell Verrest_2023_table_4:row7:col2 = '−0.57 to −0.73'
- unparsed cell Verrest_2023_table_4:row8:col2 = '−3.79 to −1.21'
- companion parameter table 4 transcribed (22 record(s), model stage 'final')
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['dkad286-T3:row2:col1', 'dkad286-T3:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['dkad286-T3:row6:col1', 'dkad286-T3:row6:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['dkad286-T3:row3:col1', 'dkad286-T3:row3:col2', 'Verrest_2023_table_4:row2:col1', 'Verrest_2023_table_4:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['dkad286-T3:row5:col1', 'dkad286-T3:row5:col2', 'Verrest_2023_table_4:row4:col1', 'Verrest_2023_table_4:row4:col2'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['dkad286-T3:row4:col1', 'dkad286-T3:row4:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.62 | not captured | not captured | ['dkad286-T3:row2:col1', 'dkad286-T3:row2:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.62 L/h | not captured | not captured | ['dkad286-T3:row2:col1', 'dkad286-T3:row2:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 13.6 L | not captured | not captured | ['dkad286-T3:row3:col1', 'dkad286-T3:row3:col2', 'Verrest_2023_table_4:row2:col1', 'Verrest_2023_table_4:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.22 L | not captured | not captured | ['dkad286-T3:row5:col1', 'dkad286-T3:row5:col2', 'Verrest_2023_table_4:row4:col1', 'Verrest_2023_table_4:row4:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_paromomycin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Verrest_2023` / `Verrest_2023::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-22 02:23 UTC</sub>
