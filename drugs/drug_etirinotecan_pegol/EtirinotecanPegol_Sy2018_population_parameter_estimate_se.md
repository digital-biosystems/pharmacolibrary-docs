<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;etirinotecan pegol&quot;,&quot;href&quot;:&quot;drugs/drug_etirinotecan_pegol/&quot;},{&quot;label&quot;:&quot;Sy_2018 \u00b7 population_parameter_estimate_se&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;EtirinotecanPegol_Sy2018_population_parameter_estimate_se&quot;,&quot;label&quot;:&quot;Sy_2018_population_parameter_estimate_se&quot;,&quot;href&quot;:&quot;drugs/drug_etirinotecan_pegol/EtirinotecanPegol_Sy2018_population_parameter_estimate_se.md&quot;,&quot;status&quot;:&quot;not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;EtirinotecanPegol_Sy2018_population_parameter_estimate_se&quot;,&quot;label&quot;:&quot;Sy_2018_population_parameter_estimate_se&quot;,&quot;href&quot;:&quot;drugs/drug_etirinotecan_pegol/EtirinotecanPegol_Sy2018_population_parameter_estimate_se.md&quot;,&quot;status&quot;:&quot;not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;EtirinotecanPegol_Sy2018_parameter&quot;,&quot;label&quot;:&quot;Sy_2018_parameter&quot;,&quot;href&quot;:&quot;drugs/drug_etirinotecan_pegol/EtirinotecanPegol_Sy2018_parameter.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;EtirinotecanPegol_Sy2018_parameter&quot;,&quot;label&quot;:&quot;Sy_2018_parameter&quot;,&quot;href&quot;:&quot;drugs/drug_etirinotecan_pegol/EtirinotecanPegol_Sy2018_parameter.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# etirinotecan pegol — `EtirinotecanPegol_Sy2018_population_parameter_estimate_se`

> ## <span class="pk-badge pk-badge--neutral">not simulated</span>

### Reviewer guidance

**What is wrong:** the model was built but never simulated

**Steps:**
1. No curator action. Re-run the engineer without --no-simulate.

<sub>owner: **engineer** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Sy SKB; Chia YL; Gordi T; Hoch U; Eldon MA et al. (2018). Cancer chemotherapy and pharmacology 81
  ·  DOI: [10.1007/s00280-018-3562-3](https://doi.org/10.1007/s00280-018-3562-3)

## Model component
<dbs-pgx drug="etirinotecan pegol" model-id="EtirinotecanPegol_Sy2018_population_parameter_estimate_se" status="not_simulated" stale="false" population="cancer patients with solid tumors" measured-compound="etirinotecan pegol" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_simulated`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | —(suppressed) | L/h | — | L/h | not captured | exact (1.0) | Sy_2018:other_prose | — | not captured |
| V1 (L) | `Q63` · V1 | —(suppressed) | L | — | L | not captured | exact (1.0) | Sy_2018:other_prose | — | not captured |
| V2∗=V2/F12 (L) | `Q64` · V2 | —(suppressed) | L | — | L | not captured | boundary (0.8) | Sy_2018:other_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Q1']

**Interpretation flags:**
- dropped unlinked row (NIL): 'EP' — extend the ontology if this is a real PK parameter (source ['Tab4:row2:col2'])
- dropped unlinked row (NIL): 'Irinotecan' — extend the ontology if this is a real PK parameter (source ['Tab4:row12:col2'])
- dropped unlinked row (NIL): 'SN38' — extend the ontology if this is a real PK parameter (source ['Tab4:row18:col2'])
- dropped unlinked row (NIL): 'SN38G' — extend the ontology if this is a real PK parameter (source ['Tab4:row26:col2'])
- dropped unlinked row (NIL): 'APC' — extend the ontology if this is a real PK parameter (source ['Tab4:row31:col2'])
- table mostly unlinked (5/5 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q22 ('CL (L/h)'=0.237) from results prose — parameter table was unreadable
- salvaged Q63 ('V1 (L)'=5.05) from results prose — parameter table was unreadable
- salvaged Q64 ('V2∗=V2/F12 (L)'=1.8) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=etirinotecan pegol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 4 first-order transfer(s) across 5 compounds → general_linear
- model equation 'θi = θpop∏jcovi,jcovmedian,jkcov,j·exp(ηθ), whereas categorical covariates' not bound — neither LHS nor base term 'θpop' linked to an ontology parameter
- status held at route_to_review — not promoted
- population split: 'population parameter, estimate ± se' subgroup of Sy_2018 (paper reports 2 populations: parameter, population parameter, estimate ± se)

**Extraction notes:**
- unparsed cell Tab4:row2:col3 = '0.07654 ± 0.014 (27%)'
- unparsed cell Tab4:row12:col3 = '0.354 ± 0.062 (59%)'
- unparsed cell Tab4:row18:col3 = '0.14 ± 0.028 (37%)'
- unparsed cell Tab4:row26:col3 = '0.415 ± 0.081 (64%)'
- unparsed cell Tab4:row31:col1 = '(Firinotecan→SN38)'
- unparsed cell Tab4:row31:col3 = '0.0528 ± 0.012 (23%)'
- unparsed cell Tab4:row36:col1 = 'Corr (CL, V1)'
- LLM selected parameter table(s) 4
- captured model equation θi = θpop∏jcovi,jcovmedian,jkcov,j·exp(ηθ), whereas categorical covariates

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.237 | not captured | not captured | ['Sy_2018:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.237 L/h | not captured | not captured | ['Sy_2018:other_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.05 L | not captured | not captured | ['Sy_2018:other_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.8 L | not captured | not captured | ['Sy_2018:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_shared_parameters | not captured | pass | 3 shared param(s) bound once | bound once | not captured | shared params must bind one value to both compartments |
| T3_topology_template | not captured | pass | general_linear → PK_General_Linear* | PK_General_Linear | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_etirinotecan_pegol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sy_2018` / `Sy_2018::population_parameter_estimate_se`)
- model: `../../../knowledgebase/drugs/drug_etirinotecan_pegol/models/modelica/EtirinotecanPegol_Sy2018_population_parameter_estimate_se.mo`
- deviation: `../../../knowledgebase/drugs/drug_etirinotecan_pegol/models/modelica/EtirinotecanPegol_Sy2018_population_parameter_estimate_se.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_etirinotecan_pegol/EtirinotecanPegol_Sy2018_population_parameter_estimate_se/EtirinotecanPegol_Sy2018_population_parameter_estimate_se_modelica.zip" download>EtirinotecanPegol_Sy2018_population_parameter_estimate_se_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_etirinotecan_pegol/EtirinotecanPegol_Sy2018_population_parameter_estimate_se/EtirinotecanPegol_Sy2018_population_parameter_estimate_se_matlab.zip" download>EtirinotecanPegol_Sy2018_population_parameter_estimate_se_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_etirinotecan_pegol/EtirinotecanPegol_Sy2018_population_parameter_estimate_se/EtirinotecanPegol_Sy2018_population_parameter_estimate_se_matlab_simbio.zip" download>EtirinotecanPegol_Sy2018_population_parameter_estimate_se_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_etirinotecan_pegol/EtirinotecanPegol_Sy2018_population_parameter_estimate_se/EtirinotecanPegol_Sy2018_population_parameter_estimate_se_sbml.zip" download>EtirinotecanPegol_Sy2018_population_parameter_estimate_se_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_etirinotecan_pegol/EtirinotecanPegol_Sy2018_population_parameter_estimate_se/EtirinotecanPegol_Sy2018_population_parameter_estimate_se_cellml.zip" download>EtirinotecanPegol_Sy2018_population_parameter_estimate_se_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
