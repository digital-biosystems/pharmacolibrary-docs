<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;fludarabine&quot;,&quot;href&quot;:&quot;drugs/drug_fludarabine/&quot;},{&quot;label&quot;:&quot;Ivaturi_2017 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fludarabine — `Fludarabine_Ivaturi2017_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

### Reviewer guidance

**The fludarabine parent–metabolite model was rejected because the metabolite f-ara-ATP is unlinked: despite the metabolism link via kfm (0.005 1/h), the metabolite has no reachable compartment (n_cmt 0), so no path from the dose exists.**

The record describes fludarabine in pediatric hematopoietic cell transplant recipients with a metabolite f-ara-ATP formed from the parent, with a formation rate constant kfm of 0.005 1/h and an elimination rate constant kel of 0.09 1/h. However, the metabolite has no compartments (n_cmt 0), so the structure check found an unlinked metabolite with no path from the administered dose. Parent parameters (CL 3.1 L/h, V1 13.4 L/kg, V2 13.4 L) were extracted, but the metabolite side of the topology is incomplete, which is why the model was refused. Extracted — fludarabine: CL 3.1 L/h, V1 13.4 L/kg, V2 13.4 L; f-ara-ATP: kfm 0.005 1/h, kel 0.09 1/h.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:26:52.729527+00:00) predates the upstream re-run (2026-10-07 16:51:42.925002+00:00). Current validate status: `extracted`.

## Citation
Ivaturi V et al., Pharmacokinetics and Model-Based Dosing…, Biology of blood and marrow… (2017)
  ·  DOI: [10.1016/j.bbmt.2017.06.021](https://doi.org/10.1016/j.bbmt.2017.06.021)

## Model component
<dbs-pgx drug="fludarabine" model-id="Fludarabine_Ivaturi2017_reference" status="extracted" stale="true" population="pediatric hematopoietic cell transplant recipients" measured-compound="fludarabine" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** 2-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameters:** 6 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Typical value forf-ara-a CL, L/h/15 kg | `Q22` · CL | 3.1 | L/h | 8.611111111111112e-07 | L/h | not captured | exact (1.0) | T2:row2:col1, T2:row2:col2, T2:row2:col3, T2:row2:col4 | — | not captured |
| Vc, L/kg | `Q63` · V1 | 13.4 | L/kg | 0.9380000000000001 | [l] / [kg] | not captured | exact (1.0) | T2:row4:col1, T2:row4:col2, T2:row4:col3, T2:row4:col4 | — | not captured |
| Intercompartmental CL, L/h/kg | `Q30` · Q | 2.2 | L/h/kg | 4.2777777777777785e-05 | [l] / [[h] · [kg]] | not captured | llm_corrected (0.6) | T2:row5:col1, T2:row5:col2, T2:row5:col3, T2:row5:col4 | — | not captured |
| Vp, L/15 | `Q64` · V2 | 13.4 | L | 0.0134 | L | not captured | exact (1.0) | T2:row6:col1, T2:row6:col2, T2:row6:col3, T2:row6:col4 | — | not captured |
| Kin† | `Q305` · kfm | 0.005 | 1/h | 1.388888888888889e-06 | 1/h | not captured | exact (1.0) | T2:row7:col1, T2:row7:col2, T2:row7:col3 | — | not captured |
| Kout‡ | `Q47` · kel | 0.09 | 1/h | 2.4999999999999998e-05 | 1/h | not captured | exact (1.0) | T2:row9:col1, T2:row9:col2, T2:row9:col3 | — | not captured |
| theta_cl_creatinine | `Q900` · theta_cl_creatinine | 0.006 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row3:col1, T2:row3:col2, T2:row3:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'L/15' (V2)
- dropped unlinked row (NIL): 'Time effect on kin' — extend the ontology if this is a real PK parameter (source ['T2:row8:col1', 'T2:row8:col2', 'T2:row8:col3'])
- dropped diagnostic row 'Interindividual variability on CL§ (% shrinkage)' → Q318 (shrinkage) — reported statistic, not a parameter
- dropped diagnostic row 'Interindividual variability on Vc§ (% shrinkage)' → Q318 (shrinkage) — reported statistic, not a parameter
- dropped diagnostic row 'Interindividual variability on Kin§ (% shrinkage)' → Q318 (shrinkage) — reported statistic, not a parameter
- implicit units: 'Typical value forf-ara-a CL, L/h/15 kg' → L/h (from the paper text: 'The text states: "where, 3.1L/hour is the typical value of f-ara-a CL". Although the table caption lists it as \'L/h/15 k')
- implicit units: 'Vp, L/15' → L (from the popPK convention: 'Vp (Volume of distribution of the peripheral compartment) is a volume parameter. In population PK, volumes are typically')
- implicit units: 'Kin†' → 1/h (from the popPK convention: "Kin is described in the table footnote as a 'First-order rate constant'. First-order rate constants are dimensionally in")
- implicit units: 'Kout‡' → 1/h (from the popPK convention: "Kout is described in the text as a 'first-order rate constant for elimination'. First-order rate constants are dimension")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fludarabine
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- row roles (LLM): model_class=compartmental; 14/14 row label(s) assigned, 22 linked by role; re-tagged parent→f-ara-ATP ×17
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T2:row3:col4 = '.004-.008'
- unparsed cell T2:row7:col4 = '.004-.008'
- unparsed cell T2:row8:col4 = '−.52-−.30'
- unparsed cell T2:row9:col4 = '.08-.10'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row2:col1', 'T2:row2:col2', 'T2:row2:col3', 'T2:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row5:col1', 'T2:row5:col2', 'T2:row5:col3', 'T2:row5:col4'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['T2:row7:col1', 'T2:row7:col2', 'T2:row7:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['T2:row9:col1', 'T2:row9:col2', 'T2:row9:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col3', 'T2:row4:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row6:col1', 'T2:row6:col2', 'T2:row6:col3', 'T2:row6:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.1 | not captured | not captured | ['T2:row2:col1', 'T2:row2:col2', 'T2:row2:col3', 'T2:row2:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.1 L/h | not captured | not captured | ['T2:row2:col1', 'T2:row2:col2', 'T2:row2:col3', 'T2:row2:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 938 L | not captured | not captured | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col3', 'T2:row4:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 13.4 L | not captured | not captured | ['T2:row6:col1', 'T2:row6:col2', 'T2:row6:col3', 'T2:row6:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fludarabine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ivaturi_2017` / `Ivaturi_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_fludarabine/Fludarabine_Ivaturi2017_reference/Fludarabine_Ivaturi2017_reference_modelica.zip" download>Fludarabine_Ivaturi2017_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_fludarabine/Fludarabine_Ivaturi2017_reference/Fludarabine_Ivaturi2017_reference_matlab.zip" download>Fludarabine_Ivaturi2017_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_fludarabine/Fludarabine_Ivaturi2017_reference/Fludarabine_Ivaturi2017_reference_matlab_simbio.zip" download>Fludarabine_Ivaturi2017_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_fludarabine/Fludarabine_Ivaturi2017_reference/Fludarabine_Ivaturi2017_reference_sbml.zip" download>Fludarabine_Ivaturi2017_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_fludarabine/Fludarabine_Ivaturi2017_reference/Fludarabine_Ivaturi2017_reference_cellml.zip" download>Fludarabine_Ivaturi2017_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:51 UTC</sub>
