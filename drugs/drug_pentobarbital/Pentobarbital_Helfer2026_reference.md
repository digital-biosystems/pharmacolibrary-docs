<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;pentobarbital&quot;,&quot;href&quot;:&quot;drugs/drug_pentobarbital/&quot;},{&quot;label&quot;:&quot;Helfer_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pentobarbital_Frederiksen1983_reference&quot;,&quot;label&quot;:&quot;Frederiksen_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pentobarbital/Pentobarbital_Frederiksen1983_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pentobarbital_Helfer2026_reference&quot;,&quot;label&quot;:&quot;Helfer_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pentobarbital/Pentobarbital_Helfer2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Pentobarbital_Ketharanathan2023_base&quot;,&quot;label&quot;:&quot;Ketharanathan_2023_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pentobarbital/Pentobarbital_Ketharanathan2023_base.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pentobarbital_Ketharanathan2023_final&quot;,&quot;label&quot;:&quot;Ketharanathan_2023_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pentobarbital/Pentobarbital_Ketharanathan2023_final.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pentobarbital — `Pentobarbital_Helfer2026_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Helfer VE et al., Population Pharmacokinetics and Dosing…, Journal of clinical pharmac… (2026)
  ·  DOI: [10.1002/jcph.70204](https://doi.org/10.1002/jcph.70204)

## Model component
<dbs-pgx drug="pentobarbital" model-id="Pentobarbital_Helfer2026_reference" status="extracted" stale="false" population="pediatric patients (birth to 21 years)" measured-compound="pentobarbital" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h/70 kg) | `Q22` · CL | 5.13 | L/h/70 kg | 1.425e-06 | [l] / [[h] · [70kg]] | not captured | exact (1.0) | jcph70204-tbl-0002:row2:col1, jcph70204-tbl-0002:row2:col3, jcph70204-tbl-0002:row2:col4, jcph70204-tbl-0002:row2:col5 | — | not captured |
| V1 (L/70 kg) | `Q63` · V1 | 35.43 | L/70 kg | 0.03543 | [l] / [70kg] | not captured | exact (1.0) | jcph70204-tbl-0002:row3:col1, jcph70204-tbl-0002:row3:col3, jcph70204-tbl-0002:row3:col4, jcph70204-tbl-0002:row3:col5 | — | not captured |
| Q (L/h/70 kg) | `Q30` · Q | 17.81 | L/h/70 kg | 4.947222222222222e-06 | [l] / [[h] · [70kg]] | not captured | exact (1.0) | jcph70204-tbl-0002:row4:col1, jcph70204-tbl-0002:row4:col3, jcph70204-tbl-0002:row4:col4, jcph70204-tbl-0002:row4:col5 | — | not captured |
| V2 (L/70 kg) | `Q64` · V2 | 62.71 | L/70 kg | 0.06271 | [l] / [70kg] | not captured | exact (1.0) | jcph70204-tbl-0002:row5:col1, jcph70204-tbl-0002:row5:col3, jcph70204-tbl-0002:row5:col4, jcph70204-tbl-0002:row5:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional error (%)' routed out of structural estimates ('Residual error')
- routed 'Shared variability CL and V1 b' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'η1' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Number of Participants' — extend the ontology if this is a real PK parameter (source ['Helfer_2026_table_3:row0:col1', 'Helfer_2026_table_3:row0:col2', 'Helfer_2026_table_3:row0:col3', 'Helfer_2026_table_3:row0:col4'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 90.4 (source ['jcph70204-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'omega_cov' from footnote/prose loose number None (source ['jcph70204-tbl-0002:footnote']); the table cell was unparseable — needs review
- covariate category for IIV from footnote/prose kept as documentation only (['jcph70204-tbl-0002:footnote'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pentobarbital

**Extraction notes:**
- unparsed cell jcph70204-tbl-0002:row8:col2 = '23.1 [7]'
- unparsed cell jcph70204-tbl-0002:row10:col2 = '31.4 [24]'
- transposed table Helfer_2026_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 3 transcribed (4 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph70204-tbl-0002:row2:col1', 'jcph70204-tbl-0002:row2:col3', 'jcph70204-tbl-0002:row2:col4', 'jcph70204-tbl-0002:row2:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph70204-tbl-0002:row4:col1', 'jcph70204-tbl-0002:row4:col3', 'jcph70204-tbl-0002:row4:col4', 'jcph70204-tbl-0002:row4:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph70204-tbl-0002:row3:col1', 'jcph70204-tbl-0002:row3:col3', 'jcph70204-tbl-0002:row3:col4', 'jcph70204-tbl-0002:row3:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph70204-tbl-0002:row5:col1', 'jcph70204-tbl-0002:row5:col3', 'jcph70204-tbl-0002:row5:col4', 'jcph70204-tbl-0002:row5:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 5.13 | not captured | not captured | ['jcph70204-tbl-0002:row2:col1', 'jcph70204-tbl-0002:row2:col3', 'jcph70204-tbl-0002:row2:col4', 'jcph70204-tbl-0002:row2:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.13 L/h | not captured | not captured | ['jcph70204-tbl-0002:row2:col1', 'jcph70204-tbl-0002:row2:col3', 'jcph70204-tbl-0002:row2:col4', 'jcph70204-tbl-0002:row2:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 35.4 L | not captured | not captured | ['jcph70204-tbl-0002:row3:col1', 'jcph70204-tbl-0002:row3:col3', 'jcph70204-tbl-0002:row3:col4', 'jcph70204-tbl-0002:row3:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 62.7 L | not captured | not captured | ['jcph70204-tbl-0002:row5:col1', 'jcph70204-tbl-0002:row5:col3', 'jcph70204-tbl-0002:row5:col4', 'jcph70204-tbl-0002:row5:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_pentobarbital/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Helfer_2026` / `Helfer_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_pentobarbital/Pentobarbital_Helfer2026_reference/Pentobarbital_Helfer2026_reference_modelica.zip" download>Pentobarbital_Helfer2026_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_pentobarbital/Pentobarbital_Helfer2026_reference/Pentobarbital_Helfer2026_reference_fmi.zip" download>Pentobarbital_Helfer2026_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_pentobarbital/Pentobarbital_Helfer2026_reference/Pentobarbital_Helfer2026_reference_matlab.zip" download>Pentobarbital_Helfer2026_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_pentobarbital/Pentobarbital_Helfer2026_reference/Pentobarbital_Helfer2026_reference_matlab_simbio.zip" download>Pentobarbital_Helfer2026_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_pentobarbital/Pentobarbital_Helfer2026_reference/Pentobarbital_Helfer2026_reference_sbml.zip" download>Pentobarbital_Helfer2026_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_pentobarbital/Pentobarbital_Helfer2026_reference/Pentobarbital_Helfer2026_reference_cellml.zip" download>Pentobarbital_Helfer2026_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_pentobarbital/Pentobarbital_Helfer2026_reference/Pentobarbital_Helfer2026_reference.svg" alt="Pentobarbital_Helfer2026_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 27.3 mg infusion over 10 min, single dose. Doses in the paper: 27.3–623 mg.

<dbs-fmusim paramsurl="drugs/drug_pentobarbital/Pentobarbital_Helfer2026_reference/Pentobarbital_Helfer2026_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_pentobarbital/Pentobarbital_Helfer2026_reference/Pentobarbital_Helfer2026_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C` · parameters `Pentobarbital_Helfer2026_reference_params.json` · controls `Pentobarbital_Helfer2026_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 20:43 UTC</sub>
