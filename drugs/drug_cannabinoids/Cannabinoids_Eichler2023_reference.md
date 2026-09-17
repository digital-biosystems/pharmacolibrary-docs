<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;cannabinoids&quot;,&quot;href&quot;:&quot;drugs/drug_cannabinoids/&quot;},{&quot;label&quot;:&quot;Eichler_2023 \u00b7 reference&quot;}]"></div>

# cannabinoids — `Cannabinoids_Eichler2023_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

### Reviewer guidance

**What is wrong:** the simulated model does not reproduce a value the paper reports. Evidence: T1_cmax — expected 3.8999999999999997e-07 — got 0.00036316977113297723 — ratio 931.2045; T1_cmax — expected 7e-07 — got 0.00036316977113297723 — ratio 518.814; T1_t_half_beta — expected 161.29 — got 1579335.5633705647 — ratio 9791.9001; T1_t_half_beta — expected 79.85 — got 1579335.5633705647 — ratio 19778.7798

**Steps:**
1. Open the paper's reported table and confirm the target value and its units.
2. Compare with the transcribed value in _transcribev2.yaml for this stem.
3. If the transcription is right, the extracted parameters are suspect — check CL and volume in _interpretv2.yaml against the paper.
4. If the transcription is wrong, fix the extraction; the model rebuild follows.

<sub>owner: **scholar** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Eichler F; Poźniak B; Machnik M; Schenk I; Wingender A; Baudisch N; Thevis M; Bäumer W; Lischer C; Ehrle A et al. (2023). Frontiers in veterinary science 10
  ·  DOI: [10.3389/fvets.2023.1234551](https://doi.org/10.3389/fvets.2023.1234551)

## Model component
<dbs-pgx drug="cannabinoids" model-id="Cannabinoids_Eichler2023_reference" status="needs_review" stale="false" population="horses" measured-compound="cannabidiol" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cl/F (L/h/kg) | `Q27` · CL/F | —(suppressed) | L/h/kg | — | [l] / [[h] · [kg]] | 33.6 | exact (1.0) | tab4:row3:col1, tab4:row3:col2, tab4:row3:col3, tab4:row3:col4, tab4:row3:col5, tab4:row3:col6 | — | not captured |
| V1/F (L/kg) | `Q290` · V1/F | —(suppressed) | L/kg | — | [l] / [kg] | 22.1 | exact (1.0) | tab4:row4:col1, tab4:row4:col2, tab4:row4:col3, tab4:row4:col4, tab4:row4:col5, tab4:row4:col6 | — | not captured |
| Q2 (L/h/kg) | `Q30` · Q | —(suppressed) | L/h/kg | — | [l] / [[h] · [kg]] | 10.2 | special_case (0.95) | tab4:row5:col1, tab4:row5:col2, tab4:row5:col3 | — | not captured |
| V2/F (L/kg) | `Q82` · V2/F | —(suppressed) | L/kg | — | [l] / [kg] | 16.2 | exact (1.0) | tab4:row6:col1, tab4:row6:col2, tab4:row6:col3 | — | not captured |
| Q3 (L/h/kg) | `Q308` · Q3 | —(suppressed) | L/h/kg | — | [l] / [[h] · [kg]] | 31.8 | exact (1.0) | tab4:row7:col1, tab4:row7:col2, tab4:row7:col3, tab4:row7:col4, tab4:row7:col5, tab4:row7:col6 | — | not captured |
| V3/F (L/kg) | `Q78` · V3/F | —(suppressed) | L/kg | — | [l] / [kg] | 28.0 | exact (1.0) | tab4:row8:col1, tab4:row8:col2, tab4:row8:col3, tab4:row8:col4, tab4:row8:col5, tab4:row8:col6 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Tk0 (h)' — extend the ontology if this is a real PK parameter (source ['tab4:row2:col1', 'tab4:row2:col2', 'tab4:row2:col3'])
- dropped unlinked row (NIL): 'a' — extend the ontology if this is a real PK parameter (source ['tab4:row10:col1', 'tab4:row10:col2', 'tab4:row10:col3'])
- dropped unlinked row (NIL): 'b' — extend the ontology if this is a real PK parameter (source ['tab4:row11:col1', 'tab4:row11:col2', 'tab4:row11:col3'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cannabidiol
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- review gap-fill skipped: this record measures 'cannabidiol', not cannabinoids — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab4:row3:col1', 'tab4:row3:col2', 'tab4:row3:col3', 'tab4:row3:col4', 'tab4:row3:col5', 'tab4:row3:col6'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab4:row4:col1', 'tab4:row4:col2', 'tab4:row4:col3', 'tab4:row4:col4', 'tab4:row4:col5', 'tab4:row4:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab4:row5:col1', 'tab4:row5:col2', 'tab4:row5:col3'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab4:row7:col1', 'tab4:row7:col2', 'tab4:row7:col3', 'tab4:row7:col4', 'tab4:row7:col5', 'tab4:row7:col6'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab4:row8:col1', 'tab4:row8:col2', 'tab4:row8:col3', 'tab4:row8:col4', 'tab4:row8:col5', 'tab4:row8:col6'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab4:row6:col1', 'tab4:row6:col2', 'tab4:row6:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 10.5 L/h | not captured | not captured | ['tab4:row3:col1', 'tab4:row3:col2', 'tab4:row3:col3', 'tab4:row3:col4', 'tab4:row3:col5', 'tab4:row3:col6'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 58.1 L | not captured | not captured | ['tab4:row4:col1', 'tab4:row4:col2', 'tab4:row4:col3', 'tab4:row4:col4', 'tab4:row4:col5', 'tab4:row4:col6'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 2.19e+04 L | not captured | not captured | ['tab4:row6:col1', 'tab4:row6:col2', 'tab4:row6:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=cannabidiol) | C_central | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 3.8999999999999997e-07 | 0.00036316977113297723 | 931.2045 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 7e-07 | 0.00036316977113297723 | 518.814 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 0.72 | 0.00036316977113297723 | not captured | unresolved concentration unit (exp '(', sim 'kg/m3') |
| T1_t_half_beta | reference | fail | 161.29 | 1579335.5633705647 | 9791.9001 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 79.85 | 1579335.5633705647 | 19778.7798 | h→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_cannabinoids/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Eichler_2023` / `Eichler_2023::reference`)
- model: `../../../knowledgebase/drugs/drug_cannabinoids/models/modelica/Cannabinoids_Eichler2023_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_cannabinoids/models/modelica/Cannabinoids_Eichler2023_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_cannabinoids/models/modelica/Cannabinoids_Eichler2023_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_cannabinoids/Cannabinoids_Eichler2023_reference/Cannabinoids_Eichler2023_reference_modelica.zip" download>Cannabinoids_Eichler2023_reference_modelica.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_cannabinoids/Cannabinoids_Eichler2023_reference/Cannabinoids_Eichler2023_reference_matlab.zip" download>Cannabinoids_Eichler2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_cannabinoids/Cannabinoids_Eichler2023_reference/Cannabinoids_Eichler2023_reference_matlab_simbio.zip" download>Cannabinoids_Eichler2023_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_cannabinoids/Cannabinoids_Eichler2023_reference/Cannabinoids_Eichler2023_reference_sbml.zip" download>Cannabinoids_Eichler2023_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_cannabinoids/Cannabinoids_Eichler2023_reference/Cannabinoids_Eichler2023_reference_cellml.zip" download>Cannabinoids_Eichler2023_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
