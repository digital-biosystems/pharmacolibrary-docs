<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;acalabrutinib&quot;,&quot;href&quot;:&quot;drugs/drug_acalabrutinib/&quot;},{&quot;label&quot;:&quot;Edlund_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Acalabrutinib_Edlund2022_reference&quot;,&quot;label&quot;:&quot;Edlund_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Acalabrutinib_Hefnawy2022_reference&quot;,&quot;label&quot;:&quot;Hefnawy_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acalabrutinib/Acalabrutinib_Hefnawy2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Acalabrutinib_Kemal2026_reference&quot;,&quot;label&quot;:&quot;Kemal_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acalabrutinib/Acalabrutinib_Kemal2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# acalabrutinib — `Acalabrutinib_Edlund2022_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Edlund H et al., Improved characterization of the pharma…, British journal of clinical… (2022)
  ·  DOI: [10.1111/bcp.14988](https://doi.org/10.1111/bcp.14988)

## Model component
<dbs-pgx drug="acalabrutinib" model-id="Acalabrutinib_Edlund2022_reference" status="extracted" stale="false" population="adults with B-cell malignancies and healthy subjects" measured-compound="acalabrutinib" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent–metabolite model: parent with 2 compartment(s); metabolite ACP-5862: 2 compartment(s); formed from the central compartment; oral dose — template `PK_3M_9C`.  
**Parameters:** 11 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 134 | L/h | 3.722222222222222e-05 | [l] / [h] | not captured | exact (1.0) | bcp14988-tbl-0001:row3:col1 | — | not captured |
| Vc/F (L) | `Q290` · V1/F | 31.0 | L | 0.031 | [l] | not captured | exact (1.0) | bcp14988-tbl-0001:row4:col1 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 20.9 | L/h | 5.805555555555555e-06 | [l] / [h] | not captured | exact (1.0) | bcp14988-tbl-0001:row5:col1 | — | not captured |
| Vp/F (L) | `Q82` · V2/F | 110 | L | 0.11 | [l] | not captured | exact (1.0) | bcp14988-tbl-0001:row6:col1 | — | not captured |
| Ka (h−1) | `Q49` · kabs | 1.48 | h−1 | 0.0004111111111111111 | [1] / [h] | not captured | exact (1.0) | bcp14988-tbl-0001:row7:col1 | — | not captured |
| MTT (h) | `Q81` · MTT | 0.459 | h | not captured | [h] | not captured | exact (1.0) | bcp14988-tbl-0001:row8:col1 | — | not captured |
| CLM/F (L/h) | `Q27` · CL/F | 21.8 | L/h | 6.055555555555555e-06 | [l] / [h] | not captured | exact (1.0) | bcp14988-tbl-0001:row9:col1 | — | not captured |
| VcM/F (L) | `Q290` · V1/F | 22.7 | L | 0.0227 | [l] | not captured | exact (1.0) | bcp14988-tbl-0001:row10:col1 | — | not captured |
| QM/F (L/h) | `Q69` · Q/F | 26.7 | L/h | 7.416666666666667e-06 | [l] / [h] | not captured | exact (1.0) | bcp14988-tbl-0001:row11:col1 | — | not captured |
| VpM/F (L) | `Q82` · V2/F | 89.2 | L | 0.0892 | [l] | not captured | exact (1.0) | bcp14988-tbl-0001:row12:col1 | — | not captured |
| PPI—F1 | `Q87` · Frel | -0.358 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | bcp14988-tbl-0001:row17:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q27 ('Healthy subject—CL/F', value '0.467') — already have one for this compound
- dropped duplicate Q82 ('Healthy subject—Vp/F', value '-0.556') — already have one for this compound
- dropped duplicate Q27 ('ECOG 2—CL/F', value '-0.171') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=acalabrutinib
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- row roles (LLM): model_class=compartmental; 27/27 row label(s) assigned, 9 linked by role; re-tagged parent→ACP-5862 ×16
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell bcp14988-tbl-0001:row3:col2 = '132 [126, 139]'
- unparsed cell bcp14988-tbl-0001:row4:col2 = '30.3 [25.3, 35.7]'
- unparsed cell bcp14988-tbl-0001:row5:col2 = '20.8 [18.6, 23.0]'
- unparsed cell bcp14988-tbl-0001:row6:col2 = '108 [97.6, 120]'
- unparsed cell bcp14988-tbl-0001:row7:col2 = '1.48 [1.41, 1.55]'
- unparsed cell bcp14988-tbl-0001:row8:col2 = '0.460 [0.426, 0.492]'
- unparsed cell bcp14988-tbl-0001:row9:col2 = '21.6 [20.2, 22.6]'
- unparsed cell bcp14988-tbl-0001:row10:col2 = '22.7 [19.5, 25.8]'
- unparsed cell bcp14988-tbl-0001:row11:col2 = '26.4 [22.9, 29.9]'
- unparsed cell bcp14988-tbl-0001:row12:col2 = '88.1 [77.6, 97]'
- unparsed cell bcp14988-tbl-0001:row14:col2 = '0.467 [0.367, 0.569]'
- unparsed cell bcp14988-tbl-0001:row15:col2 = '−0.554 [−0.6, −0.496]'
- unparsed cell bcp14988-tbl-0001:row16:col2 = '−0.158 [−0.274, −0.032]'
- unparsed cell bcp14988-tbl-0001:row17:col2 = '−0.368 [−0.49, −0.228]'
- unparsed cell bcp14988-tbl-0001:row19:col2 = '24.1 [20.4, 28]'
- unparsed cell bcp14988-tbl-0001:row20:col2 = '284 [225, 367]'
- unparsed cell bcp14988-tbl-0001:row21:col2 = '33.9 [25, 42.4]'
- unparsed cell bcp14988-tbl-0001:row22:col2 = '13.1 [9.22, 20.2]'
- unparsed cell bcp14988-tbl-0001:row23:col2 = '53.3 [36.9, 71.1]'
- unparsed cell bcp14988-tbl-0001:row24:col2 = '40 [23.8, 59.2]'
- unparsed cell bcp14988-tbl-0001:row25:col2 = '21.2 [15.3, 41.2]'
- unparsed cell bcp14988-tbl-0001:row26:col2 = '119 [104, 137]'
- unparsed cell bcp14988-tbl-0001:row27:col2 = '55.3 [50.4, 61.1]'
- unparsed cell bcp14988-tbl-0001:row28:col2 = '0.583 [0.555, 0.612]'
- unparsed cell bcp14988-tbl-0001:row29:col2 = '0.843 [0.762, 0.917]'
- unparsed cell bcp14988-tbl-0001:row30:col2 = '0.332 [0.304, 0.357]'
- unparsed cell bcp14988-tbl-0001:row31:col2 = '0.225 [0, 0.325]'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp14988-tbl-0001:row3:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp14988-tbl-0001:row9:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp14988-tbl-0001:row4:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp14988-tbl-0001:row10:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['bcp14988-tbl-0001:row7:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp14988-tbl-0001:row5:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp14988-tbl-0001:row11:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp14988-tbl-0001:row6:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp14988-tbl-0001:row12:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 134 L/h | not captured | not captured | ['bcp14988-tbl-0001:row3:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 21.8 L/h | not captured | not captured | ['bcp14988-tbl-0001:row9:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 31 L | not captured | not captured | ['bcp14988-tbl-0001:row4:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 22.7 L | not captured | not captured | ['bcp14988-tbl-0001:row10:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 110 L | not captured | not captured | ['bcp14988-tbl-0001:row6:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 89.2 L | not captured | not captured | ['bcp14988-tbl-0001:row12:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_acalabrutinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Edlund_2022` / `Edlund_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference/Acalabrutinib_Edlund2022_reference_modelica.zip" download>Acalabrutinib_Edlund2022_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference/Acalabrutinib_Edlund2022_reference_fmi.zip" download>Acalabrutinib_Edlund2022_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_3M_9C.fmu" download>PK_3M_9C.fmu</a> <span class="pk-size">(1.4 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference/Acalabrutinib_Edlund2022_reference_matlab.zip" download>Acalabrutinib_Edlund2022_reference_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference/Acalabrutinib_Edlund2022_reference_sbml.zip" download>Acalabrutinib_Edlund2022_reference_sbml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference/Acalabrutinib_Edlund2022_reference_cellml.zip" download>Acalabrutinib_Edlund2022_reference_cellml.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_3M_9C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference/Acalabrutinib_Edlund2022_reference.svg" alt="Acalabrutinib_Edlund2022_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 1.48 /h, F 1). Dose in the paper: 100 mg.

<dbs-fmusim paramsurl="drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference/Acalabrutinib_Edlund2022_reference_params.json" metaurl="assets/fmu/PK_3M_9C.vr.json" wasmurl="assets/fmu/PK_3M_9C.js" controlsurl="drugs/drug_acalabrutinib/Acalabrutinib_Edlund2022_reference/Acalabrutinib_Edlund2022_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_3M_9C` · parameters `Acalabrutinib_Edlund2022_reference_params.json` · controls `Acalabrutinib_Edlund2022_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 20:38 UTC</sub>
