<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;delamanid&quot;,&quot;href&quot;:&quot;drugs/drug_delamanid/&quot;},{&quot;label&quot;:&quot;Wang_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# delamanid — `Delamanid_Wang2020_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Wang X et al., Population Pharmacokinetic Analysis of…, Antimicrobial agents and ch… (2020)
  ·  DOI: [10.1128/AAC.01202-20](https://doi.org/10.1128/AAC.01202-20)

## Model component
<dbs-pgx drug="delamanid" model-id="Delamanid_Wang2020_reference" status="needs_review" stale="false" population="patients with pulmonary multidrug-resistant tuberculosis" measured-compound="delamanid" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 10 extracted, plus 3 covariate effects.

**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (liters/h) | `Q27` · CL/F | 1 | liters/h | 2.7777777777777776e-07 | [l] / [h] | not captured | exact (1.0) | tab_3:row2:col1, tab_3:row2:col3 | — | not captured |
| V 2 /F (liters) | `Q82` · V2/F | 2 | liters | 0.002 | [l] | not captured | space_fold (0.95) | tab_3:row3:col1, tab_3:row3:col3 | — | not captured |
| Q/F (liters/h) | `Q69` · Q/F | 3 | liters/h | 8.333333333333333e-07 | [l] / [h] | not captured | exact (1.0) | tab_3:row4:col1, tab_3:row4:col3 | — | not captured |
| V 3 /F (liters) | `Q78` · V3/F | 4 | liters | 0.004 | [l] | not captured | space_fold (0.95) | tab_3:row5:col1, tab_3:row5:col3 | — | not captured |
| K a,AM (1/h) | `Q95` · t1/2ka | 5 | not captured | not captured | not captured | not captured | llm (0.6) | tab_3:row6:col1, tab_3:row6:col3 | — | not captured |
| LAG AM (h) | `Q83` · tlag | 6 | h | 21600.0 | [h] | not captured | llm (0.6) | tab_3:row7:col1, tab_3:row7:col3 | — | not captured |
| f_1_pm | `Q900` · f_1_pm | 11 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_3:row12:col3, tab_3:row12:col5 | — | not captured |
| V 2 , V 3,WT | `Q61` · V | 13 | L | 0.013000000000000001 | L | not captured | llm (0.6) | tab_3:row14:col2, tab_3:row14:col4 | — | not captured |
| V 3,SEX | `Q77` · V3 | 14 | L | 0.014 | L | not captured | llm (0.6) | tab_3:row15:col3, tab_3:row15:col5 | — | not captured |
| F 1,NEAsian | `Q41` · FG | 15 | not captured | not captured | not captured | not captured | llm (0.6) | tab_3:row16:col2, tab_3:row16:col4 | — | not captured |
| CL ALBϽ3.4 | `Q22` · CL | 17 | L/h | 4.722222222222222e-06 | L/h | not captured | llm_confirmed (0.6) | tab_3:row18:col2, tab_3:row18:col4 | — | not captured |
| theta_q49_pm | `Q900` · theta_q49_pm | 9 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_3:row10:col1, tab_3:row10:col3 | — | not captured |
| theta_tlag_pm | `Q900` · theta_tlag_pm | 10 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_3:row11:col1, tab_3:row11:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'variability' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'F 1, 200 mg' — extend the ontology if this is a real PK parameter (source ['tab_3:row8:col2', 'tab_3:row8:col4'])
- dropped unlinked row (NIL): 'F 1, Ͼ200mg' — extend the ontology if this is a real PK parameter (source ['tab_3:row9:col1', 'tab_3:row9:col3'])
- covariate level 'F 1,PM' → Q900:f_1_pm = 11 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'F 1,out' — extend the ontology if this is a real PK parameter (source ['tab_3:row13:col3', 'tab_3:row13:col5'])
- dropped unlinked row (NIL): 'F 1,SEAsian' — extend the ontology if this is a real PK parameter (source ['tab_3:row17:col3', 'tab_3:row17:col5'])
- dropped unlinked row (NIL): 'pr 2' — extend the ontology if this is a real PK parameter (source ['tab_3:row20:col5', 'tab_3:row20:col7'])
- dropped unlinked row (NIL): 'pr,7208 2' — extend the ontology if this is a real PK parameter (source ['tab_3:row21:col5', 'tab_3:row21:col7'])
- dropped unlinked row (NIL): 'add,9213 2' — extend the ontology if this is a real PK parameter (source ['tab_3:row22:col4', 'tab_3:row22:col6', 'tab_3:row22:col7'])
- routed 'add 2 (ng/ml)²' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'V 2 , V 3,WT' → L (from the popPK convention: 'V2 and V3 are volumes of distribution. In population PK models, volumes are standardly expressed in liters (L). The valu')
- implicit units: 'V 3,SEX' → L (from the popPK convention: 'V3 is the volume of distribution of the second peripheral compartment. Volumes are standardly expressed in liters (L). T')
- implicit units: 'CL ALBϽ3.4' → L/h (from the popPK convention: 'CL (Clearance) is standardly expressed in L/h for oral PK modeling. The value 17 is consistent with a clearance rate in ')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=delamanid
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count

**Extraction notes:**
- unparsed cell tab_3:row2:col2 = '37.1 (35.8-38.4)'
- unparsed cell tab_3:row2:col4 = '37.2 (35.2-39.5)'
- unparsed cell tab_3:row3:col2 = '655 (604-707)'
- unparsed cell tab_3:row3:col4 = '660 (609-780)'
- unparsed cell tab_3:row4:col2 = '104 (90.1-117)'
- unparsed cell tab_3:row4:col4 = '105 (92.9-137)'
- unparsed cell tab_3:row5:col2 = '870 (792-948)'
- unparsed cell tab_3:row5:col4 = '869 (785-982)'
- unparsed cell tab_3:row6:col2 = '0.397 (0.348-0.447)'
- unparsed cell tab_3:row6:col4 = '0.409 (0.364-0.89)'
- unparsed cell tab_3:row7:col2 = '0.825 (0.814-0.837)'
- unparsed cell tab_3:row7:col4 = '0.826 (0.791-1.58)'
- unparsed cell tab_3:row8:col3 = '0.760 (0.749-0.772)'
- unparsed cell tab_3:row8:col5 = '0.761 (0.734-0.791)'
- unparsed cell tab_3:row9:col2 = '0.580 (0.483-0.676)'
- unparsed cell tab_3:row9:col4 = '0.578 (0.498-0.675)'
- unparsed cell tab_3:row10:col2 = '0.248 (0.215-0.281)'
- unparsed cell tab_3:row10:col4 = '0.251 (0.232-0.293)'
- unparsed cell tab_3:row11:col2 = '1.38 (1.3-1.45)'
- unparsed cell tab_3:row11:col4 = '1.38 (1.31-1.44)'
- unparsed cell tab_3:row12:col4 = '1.26 (1.22-1.29)'
- unparsed cell tab_3:row12:col6 = '1.26 (1.19-1.34)'
- unparsed cell tab_3:row13:col4 = '1.09 (1.08-1.10)'
- unparsed cell tab_3:row13:col6 = '1.09 (1.05-1.13)'
- unparsed cell tab_3:row14:col3 = '0.316 (0.162-0.47)'
- unparsed cell tab_3:row14:col5 = '0.318 (0.0742-0.489)'
- unparsed cell tab_3:row15:col4 = '1.65 (1.45-1.85)'
- unparsed cell tab_3:row15:col6 = '1.66 (1.43-1.86)'
- unparsed cell tab_3:row16:col3 = '1.53 (1.43-1.63)'
- unparsed cell tab_3:row16:col5 = '1.53 (1.44-1.63)'
- unparsed cell tab_3:row17:col4 = '1.40 (1.32-1.48)'
- unparsed cell tab_3:row17:col6 = '1.40 (1.34-1.47)'
- unparsed cell tab_3:row18:col3 = 'Ϫ0.892 (Ϫ1.03 to Ϫ0.756)'
- unparsed cell tab_3:row18:col5 = 'Ϫ0.899 (Ϫ1.22 to Ϫ0.583)'
- unparsed cell tab_3:row20:col3 = '⌺(1,1)'
- unparsed cell tab_3:row20:col4 = '0.0715 (0.0706-0.0724)'
- unparsed cell tab_3:row20:col6 = '0.0709 (0.0652-0.0762)'
- unparsed cell tab_3:row21:col3 = '⌺(2,2)'
- unparsed cell tab_3:row21:col4 = '0.174 (0.163-0.186)'
- unparsed cell tab_3:row21:col6 = '0.176 (0.15-0.204)'
- unparsed cell tab_3:row22:col2 = '⌺(3,3)'
- unparsed cell tab_3:row22:col3 = '1,950 (1880-2020)'
- unparsed cell tab_3:row22:col5 = '1,950 (1650-2290)'
- unparsed cell tab_3:row23:col1 = '⌺(4,4)'
- unparsed cell tab_3:row23:col2 = '2.39 (2.05-2.73)'
- unparsed cell tab_3:row23:col4 = '2.38 (0.399-6.86)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_3:row18:col2', 'tab_3:row18:col4'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_3:row2:col1', 'tab_3:row2:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_3:row14:col2', 'tab_3:row14:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_3:row4:col1', 'tab_3:row4:col3'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_3:row15:col3', 'tab_3:row15:col5'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_3:row5:col1', 'tab_3:row5:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_3:row3:col1', 'tab_3:row3:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['tab_3:row7:col1', 'tab_3:row7:col3'] |
| C5_unit_missing_Q95 | fail | [time] | not captured | not captured | not captured | ['tab_3:row6:col1', 'tab_3:row6:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 17 L/h | not captured | not captured | ['tab_3:row18:col2', 'tab_3:row18:col4'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1 L/h | not captured | not captured | ['tab_3:row2:col1', 'tab_3:row2:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 13 L | not captured | not captured | ['tab_3:row14:col2', 'tab_3:row14:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 2 L | not captured | not captured | ['tab_3:row3:col1', 'tab_3:row3:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_delamanid/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2020` / `Wang_2020::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:43 UTC</sub>
