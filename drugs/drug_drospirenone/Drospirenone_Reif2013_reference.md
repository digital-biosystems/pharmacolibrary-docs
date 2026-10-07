<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03A&quot;,&quot;href&quot;:&quot;atc/G03A.md&quot;},{&quot;label&quot;:&quot;drospirenone&quot;,&quot;href&quot;:&quot;drugs/drug_drospirenone/&quot;},{&quot;label&quot;:&quot;Reif_2013 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# drospirenone — `Drospirenone_Reif2013_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was built but held back: a core parameter had no value, so it is not published or simulated.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Reif S et al., Characterisation of the pharmacokinetic…, The journal of family plann… (2013)
  ·  DOI: [10.1136/jfprhc-2012-100397](https://doi.org/10.1136/jfprhc-2012-100397)

## Model component
<dbs-pgx drug="drospirenone" model-id="Drospirenone_Reif2013_reference" status="extracted" stale="false" population="healthy young women" measured-compound="drospirenone and ethinylestradiol" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 10 extracted.

**Parameterization:** CL/F, Q/F, Q3/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| TVCL_week3/F | `Q27` · CL/F | 3.52 | L/h | 9.777777777777778e-07 | L/h | 0.98 | llm (0.6) | tabb2:row2:col2, tabb2:row2:col3, Reif_2013_table_6:row1:col2, Reif_2013_table_6:row1:col3 | — | not captured |
| V2/F | `Q82` · V2/F | 51.6 | L | 0.0516 | L | 3.64 | exact (1.0) | tabb2:row4:col2, tabb2:row4:col3, Reif_2013_table_6:row3:col2, Reif_2013_table_6:row3:col3 | — | not captured |
| V3/F | `Q78` · V3/F | 204 | L | 0.20400000000000001 | L | 7.99 | exact (1.0) | tabb2:row5:col2, tabb2:row5:col3, Reif_2013_table_5:row3:col2, Reif_2013_table_5:row3:col3, Reif_2013_table_6:row4:col2, Reif_2013_table_6:row4:col3 | — | not captured |
| Q3/F | `Q309` · Q3/F | 17.5 | L/h | 4.861111111111111e-06 | L/h | 4.62 | exact (1.0) | tabb2:row6:col2, tabb2:row6:col3, Reif_2013_table_5:row5:col2, Reif_2013_table_5:row5:col3, Reif_2013_table_6:row5:col2, Reif_2013_table_6:row5:col3 | — | not captured |
| ka | `Q49` · kabs | 2.18 | 1/h | 0.0006055555555555556 | 1/h | 8.26 | exact (1.0) | tabb2:row7:col1, tabb2:row7:col2, tabb2:row7:col3, Reif_2013_table_5:row7:col1, Reif_2013_table_5:row7:col2, Reif_2013_table_5:row7:col3, Reif_2013_table_6:row6:col1, Reif_2013_table_6:row6:col2, Reif_2013_table_6:row6:col3 | — | not captured |
| ALAG | `Q83` · tlag | 0.372 | h | 1339.2 | h | 2.54 | exact (1.0) | tabb2:row8:col2, tabb2:row8:col3, Reif_2013_table_5:row10:col2, Reif_2013_table_5:row10:col3, Reif_2013_table_6:row7:col2, Reif_2013_table_6:row7:col3 | — | not captured |
| F | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | tabb2:row9:col2, Reif_2013_table_6:row8:col2 | — | not captured |
| CL_BW | `Q354` · CLnorm | 0.672 | L/h/kg | 1.3066666666666668e-05 | L/h | 14.5 | llm (0.6) | tabb2:row11:col2, tabb2:row11:col3, Reif_2013_table_5:row13:col2, Reif_2013_table_5:row13:col3, Reif_2013_table_6:row10:col2, Reif_2013_table_6:row10:col3 | — | not captured |
| Q4/F | `Q69` · Q/F | 8.49 | L/h | 2.3583333333333338e-06 | L/h | 34.3 | llm (0.6) | Reif_2013_table_5:row6:col2, Reif_2013_table_5:row6:col3 | — | not captured |
| CL_AGE | `Q22` · CL | 20.8 | L/h | 5.777777777777779e-06 | L/h | 29.1 | llm (0.6) | Reif_2013_table_5:row12:col2, Reif_2013_table_5:row12:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV_CL/F†' routed out of structural estimates ('Random effects: inter-individual variability (IIV) and inter-occasion variability (IOV)')
- table section iiv: 'IIV_F†' routed out of structural estimates ('Random effects: inter-individual variability (IIV) and inter-occasion variability (IOV)')
- table section iiv: 'ρ_CL/F,F (IIV)' routed out of structural estimates ('Random effects: inter-individual variability (IIV) and inter-occasion variability (IOV)')
- table section iiv: 'IOV_F†' routed out of structural estimates ('Random effects: inter-individual variability (IIV) and inter-occasion variability (IOV)')
- table section residual_error: 'Proportional error†' routed out of structural estimates ('Random effects: residual error')
- table section residual_error: 'Additive error' routed out of structural estimates ('Random effects: residual error')
- table section iiv: 'IIV_CL‡' routed out of structural estimates ('Random effects: inter-individual variability (IIV)')
- table section residual_error: 'Proportional error‡' routed out of structural estimates ('Random effects: residual error')
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q27 ('Diff_CL_week27/F', value '-6.55') — already have one for this compound
- dropped duplicate Q27 ('TVCL/F', value '25.3') — already have one for this compound
- dropped duplicate Q82 ('V2/F†', value '23.9') — already have one for this compound
- dropped duplicate Q78 ('V4/F†', value '23.9') — already have one for this compound
- dropped unlinked row (NIL): 'F_week3' — extend the ontology if this is a real PK parameter (source ['Reif_2013_table_5:row8:col2'])
- dropped unlinked row (NIL): 'Diff_F_week27' — extend the ontology if this is a real PK parameter (source ['Reif_2013_table_5:row9:col2', 'Reif_2013_table_5:row9:col3'])
- implicit units: 'TVCL_week3/F' → L/h (from the paper text: "The text states: 'The estimated population mean value for apparent oral clearance (Week 3) was 3.52 l/hour'.")
- implicit units: 'V2/F' → L (from the popPK convention: 'V2/F is a volume of distribution parameter. In population PK modeling, volumes are conventionally expressed in Liters (L')
- implicit units: 'V3/F' → L (from the popPK convention: 'V3/F is a volume of distribution parameter. In population PK modeling, volumes are conventionally expressed in Liters (L')
- implicit units: 'Q3/F' → L/h (from the popPK convention: 'Q3/F is an intercompartmental clearance parameter. In population PK modeling, clearances (including intercompartmental) ')
- implicit units: 'ka' → 1/h (from the popPK convention: 'ka is a first-order absorption rate constant. In population PK modeling, first-order rate constants are conventionally e')
- implicit units: 'ALAG' → h (from the popPK convention: 'ALAG (tlag) is an absorption lag time. In population PK modeling, time parameters are conventionally expressed in hours ')
- implicit units: 'CL_BW' → L/h/kg (from the paper text: "The text states: 'The estimated population mean value for apparent oral clearance was 25.3 l/hour based on a typical sub")
- implicit units: 'Q4/F' → L/h (from the popPK convention: 'Q4/F is an intercompartmental clearance parameter. In population PK modeling, intercompartmental clearances are conventi')
- implicit units: 'CL_AGE' → L/h (from the popPK convention: 'CL_AGE is a clearance parameter (proportionality factor for age). In population PK modeling, clearances are conventional')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=drospirenone and ethinylestradiol
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- molar mass: none found for 'drospirenone and ethinylestradiol' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell tabb2:row2:col4 = "Typical subject's apparent oral clearance (Week 3) with median body weight of 62 kg"
- unparsed cell tabb2:row3:col1 = '% difference vs Week 3'
- unparsed cell tabb2:row3:col4 = "Difference in typical subject's apparent oral clearance (Week 27, expressed as percentage change to Week 3 value)"
- unparsed cell Reif_2013_table_5:row1:col4 = "Typical subject's apparent oral clearance with median age of 24 years and median body weight of 62 kg"
- unparsed cell Reif_2013_table_5:row8:col4 = 'Relative bioavailability (Week 3)'
- unparsed cell Reif_2013_table_5:row9:col1 = '% difference from Week 3'
- unparsed cell Reif_2013_table_5:row9:col4 = 'Difference in relative bioavailability (Week 27) (percentage change to Week 3 value)'
- companion parameter table 5 transcribed (27 record(s))
- unparsed cell Reif_2013_table_6:row1:col4 = "Typical subject's apparent oral clearance (Week 3) with median body weight of 62 kg"
- unparsed cell Reif_2013_table_6:row2:col1 = '% difference vs Week 3'
- unparsed cell Reif_2013_table_6:row2:col4 = "Difference in typical subject's apparent oral clearance (Week 27, expressed as percentage change to Week 3 value)"
- companion parameter table 6 transcribed (30 record(s))
- LLM selected parameter table(s) 5, 6

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Reif_2013_table_5:row12:col2', 'Reif_2013_table_5:row12:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tabb2:row2:col2', 'tabb2:row2:col3', 'Reif_2013_table_6:row1:col2', 'Reif_2013_table_6:row1:col3'] |
| C5_dimension_Q309 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tabb2:row6:col2', 'tabb2:row6:col3', 'Reif_2013_table_5:row5:col2', 'Reif_2013_table_5:row5:col3', 'Reif_2013_table_6:row5:col2', 'Reif_2013_table_6:row5:col3'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tabb2:row11:col2', 'tabb2:row11:col3', 'Reif_2013_table_5:row13:col2', 'Reif_2013_table_5:row13:col3', 'Reif_2013_table_6:row10:col2', 'Reif_2013_table_6:row10:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tabb2:row7:col1', 'tabb2:row7:col2', 'tabb2:row7:col3', 'Reif_2013_table_5:row7:col1', 'Reif_2013_table_5:row7:col2', 'Reif_2013_table_5:row7:col3', 'Reif_2013_table_6:row6:col1', 'Reif_2013_table_6:row6:col2', 'Reif_2013_table_6:row6:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Reif_2013_table_5:row6:col2', 'Reif_2013_table_5:row6:col3'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['tabb2:row5:col2', 'tabb2:row5:col3', 'Reif_2013_table_5:row3:col2', 'Reif_2013_table_5:row3:col3', 'Reif_2013_table_6:row4:col2', 'Reif_2013_table_6:row4:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['tabb2:row4:col2', 'tabb2:row4:col3', 'Reif_2013_table_6:row3:col2', 'Reif_2013_table_6:row3:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['tabb2:row8:col2', 'tabb2:row8:col3', 'Reif_2013_table_5:row10:col2', 'Reif_2013_table_5:row10:col3', 'Reif_2013_table_6:row7:col2', 'Reif_2013_table_6:row7:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 20.8 L/h | not captured | not captured | ['Reif_2013_table_5:row12:col2', 'Reif_2013_table_5:row12:col3'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 3.52 L/h | not captured | not captured | ['tabb2:row2:col2', 'tabb2:row2:col3', 'Reif_2013_table_6:row1:col2', 'Reif_2013_table_6:row1:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 51.6 L | not captured | not captured | ['tabb2:row4:col2', 'tabb2:row4:col3', 'Reif_2013_table_6:row3:col2', 'Reif_2013_table_6:row3:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_drospirenone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Reif_2013` / `Reif_2013::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:48 UTC</sub>
