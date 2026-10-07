<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;tisotumab vedotin&quot;,&quot;href&quot;:&quot;drugs/drug_tisotumab_vedotin/&quot;},{&quot;label&quot;:&quot;Gibiansky_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tisotumab vedotin — `TisotumabVedotin_Gibiansky2022_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Gibiansky L et al., Population pharmacokinetic analysis for…, CPT: pharmacometrics & syst… (2022)
  ·  DOI: [10.1002/psp4.12850](https://doi.org/10.1002/psp4.12850)

## Model component
<dbs-pgx drug="tisotumab vedotin" model-id="TisotumabVedotin_Gibiansky2022_reference" status="needs_review" stale="false" population="patients with locally advanced and/or metastatic solid tumors" measured-compound="tisotumab vedotin" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 14 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL, L/day (θ1) | `Q22` · CL | 1.42 | L/day | 1.6435185185185186e-08 | L/h | 5.19 | exact (1.0) | psp412850-tbl-0002:row2:col1, psp412850-tbl-0002:row2:col2, psp412850-tbl-0002:row2:col3 | — | not captured |
| Q, L/day (θ2) | `Q30` · Q | 4.01 | L/day | 4.641203703703703e-08 | L/h | 2.93 | exact (1.0) | psp412850-tbl-0002:row3:col1, psp412850-tbl-0002:row3:col2, psp412850-tbl-0002:row3:col3 | — | not captured |
| V c, L (θ3) | `Q63` · V1 | 3.10 | L | 0.0031000000000000003 | L | 1.23 | exact (1.0) | psp412850-tbl-0002:row4:col1, psp412850-tbl-0002:row4:col2, psp412850-tbl-0002:row4:col3 | — | not captured |
| V p, L (θ4) | `Q64` · V2 | 4.47 | L | 0.00447 | L | 2.30 | exact (1.0) | psp412850-tbl-0002:row5:col1, psp412850-tbl-0002:row5:col2, psp412850-tbl-0002:row5:col3 | — | not captured |
| Maximum MM elimination (V max), μg/ml/day (θ5) | `Q66` · Vmax | 3.35 | not captured | not captured | not captured | 11.70 | llm (0.6) | psp412850-tbl-0002:row6:col1, psp412850-tbl-0002:row6:col2, psp412850-tbl-0002:row6:col3 | — | not captured |
| Michaelis constant (K M), μg/ml (θ6) | `Q1` · Km | 3.44 | μg/ml | not captured | μg/ml | 12.30 | llm (0.6) | psp412850-tbl-0002:row7:col1, psp412850-tbl-0002:row7:col2, psp412850-tbl-0002:row7:col3 | — | not captured |
| ADC distribution half‐life (t 1/2,α), day | `Q59` · t1/2α | 0.28 | day | 24192.000000000004 | [d] | not captured | llm (0.6) | psp412850-tbl-0002:row10:col1 | — | not captured |
| ADC t 1/2, day | `Q57` · t1/2z | 4.19 | day | 362016.00000000006 | [d] | not captured | llm (0.6) | psp412850-tbl-0002:row11:col1 | — | not captured |
| Rate constant of delay (k tr), 1/day (θ9) | `Q306` · ktr | 0.271 | 1/day | 3.1365740740740742e-06 | 1/h | 1.35 | llm (0.6) | psp412850-tbl-0002:row13:col1, psp412850-tbl-0002:row13:col2, psp412850-tbl-0002:row13:col3 | — | not captured |
| CLMMAE, L/day (θ10) | `Q22` · CL | 42.8 | L/day | 4.953703703703704e-07 | L/h | 7.40 | exact (1.0) | psp412850-tbl-0002:row14:col1, psp412850-tbl-0002:row14:col2, psp412850-tbl-0002:row14:col3 | — | not captured |
| V MMAE, L (θ11) | `Q61` · V | 2.09 | L | 0.00209 | L | 9.82 | exact (1.0) | psp412850-tbl-0002:row15:col1, psp412850-tbl-0002:row15:col2, psp412850-tbl-0002:row15:col3 | — | not captured |
| Rate constant of DAR decay (β), 1/day (θ12) | `Q47` · kel | 0.0189 | 1/day | 2.1875e-07 | 1/h | 26.50 | llm (0.6) | psp412850-tbl-0002:row16:col1, psp412850-tbl-0002:row16:col2, psp412850-tbl-0002:row16:col3 | — | not captured |
| Fraction of MMAE nonspecific elimination (FR1, θ15) | `Q45` · fm | 0.0205 | FR1, θ15 | not captured | [fr1] | 7.94 | exact (1.0) | psp412850-tbl-0002:row19:col1, psp412850-tbl-0002:row19:col2, psp412850-tbl-0002:row19:col3 | — | not captured |
| MMAE (t 1/2,MMAE), day | `Q57` · t1/2z | 0.0339 | day | 2928.96 | [d] | not captured | llm (0.6) | psp412850-tbl-0002:row22:col1, psp412850-tbl-0002:row22:col2, psp412850-tbl-0002:row22:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'FR1, θ15' (fm)
- unit_dimension_unknown: 'FR2, θ16' (fm)
- dropped duplicate Q45 ('Fraction of MMAE target‐mediated elimination (FR2, θ16)', value '0.0508') — already have one for this compound
- unit_dimension_mismatch: 'MMAE delay half‐life (t 1/2,ktr), day' → Q306 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q306 ('MMAE delay half‐life (t 1/2,ktr), day', value '2.56') — already have one for this compound
- implicit units: 'CL, L/day (θ1)' → L/day (from the paper text: "The text states: 'The ADC nonspecific clearance (CL) value of tisotumab vedotin was determined to be 1.42 L/day'.")
- implicit units: 'Q, L/day (θ2)' → L/day (from the paper text: "The text states: 'intercompartmental clearance value was 4.01 L/day'.")
- implicit units: 'V c, L (θ3)' → L (from the paper text: "The text states: 'central volume of distribution (V c) was 3.10 L'.")
- implicit units: 'V p, L (θ4)' → L (from the paper text: "The text states: 'peripheral volume of distribution (V p) was 4.47 L'.")
- implicit units: 'Maximum MM elimination (V max), μg/ml/day (θ5)' — the LLM proposed 'μg/ml/day', whose dimension does not fit Q66; left unset
- implicit units: 'Michaelis constant (K M), μg/ml (θ6)' → μg/ml (from the paper text: "The text states: 'The ADC V max and K M were 3.35 μg/ml/day and 3.44 μg/ml, respectively.'")
- implicit units: 'Rate constant of delay (k tr), 1/day (θ9)' → 1/day (from the paper text: "The text states: 'Terminal slope of the MMAE concentration–time curve was defined by the delay compartment rate (k tr) w")
- implicit units: 'CLMMAE, L/day (θ10)' → L/day (from the paper text: "The text states: 'Apparent clearance of MMAE (CLMMAE) was 42.8 L/day'.")
- implicit units: 'V MMAE, L (θ11)' → L (from the paper text: "The text states: 'typical value of apparent MMAE central volume of distribution (V MMAE) was 2.09 L'.")
- implicit units: 'Rate constant of DAR decay (β), 1/day (θ12)' → 1/day (from the popPK convention: 'The parameter is a first-order rate constant (decay of drug-to-antibody ratio). The text describes the decay function bu')
- metabolite volume: 'V MMAE, L (θ11)' Q63→Q61 for monomethyl auristatin E — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tisotumab vedotin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [1]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 24 linked by role; re-tagged parent→monomethyl auristatin E ×27
- molar mass: none found for 'tisotumab vedotin' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 14 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q61 | pass | 2.09 | 2.09 | 1.0 | 0.05 | footnote reference category |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['psp412850-tbl-0002:row7:col1', 'psp412850-tbl-0002:row7:col2', 'psp412850-tbl-0002:row7:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412850-tbl-0002:row2:col1', 'psp412850-tbl-0002:row2:col2', 'psp412850-tbl-0002:row2:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412850-tbl-0002:row14:col1', 'psp412850-tbl-0002:row14:col2', 'psp412850-tbl-0002:row14:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412850-tbl-0002:row3:col1', 'psp412850-tbl-0002:row3:col2', 'psp412850-tbl-0002:row3:col3'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412850-tbl-0002:row13:col1', 'psp412850-tbl-0002:row13:col2', 'psp412850-tbl-0002:row13:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412850-tbl-0002:row16:col1', 'psp412850-tbl-0002:row16:col2', 'psp412850-tbl-0002:row16:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['psp412850-tbl-0002:row11:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['psp412850-tbl-0002:row22:col1', 'psp412850-tbl-0002:row22:col2', 'psp412850-tbl-0002:row22:col3'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['psp412850-tbl-0002:row10:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412850-tbl-0002:row15:col1', 'psp412850-tbl-0002:row15:col2', 'psp412850-tbl-0002:row15:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412850-tbl-0002:row4:col1', 'psp412850-tbl-0002:row4:col2', 'psp412850-tbl-0002:row4:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412850-tbl-0002:row5:col1', 'psp412850-tbl-0002:row5:col2', 'psp412850-tbl-0002:row5:col3'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 | not captured | not captured | not captured | ['psp412850-tbl-0002:row6:col1', 'psp412850-tbl-0002:row6:col2', 'psp412850-tbl-0002:row6:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.42 | not captured | not captured | ['psp412850-tbl-0002:row2:col1', 'psp412850-tbl-0002:row2:col2', 'psp412850-tbl-0002:row2:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0592 L/h | not captured | not captured | ['psp412850-tbl-0002:row2:col1', 'psp412850-tbl-0002:row2:col2', 'psp412850-tbl-0002:row2:col3'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.78 L/h | not captured | not captured | ['psp412850-tbl-0002:row14:col1', 'psp412850-tbl-0002:row14:col2', 'psp412850-tbl-0002:row14:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.09 L | not captured | not captured | ['psp412850-tbl-0002:row15:col1', 'psp412850-tbl-0002:row15:col2', 'psp412850-tbl-0002:row15:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.1 L | not captured | not captured | ['psp412850-tbl-0002:row4:col1', 'psp412850-tbl-0002:row4:col2', 'psp412850-tbl-0002:row4:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.47 L | not captured | not captured | ['psp412850-tbl-0002:row5:col1', 'psp412850-tbl-0002:row5:col2', 'psp412850-tbl-0002:row5:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tisotumab_vedotin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gibiansky_2022` / `Gibiansky_2022::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:16 UTC</sub>
