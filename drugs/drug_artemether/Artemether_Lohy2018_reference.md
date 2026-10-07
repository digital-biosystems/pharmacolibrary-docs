<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artemether&quot;,&quot;href&quot;:&quot;drugs/drug_artemether/&quot;},{&quot;label&quot;:&quot;Lohy_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artemether_Lohy2018_reference&quot;,&quot;label&quot;:&quot;Lohy_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artemether/Artemether_Lohy2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# artemether — `Artemether_Lohy2018_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `artemether-lumefantrine`, measured `artemether`.

## Citation
Lohy Das J et al., Population Pharmacokinetics of Artemeth…, Antimicrobial agents and ch… (2018)
  ·  DOI: [10.1128/AAC.00518-18](https://doi.org/10.1128/AAC.00518-18)

## Model component
<dbs-pgx drug="artemether" model-id="Artemether_Lohy2018_reference" status="extracted" stale="false" population="pregnant women with uncomplicated Plasmodium falciparum malaria (Rwanda)" measured-compound="artemether" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 12 extracted.

**Parameterization:** CL/F, Q/F, V/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | T2:row2:col1, T2:row12:col1 | — | 57.6 (36.8% RSE) |
| MTT (h) | `Q81` · MTT | 0.738 | h | not captured | [h] | 5.16 | exact (1.0) | T2:row4:col1, T2:row14:col1 | — | 132 (37.9% RSE) |
| CL/F (liters/h) | `Q27` · CL/F | 4.49 | liters/h | 1.2472222222222223e-06 | [l] / [h] | 6.59 | exact (1.0) | T2:row6:col1 | — | not captured |
| Vc/F (liters) | `Q290` · V1/F | 139 | liters | 0.139 | [l] | 6.77 | exact (1.0) | T2:row7:col1 | — | 48.7 (56.8% RSE) |
| Q/F (liters/h) | `Q69` · Q/F | 0.924 | liters/h | 2.5666666666666666e-07 | [l] / [h] | 13.3 | exact (1.0) | T2:row8:col1 | — | not captured |
| Vp/F (liters) | `Q82` · V2/F | 111 | liters | 0.111 | [l] | 8.69 | exact (1.0) | T2:row9:col1 | — | not captured |
| CLARM/F (liters/h) | `Q27` · CL/F | 467 | liters/h | 0.00012972222222222223 | [l] / [h] | 17.9 | llm (0.6) | T2:row16:col1 | — | not captured |
| VARM/F (liters) | `Q76` · V/F | 3000 | liters | 3.0 | [l] | 14.1 | llm (0.6) | T2:row17:col1 | — | not captured |
| CLDHA/F (liters/h) | `Q27` · CL/F | 611 | liters/h | 0.00016972222222222223 | [l] / [h] | 15.4 | exact (1.0) | T2:row23:col1 | — | not captured |
| VDHA/F (liters) | `Q290` · V1/F | 137 | liters | 0.137 | [l] | 38.9 | exact (1.0) | T2:row24:col1 | — | not captured |
| ka (h−1) | `Q49` · kabs | 0.0577 | h−1 | 1.6027777777777778e-05 | 1/h | not captured | review_gapfill (0.7) | Kloprogge_2015:review | — | not captured |
| Lag time (h) | `Q83` · tlag | 1.31 | h | 4716.0 | h | not captured | review_gapfill (0.7) | Kloprogge_2015:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'MTT (h)' routed out of structural estimates ('BSV/BOV, % CV (% RSE)')
- table section iiv: 'Vc/F (liters)' routed out of structural estimates ('BSV/BOV, % CV (% RSE)')
- table section iiv: 'F' routed out of structural estimates ('BSV/BOV, % CV (% RSE)')
- table section iiv: 'CLARM/F (liters/h)' routed out of structural estimates ('BSV/BOV, % CV (% RSE)')
- table section iiv: 'VARM/F (liters)' routed out of structural estimates ('BSV/BOV, % CV (% RSE)')
- table section iiv: 'CLDHA/F (liters/h)' routed out of structural estimates ('BSV/BOV, % CV (% RSE)')
- table section iiv: 'VDHA/F (liters)' routed out of structural estimates ('BSV/BOV, % CV (% RSE)')
- dropped PD-category row 'Emax (h−1)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row19:col1'])
- dropped PD-category row 'EC50 (nM)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row20:col1'])
- dropped unlinked row (NIL): 'TIMEENZ (h)' — extend the ontology if this is a real PK parameter (source ['T2:row21:col1'])
- dropped value-less row: 'Emax'
- dropped value-less row: 'EC50'
- dropped value-less row: 'TIMEENZ'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=artemether
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [1]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 18/18 row label(s) assigned, 17 linked by role; re-tagged parent→lumefantrine ×16, parent→artemether ×7, parent→dihydroartemisinin ×4
- gap-filled Q49 (kabs) from Kloprogge_2015's review values (primary lacked it)
- gap-filled Q83 (tlag) from Kloprogge_2015's review values (primary lacked it)
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell T2:row2:col3 = '144 (19.7)b'
- unparsed cell T2:row2:col4 = '106 to 189b'
- unparsed cell T2:row3:col2 = '−0.590 to −0.180'
- unparsed cell T2:row4:col2 = '3.71 to 4.41'
- unparsed cell T2:row4:col4 = '72.6 to 178'
- unparsed cell T2:row6:col2 = '4.18 to 5.17'
- unparsed cell T2:row7:col2 = '119 to 149'
- unparsed cell T2:row7:col4 = '17.8 to 77.8'
- unparsed cell T2:row8:col2 = '0.770 to 1.21'
- unparsed cell T2:row9:col2 = '96.5 to 129'
- unparsed cell T2:row10:col2 = '45.8 to 53.5'
- unparsed cell T2:row12:col4 = '43.2 to 78.8'
- unparsed cell T2:row14:col2 = '0.569 to 0.840'
- unparsed cell T2:row14:col4 = '86.2 to 143.2'
- unparsed cell T2:row16:col2 = '298 to 508'
- unparsed cell T2:row16:col4 = '21.5 to 43.5'
- unparsed cell T2:row17:col2 = '2,050 to 3,180'
- unparsed cell T2:row17:col4 = '15.4 to 31.0'
- unparsed cell T2:row18:col2 = '92.0 to 108'
- unparsed cell T2:row19:col2 = '0.623 to 1.42'
- unparsed cell T2:row20:col2 = '6.16 to 14.4'
- unparsed cell T2:row21:col2 = '7.59 to 41.9'
- unparsed cell T2:row23:col2 = '486 to 782'
- unparsed cell T2:row23:col4 = '12.9 to 29.9'
- unparsed cell T2:row24:col2 = '99.8 to 251'
- unparsed cell T2:row24:col4 = '17.5 to 51.5'
- unparsed cell T2:row25:col2 = '109 to 129'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row6:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row16:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row23:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row7:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row24:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Kloprogge_2015:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row8:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row17:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row9:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Kloprogge_2015:review'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 4.49 L/h | not captured | not captured | ['T2:row6:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 467 L/h | not captured | not captured | ['T2:row16:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 611 L/h | not captured | not captured | ['T2:row23:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 139 L | not captured | not captured | ['T2:row7:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 137 L | not captured | not captured | ['T2:row24:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 3e+03 L | not captured | not captured | ['T2:row17:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 111 L | not captured | not captured | ['T2:row9:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_artemether/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lohy_2018` / `Lohy_2018::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_artemether/Artemether_Lohy2018_reference/Artemether_Lohy2018_reference_modelica.zip" download>Artemether_Lohy2018_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_artemether/Artemether_Lohy2018_reference/Artemether_Lohy2018_reference_fmi.zip" download>Artemether_Lohy2018_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_artemether/Artemether_Lohy2018_reference/Artemether_Lohy2018_reference_matlab.zip" download>Artemether_Lohy2018_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_artemether/Artemether_Lohy2018_reference/Artemether_Lohy2018_reference_matlab_simbio.zip" download>Artemether_Lohy2018_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_artemether/Artemether_Lohy2018_reference/Artemether_Lohy2018_reference_sbml.zip" download>Artemether_Lohy2018_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_artemether/Artemether_Lohy2018_reference/Artemether_Lohy2018_reference_cellml.zip" download>Artemether_Lohy2018_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_artemether/Artemether_Lohy2018_reference/Artemether_Lohy2018_reference.svg" alt="Artemether_Lohy2018_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 80 mg, single dose, first-order absorption (ka 0.0577 /h, lag 78.6 min, F 1). Dose in the paper: 80 mg.

<dbs-fmusim paramsurl="drugs/drug_artemether/Artemether_Lohy2018_reference/Artemether_Lohy2018_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_artemether/Artemether_Lohy2018_reference/Artemether_Lohy2018_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Artemether_Lohy2018_reference_params.json` · controls `Artemether_Lohy2018_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:52 UTC</sub>
