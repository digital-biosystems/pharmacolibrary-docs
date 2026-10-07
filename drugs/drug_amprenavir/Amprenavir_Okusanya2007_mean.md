<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;amprenavir&quot;,&quot;href&quot;:&quot;drugs/drug_amprenavir/&quot;},{&quot;label&quot;:&quot;Okusanya_2007 \u00b7 mean&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amprenavir_Johnson2014_reference&quot;,&quot;label&quot;:&quot;Johnson_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amprenavir/Amprenavir_Johnson2014_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amprenavir_Okusanya2007_mean&quot;,&quot;label&quot;:&quot;Okusanya_2007_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amprenavir/Amprenavir_Okusanya2007_mean.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Amprenavir_Okusanya2007_median&quot;,&quot;label&quot;:&quot;Okusanya_2007_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amprenavir/Amprenavir_Okusanya2007_median.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amprenavir — `Amprenavir_Okusanya2007_mean`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Okusanya O et al., Compartmental pharmacokinetic analysis…, Antimicrobial agents and ch… (2007)
  ·  DOI: [10.1128/AAC.00570-06](https://doi.org/10.1128/AAC.00570-06)

## Model component
<dbs-pgx drug="amprenavir" model-id="Amprenavir_Okusanya2007_mean" status="extracted" stale="false" population="healthy HIV-seronegative adults" measured-compound="amprenavir" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 11 extracted.

**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vc/F (liters/kg) | `Q290` · V1/F | 1.07 | liters/kg | 0.0749 | [l] / [kg] | not captured | exact (1.0) | tab_1:row1:col1 | — | not captured |
| Vp/F (liters/kg) | `Q82` · V2/F | 7.65 | liters/kg | 0.5355000000000001 | [l] / [kg] | not captured | exact (1.0) | tab_1:row2:col1 | — | not captured |
| CLd (liters/h/kg) | `Q30` · Q | 0.426 | liters/h/kg | 8.283333333333334e-06 | [l] / [[h] · [kg]] | not captured | exact (1.0) | tab_1:row3:col1 | — | not captured |
| CLt/F (liters/h/kg) | `Q27` · CL/F | 1.17 | liters/h/kg | 2.275e-05 | [l] / [[h] · [kg]] | not captured | llm (0.6) | tab_1:row4:col1 | — | not captured |
| TLag (h) | `Q83` · tlag | 0.354 | h | 1274.3999999999999 | [h] | not captured | exact (1.0) | tab_1:row8:col1 | — | not captured |
| ka (h Ϫ1 ) | `Q49` · kabs | 0.986 | h Ϫ1 | 0.0002738888888888889 | [1] / [h] | not captured | exact (1.0) | tab_1:row9:col1 | — | not captured |
| kel (h Ϫ1 ) | `Q47` · kel | 1.209 | h Ϫ1 | 0.00033583333333333333 | [1] / [h] | not captured | exact (1.0) | tab_1:row10:col1 | — | not captured |
| kcp (h Ϫ1 ) | `Q301` · k12 | 0.496 | h Ϫ1 | 0.0001377777777777778 | [1] / [h] | not captured | exact (1.0) | tab_1:row11:col1 | — | not captured |
| kpc (h Ϫ1 ) | `Q302` · k21 | 0.124 | h Ϫ1 | 3.444444444444445e-05 | [1] / [h] | not captured | exact (1.0) | tab_1:row12:col1 | — | not captured |
| ␣ t 1/2 (h) | `Q57` · t1/2z | 0.547 | h | 1969.2 | [h] | not captured | llm (0.6) | tab_1:row13:col1 | — | not captured |
| ␤ t 1/2 (h) | `Q60` · t1/2β | 15.8 | h | 56880.0 | [h] | not captured | llm (0.6) | tab_1:row14:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q27 ('CLb/F (liters/h/kg)', value '0.106') — already have one for this compound
- dropped unlinked row (NIL): 'Fraction recycled' — extend the ontology if this is a real PK parameter (source ['tab_1:row6:col1'])
- dropped unlinked row (NIL): 'Recycling time (h)' — extend the ontology if this is a real PK parameter (source ['tab_1:row7:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=amprenavir
- population split: 'mean' subgroup of Okusanya_2007 (paper reports 2 populations: mean, median)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row4:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row3:col1'] |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row11:col1'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row12:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row10:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row9:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['tab_1:row13:col1'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['tab_1:row14:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row2:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['tab_1:row8:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 81.9 L/h | not captured | not captured | ['tab_1:row4:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 74.9 L | not captured | not captured | ['tab_1:row1:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 536 L | not captured | not captured | ['tab_1:row2:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amprenavir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Okusanya_2007` / `Okusanya_2007::mean`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_amprenavir/Amprenavir_Okusanya2007_mean/Amprenavir_Okusanya2007_mean_modelica.zip" download>Amprenavir_Okusanya2007_mean_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_amprenavir/Amprenavir_Okusanya2007_mean/Amprenavir_Okusanya2007_mean_fmi.zip" download>Amprenavir_Okusanya2007_mean_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_amprenavir/Amprenavir_Okusanya2007_mean/Amprenavir_Okusanya2007_mean_matlab.zip" download>Amprenavir_Okusanya2007_mean_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_amprenavir/Amprenavir_Okusanya2007_mean/Amprenavir_Okusanya2007_mean_matlab_simbio.zip" download>Amprenavir_Okusanya2007_mean_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_amprenavir/Amprenavir_Okusanya2007_mean/Amprenavir_Okusanya2007_mean_sbml.zip" download>Amprenavir_Okusanya2007_mean_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_amprenavir/Amprenavir_Okusanya2007_mean/Amprenavir_Okusanya2007_mean_cellml.zip" download>Amprenavir_Okusanya2007_mean_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_amprenavir/Amprenavir_Okusanya2007_mean/Amprenavir_Okusanya2007_mean.svg" alt="Amprenavir_Okusanya2007_mean diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 600 mg, single dose, first-order absorption (ka 0.986 /h, lag 21.2 min, F 1). Dose in the paper: 600 mg.

<dbs-fmusim paramsurl="drugs/drug_amprenavir/Amprenavir_Okusanya2007_mean/Amprenavir_Okusanya2007_mean_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_amprenavir/Amprenavir_Okusanya2007_mean/Amprenavir_Okusanya2007_mean_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C_enteral` · parameters `Amprenavir_Okusanya2007_mean_params.json` · controls `Amprenavir_Okusanya2007_mean_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 13:10 UTC</sub>
