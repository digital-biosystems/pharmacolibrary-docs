<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02A&quot;,&quot;href&quot;:&quot;atc/A02A.md&quot;},{&quot;label&quot;:&quot;calcium carbonate&quot;,&quot;href&quot;:&quot;drugs/drug_calcium_carbonate/&quot;},{&quot;label&quot;:&quot;Ahn_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CalciumCarbonate_Ekobena2025_reference&quot;,&quot;label&quot;:&quot;Ekobena_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_calcium_carbonate/CalciumCarbonate_Ekobena2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;CalciumCarbonate_Ahn2014_reference&quot;,&quot;label&quot;:&quot;Ahn_2014_reference&quot;,&quot;href&quot;:&quot;drugs/drug_calcium_carbonate/CalciumCarbonate_Ahn2014_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;CalciumCarbonate_Kemal2026_reference&quot;,&quot;label&quot;:&quot;Kemal_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_calcium_carbonate/CalciumCarbonate_Kemal2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# calcium carbonate — `CalciumCarbonate_Ahn2014_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped
**How to address:** Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
<sub>owner: **scholar**</sub>

> **Dose compound ≠ measured compound:** dosed `calcium`, measured `parathyroid hormone`.

## Citation
Ahn JE; Jeon S; Lee J; Han S; Yim DS et al. (2014). The Korean journal of physiology & pharmacology : official journal of the Korean Physiological Society and the Korean Society of Pharmacology 18
  ·  DOI: [10.4196/kjpp.2014.18.3.217](https://doi.org/10.4196/kjpp.2014.18.3.217)

## Model component
<dbs-pgx drug="calcium carbonate" model-id="CalciumCarbonate_Ahn2014_reference" status="model_quarantined" stale="false" population="healthy subjects" measured-compound="parathyroid hormone" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (hr-1) | `Q49` · kabs | 0.871 | hr-1 | 0.00024194444444444445 | [1] / [h] | not captured | exact (1.0) | Ahn_2014_table_p3_1:row4:col1, Ahn_2014_table_p3_1:row4:col3 | — | 0.390 (None% RSE) |
| Relative F1 | `Q87` · Frel | 2.14 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Ahn_2014_table_p3_1:row6:col1, Ahn_2014_table_p3_1:row6:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'kin_ca' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ahn_2014_table_p3_1:row0:col1', 'Ahn_2014_table_p3_1:row0:col3'])
- dropped PD-category row 'kout_ca' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ahn_2014_table_p3_1:row1:col1'])
- dropped PD-category row 'kin_pth' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ahn_2014_table_p3_1:row2:col1', 'Ahn_2014_table_p3_1:row2:col3'])
- dropped PD-category row 'kout_pth' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ahn_2014_table_p3_1:row3:col1', 'Ahn_2014_table_p3_1:row3:col3'])
- dropped PD-category row 'EC50 (mmol/L)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ahn_2014_table_p3_1:row5:col1', 'Ahn_2014_table_p3_1:row5:col3'])
- routed 'SD_ca (mmol/L)' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'CV_pth (% CV)' — extend the ontology if this is a real PK parameter (source ['Ahn_2014_table_p3_1:row12:col1', 'Ahn_2014_table_p3_1:row12:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=parathyroid hormone
- gap-filled Q22 (CL) from Ekobena_2025's review values (primary lacked it)
- gap-filled Q61 (V) from Ekobena_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- removed gap-filled parent disposition (Q22, Q61): this record measures 'parathyroid hormone', not calcium_carbonate, and reports no metabolite CL/V — the imported values describe a compartment this record did not measure

**Extraction notes:**
- final table T2: grid unusable → re-running vision table extraction for Ahn_2014
- unparsed cell Ahn_2014_table_p3_1:row0:col2 = '3.39, 3.43'
- unparsed cell Ahn_2014_table_p3_1:row0:col4 = '3.39, 3.43'
- unparsed cell Ahn_2014_table_p3_1:row2:col2 = '12.4, 30.8'
- unparsed cell Ahn_2014_table_p3_1:row2:col4 = '9.12, 33.0'
- unparsed cell Ahn_2014_table_p3_1:row3:col2 = '0.513, 1.19'
- unparsed cell Ahn_2014_table_p3_1:row3:col4 = '0.375, 1.26'
- unparsed cell Ahn_2014_table_p3_1:row4:col2 = '0.438, 1.15'
- unparsed cell Ahn_2014_table_p3_1:row4:col4 = '0.54, 7.18'
- unparsed cell Ahn_2014_table_p3_1:row5:col2 = '0.0924, 0.224'
- unparsed cell Ahn_2014_table_p3_1:row5:col4 = '0.026, 0.232'
- unparsed cell Ahn_2014_table_p3_1:row6:col2 = '1.06, 2.90'
- unparsed cell Ahn_2014_table_p3_1:row6:col4 = '1.31, 8.58'
- unparsed cell Ahn_2014_table_p3_1:row7:col2 = '0.000814, 0.000377'
- unparsed cell Ahn_2014_table_p3_1:row7:col4 = '0.0001, 0.0004'
- unparsed cell Ahn_2014_table_p3_1:row8:col2 = '0.0260, 0.0646'
- unparsed cell Ahn_2014_table_p3_1:row8:col4 = '0.0213, 0.0616'
- unparsed cell Ahn_2014_table_p3_1:row9:col2 = '0.161, 0.651'
- unparsed cell Ahn_2014_table_p3_1:row9:col4 = '0.164, 1.34'
- unparsed cell Ahn_2014_table_p3_1:row10:col2 = '0.0015, 0.0179'
- unparsed cell Ahn_2014_table_p3_1:row10:col4 = '0.0026, 0.0189'
- unparsed cell Ahn_2014_table_p3_1:row11:col2 = '0.0212, 0.0304'
- unparsed cell Ahn_2014_table_p3_1:row11:col4 = '0.022, 0.0301'
- unparsed cell Ahn_2014_table_p3_1:row12:col2 = '18.8, 23.2'
- unparsed cell Ahn_2014_table_p3_1:row12:col4 = '18.9, 23'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Ahn_2014_table_p3_1:row4:col1', 'Ahn_2014_table_p3_1:row4:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=parathyroid hormone) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 1 scholar param(s) emitted or defaulted | 1 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_calcium_carbonate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ahn_2014` / `Ahn_2014::reference`)
- model: `../../../knowledgebase/drugs/drug_calcium_carbonate/models/modelica/_needs_review/CalciumCarbonate_Ahn2014_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_calcium_carbonate/models/modelica/_needs_review/CalciumCarbonate_Ahn2014_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_calcium_carbonate/models/modelica/CalciumCarbonate_Ahn2014_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_calcium_carbonate/CalciumCarbonate_Ahn2014_reference/CalciumCarbonate_Ahn2014_reference_modelica.zip" download>CalciumCarbonate_Ahn2014_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_calcium_carbonate/CalciumCarbonate_Ahn2014_reference/CalciumCarbonate_Ahn2014_reference_fmi.zip" download>CalciumCarbonate_Ahn2014_reference_fmi.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_calcium_carbonate/CalciumCarbonate_Ahn2014_reference/CalciumCarbonate_Ahn2014_reference_matlab.zip" download>CalciumCarbonate_Ahn2014_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_calcium_carbonate/CalciumCarbonate_Ahn2014_reference/CalciumCarbonate_Ahn2014_reference_matlab_simbio.zip" download>CalciumCarbonate_Ahn2014_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_calcium_carbonate/CalciumCarbonate_Ahn2014_reference/CalciumCarbonate_Ahn2014_reference_sbml.zip" download>CalciumCarbonate_Ahn2014_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_calcium_carbonate/CalciumCarbonate_Ahn2014_reference/CalciumCarbonate_Ahn2014_reference_cellml.zip" download>CalciumCarbonate_Ahn2014_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-10 12:43 UTC</sub>
