<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;piperacillin&quot;,&quot;href&quot;:&quot;drugs/drug_piperacillin/&quot;},{&quot;label&quot;:&quot;Sulaiman_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Piperacillin_Dohmann2025_reference&quot;,&quot;label&quot;:&quot;Dohmann_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperacillin/Piperacillin_Dohmann2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperacillin_Sulaiman2026_reference&quot;,&quot;label&quot;:&quot;Sulaiman_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# piperacillin — `Piperacillin_Sulaiman2026_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Sulaiman H et al., A multicentre evaluation of pharmacokin…, The Journal of antimicrobia… (2026)
  ·  DOI: [10.1093/jac/dkag199](https://doi.org/10.1093/jac/dkag199)

## Model component
<dbs-pgx drug="piperacillin" model-id="Piperacillin_Sulaiman2026_reference" status="extracted" stale="false" population="critically ill adults with sepsis or septic shock" measured-compound="piperacillin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLpip (L/h) | `Q22` · CL | 8.78 | L/h | 2.4388888888888886e-06 | [l] / [h] | 5.69 | llm (0.6) | dkag199-T2:row2:col1 | — | not captured |
| Vtaz (L) | `Q65` · Vss | 27.15 | L | 0.02715 | [l] | 9.77 | llm (0.6) | dkag199-T2:row6:col1 | — | not captured |
| Average Vd for piperacillin | `Q61` · V | 24.1 | L | 0.024100000000000003 | L | not captured | review_gapfill (0.7) | Veillette_2021:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CLpip (%)' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'Vpip (%)' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'CLtaz (%)' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'Vtaz (%)' routed out of structural estimates ('Between-subject variability')
- table section iov: 'CLpip (%)' routed out of structural estimates ('Between-occasion variability')
- table section iov: 'Vpip (%)' routed out of structural estimates ('Between-occasion variability')
- table section iov: 'CLtaz (%)' routed out of structural estimates ('Between-occasion variability')
- table section iov: 'Vtaz (%)' routed out of structural estimates ('Between-occasion variability')
- dropped unlinked row (NIL): 'Vpip (L)' — extend the ontology if this is a real PK parameter (source ['dkag199-T2:row3:col1'])
- dropped unlinked row (NIL): 'CLcr effect on CLpip' — extend the ontology if this is a real PK parameter (source ['dkag199-T2:row4:col1'])
- dropped duplicate Q22 ('CLtaz (L/h)', value '8.74') — already have one for this compound
- dropped unlinked row (NIL): 'CLcr effect on CLtaz' — extend the ontology if this is a real PK parameter (source ['dkag199-T2:row7:col1'])
- dropped unlinked row (NIL): 'Additivepip (mg/L)' — extend the ontology if this is a real PK parameter (source ['dkag199-T2:row19:col1'])
- dropped unlinked row (NIL): 'Proportionalpip (%)' — extend the ontology if this is a real PK parameter (source ['dkag199-T2:row20:col1'])
- dropped unlinked row (NIL): 'Additivetaz (mg/L)' — extend the ontology if this is a real PK parameter (source ['dkag199-T2:row21:col1'])
- dropped unlinked row (NIL): 'Proportionaltaz (%)' — extend the ontology if this is a real PK parameter (source ['dkag199-T2:row22:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=piperacillin
- gap-filled Q61 (V) from Veillette_2021's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of KA from de_2011: its label names a different analyte ('rats') — 'k max (3.11±0.02 h À1 for rats and 3.19 ± 1.39 h À1 for humans) for rats'

**Extraction notes:**
- unparsed cell dkag199-T2:row2:col2 = '8.73 (7.78–9.92)'
- unparsed cell dkag199-T2:row3:col2 = '25.73 (2.17–31.59)'
- unparsed cell dkag199-T2:row4:col2 = '0.89 (0.74–1.09)'
- unparsed cell dkag199-T2:row5:col2 = '8.7 (7.65–9.87)'
- unparsed cell dkag199-T2:row6:col2 = '27.88 (15.95–34.47)'
- unparsed cell dkag199-T2:row7:col2 = '0.96 (0.77–1.18)'
- unparsed cell dkag199-T2:row9:col2 = '20.20 (0–41.65)'
- unparsed cell dkag199-T2:row10:col2 = '42.78 (0–64.53)'
- unparsed cell dkag199-T2:row11:col2 = '26.45 (0–48.54)'
- unparsed cell dkag199-T2:row12:col2 = '45.07 (0–69.80)'
- unparsed cell dkag199-T2:row14:col2 = '32.84 (14.07–48.54)'
- unparsed cell dkag199-T2:row15:col2 = '25.40 (17.12–100)'
- unparsed cell dkag199-T2:row16:col2 = '35.01 (12.04–55.72)'
- unparsed cell dkag199-T2:row17:col2 = '24.35 (16.10–100)'
- unparsed cell dkag199-T2:row19:col2 = '2.54 (0.71–4.78)'
- unparsed cell dkag199-T2:row20:col2 = '17 (12–22)'
- unparsed cell dkag199-T2:row21:col2 = '0.43 (0.2–0.8)'
- unparsed cell dkag199-T2:row22:col2 = '16 (1–20)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['dkag199-T2:row2:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Veillette_2021:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['dkag199-T2:row6:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.78 | not captured | not captured | ['dkag199-T2:row2:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.78 L/h | not captured | not captured | ['dkag199-T2:row2:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 24.1 L | not captured | not captured | ['Veillette_2021:review'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 27.2 L | not captured | not captured | ['dkag199-T2:row6:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_piperacillin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sulaiman_2026` / `Sulaiman_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_modelica.zip" download>Piperacillin_Sulaiman2026_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_fmi.zip" download>Piperacillin_Sulaiman2026_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_matlab.zip" download>Piperacillin_Sulaiman2026_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_matlab_simbio.zip" download>Piperacillin_Sulaiman2026_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_sbml.zip" download>Piperacillin_Sulaiman2026_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_cellml.zip" download>Piperacillin_Sulaiman2026_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference.svg" alt="Piperacillin_Sulaiman2026_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 4500 mg infusion over 10 min, single dose. Dose in the paper: 4500 mg.

<dbs-fmusim paramsurl="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C` · parameters `Piperacillin_Sulaiman2026_reference_params.json` · controls `Piperacillin_Sulaiman2026_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:15 UTC</sub>
