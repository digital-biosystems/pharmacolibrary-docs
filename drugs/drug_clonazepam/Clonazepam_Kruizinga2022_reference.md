<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;clonazepam&quot;,&quot;href&quot;:&quot;drugs/drug_clonazepam/&quot;},{&quot;label&quot;:&quot;Kruizinga_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clonazepam_Kruizinga2022_reference&quot;,&quot;label&quot;:&quot;Kruizinga_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Clonazepam_Hampton2024_reference&quot;,&quot;label&quot;:&quot;Hampton_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_clonazepam/Clonazepam_Hampton2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clonazepam_Yukawa2001_reference&quot;,&quot;label&quot;:&quot;Yukawa_2001_reference&quot;,&quot;href&quot;:&quot;drugs/drug_clonazepam/Clonazepam_Yukawa2001_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clonazepam_Yukawa2002_reference&quot;,&quot;label&quot;:&quot;Yukawa_2002_reference&quot;,&quot;href&quot;:&quot;drugs/drug_clonazepam/Clonazepam_Yukawa2002_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clonazepam — `Clonazepam_Kruizinga2022_reference`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `Km`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** every check the reviewer could run passed.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Kruizinga MD; Zuiker RGJA; Bergmann KR; Egas AC; Cohen AF; Santen GWE; et al. et al. (2022). British journal of clinical pharmacology 88
  ·  DOI: [10.1111/bcp.15152](https://doi.org/10.1111/bcp.15152)

## Model component
<dbs-pgx drug="clonazepam" model-id="Clonazepam_Kruizinga2022_reference" status="curated_candidate" stale="false" population="healthy adults" measured-compound="clonazepam" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ V D central (L) | `Q63` · V1 | 11.5 | L | 0.0115 | [l] | 10.4 | llm (0.6) | bcp15152-tbl-0002:row3:col1, bcp15152-tbl-0002:row3:col2, bcp15152-tbl-0002:row3:col3 | — | not captured |
| θ clearance (L h−1) | `Q22` · CL | 0.16 | L h−1 | 4.444444444444445e-08 | [l] / [h] | 5.5 | llm_confirmed (0.6) | bcp15152-tbl-0002:row4:col1, bcp15152-tbl-0002:row4:col2, bcp15152-tbl-0002:row4:col3 | — | not captured |
| θ V D peripheral (L) | `Q64` · V2 | 12.9 | L | 0.0129 | [l] | 9.9 | llm (0.6) | bcp15152-tbl-0002:row5:col1, bcp15152-tbl-0002:row5:col2, bcp15152-tbl-0002:row5:col3 | — | not captured |
| θ Q (L h−1) | `Q30` · Q | 11.2 | L h−1 | 3.111111111111111e-06 | [l] / [h] | 18.3 | llm (0.6) | bcp15152-tbl-0002:row6:col1, bcp15152-tbl-0002:row6:col2, bcp15152-tbl-0002:row6:col3 | — | not captured |
| θ K el saliva (h−1) | `Q47` · kel | 0.12 | h−1 | 3.3333333333333335e-05 | [1] / [h] | 6.0 | llm (0.6) | bcp15152-tbl-0002:row8:col1, bcp15152-tbl-0002:row8:col2, bcp15152-tbl-0002:row8:col3 | — | not captured |
| θ RatioKM (μg/L) | `Q1` · Km | 0.74 | μg/L | not captured | [µg] / [l] | 28.5 | llm (0.6) | bcp15152-tbl-0002:row10:col1, bcp15152-tbl-0002:row10:col2, bcp15152-tbl-0002:row10:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped diagnostic row 'Plasma kinetics' → Q318 (shrinkage) — reported statistic, not a parameter
- dropped diagnostic row 'θ Prob. slow group' → Q318 (shrinkage) — reported statistic, not a parameter
- dropped unlinked row (NIL): 'Saliva kinetics' — extend the ontology if this is a real PK parameter (source ['bcp15152-tbl-0002:row7:col2', 'bcp15152-tbl-0002:row7:col3', 'bcp15152-tbl-0002:row7:col4'])
- dropped diagnostic row 'θ RatioMAX' → Q318 (shrinkage) — reported statistic, not a parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clonazepam

**Extraction notes:**
- unparsed cell bcp15152-tbl-0002:row1:col1 = 'θ k a ‐ slow group (h−1)'
- unparsed cell bcp15152-tbl-0002:row7:col1 = 'θ F saliva (% 1000−1)'
- unparsed cell bcp15152-tbl-0002:row11:col1 = 'ω 2 k a ‐ slow group'
- unparsed cell bcp15152-tbl-0002:row11:col2 = '0.16 [2.24%]'
- unparsed cell bcp15152-tbl-0002:row12:col1 = '0.25 [0.33%]'
- unparsed cell bcp15152-tbl-0002:row13:col1 = '0.026 [3.98%]'
- unparsed cell bcp15152-tbl-0002:row14:col1 = '0.28 [5.30%]'
- unparsed cell bcp15152-tbl-0002:row15:col1 = '0.056 [17.2%]'
- unparsed cell bcp15152-tbl-0002:row16:col1 = 'σ 2 proportional plasma'
- unparsed cell bcp15152-tbl-0002:row16:col2 = '0.0058 [15.9%]'
- unparsed cell bcp15152-tbl-0002:row17:col1 = '0.057 [16.5%]'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['bcp15152-tbl-0002:row10:col1', 'bcp15152-tbl-0002:row10:col2', 'bcp15152-tbl-0002:row10:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp15152-tbl-0002:row4:col1', 'bcp15152-tbl-0002:row4:col2', 'bcp15152-tbl-0002:row4:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp15152-tbl-0002:row6:col1', 'bcp15152-tbl-0002:row6:col2', 'bcp15152-tbl-0002:row6:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['bcp15152-tbl-0002:row8:col1', 'bcp15152-tbl-0002:row8:col2', 'bcp15152-tbl-0002:row8:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp15152-tbl-0002:row3:col1', 'bcp15152-tbl-0002:row3:col2', 'bcp15152-tbl-0002:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp15152-tbl-0002:row5:col1', 'bcp15152-tbl-0002:row5:col2', 'bcp15152-tbl-0002:row5:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.16 | not captured | not captured | ['bcp15152-tbl-0002:row4:col1', 'bcp15152-tbl-0002:row4:col2', 'bcp15152-tbl-0002:row4:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.16 L/h | not captured | not captured | ['bcp15152-tbl-0002:row4:col1', 'bcp15152-tbl-0002:row4:col2', 'bcp15152-tbl-0002:row4:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 11.5 L | not captured | not captured | ['bcp15152-tbl-0002:row3:col1', 'bcp15152-tbl-0002:row3:col2', 'bcp15152-tbl-0002:row3:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 12.9 L | not captured | not captured | ['bcp15152-tbl-0002:row5:col1', 'bcp15152-tbl-0002:row5:col2', 'bcp15152-tbl-0002:row5:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=clonazepam) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_clonazepam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kruizinga_2022` / `Kruizinga_2022::reference`)
- model: `../../../knowledgebase/drugs/drug_clonazepam/models/modelica/Clonazepam_Kruizinga2022_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_clonazepam/models/modelica/Clonazepam_Kruizinga2022_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_clonazepam/models/modelica/Clonazepam_Kruizinga2022_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_modelica.zip" download>Clonazepam_Kruizinga2022_reference_modelica.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_matlab.zip" download>Clonazepam_Kruizinga2022_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_matlab_simbio.zip" download>Clonazepam_Kruizinga2022_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_sbml.zip" download>Clonazepam_Kruizinga2022_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_cellml.zip" download>Clonazepam_Kruizinga2022_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference.svg" alt="Clonazepam_Kruizinga2022_reference diagram"><figcaption>The structure OpenModelica draws for this model, with this record's parameter values in the component labels.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C` · parameters `Clonazepam_Kruizinga2022_reference_params.json` · controls `Clonazepam_Kruizinga2022_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
