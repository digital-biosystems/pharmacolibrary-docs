# fentanyl — `Fentanyl_Choi2016_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Choi L; Ferrell BA; Vasilevskis EE; Pandharipande PP; Heltsley R; Ely EW; et al. et al. (2016). Critical care medicine 44
  ·  DOI: [10.1097/CCM.0000000000001347](https://doi.org/10.1097/CCM.0000000000001347)

## Model component
<dbs-pgx drug="fentanyl" model-id="Fentanyl_Choi2016_reference" status="extracted" stale="false" population="critically ill adults" measured-compound="fentanyl" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL = θ1 + θ2Wgtc + θ3SLDCHF | `Q22` · CL | 32 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | T2:row3:col4 | — | not captured |
| V1 | `Q63` · V1 | 203 | not captured | not captured | not captured | not captured | exact (1.0) | T2:row7:col1, T2:row7:col4 | — | not captured |
| V2 = θ4+ θ5Wgtc | `Q64` · V2 | 474 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | T2:row8:col4 | — | not captured |
| Q | `Q30` · Q | 55 | not captured | not captured | not captured | not captured | exact (1.0) | T2:row11:col1, T2:row11:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Covariate Model(Obj = 599)' — extend the ontology if this is a real PK parameter (source ['T2:row0:col3'])
- dropped unlinked row (NIL): 'θ1' — extend the ontology if this is a real PK parameter (source ['T2:row4:col1'])
- dropped unlinked row (NIL): 'θ2' — extend the ontology if this is a real PK parameter (source ['T2:row5:col1'])
- dropped unlinked row (NIL): 'θ3' — extend the ontology if this is a real PK parameter (source ['T2:row6:col1'])
- dropped unlinked row (NIL): 'θ4' — extend the ontology if this is a real PK parameter (source ['T2:row9:col1'])
- dropped unlinked row (NIL): 'θ5' — extend the ontology if this is a real PK parameter (source ['T2:row10:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fentanyl
- model equation 'CLi = [θ1+θ2(Wgti−92)+θ3SLDCHFi]×exp(ηiCL) V1i=θ6×exp(ηiV1) V2i=[θ4+θ5(Wgti−92)]×exp(ηiV2) Q=θ7' not bound — neither LHS nor base term 'θ1' linked to an ontology parameter

**Extraction notes:**
- unparsed cell T2:row3:col5 = '29 to 34'
- unparsed cell T2:row4:col2 = '32 to 39'
- unparsed cell T2:row5:col2 = '0.10 to 0.28'
- unparsed cell T2:row6:col2 = '−15.2 to − 6.0'
- unparsed cell T2:row7:col2 = '140 to 266'
- unparsed cell T2:row7:col3 = 'V1'
- unparsed cell T2:row7:col5 = '186 to 318'
- unparsed cell T2:row8:col3 = 'V2'
- unparsed cell T2:row8:col5 = '385 to 563'
- unparsed cell T2:row9:col2 = '428 to 618'
- unparsed cell T2:row10:col2 = '3.9 to 10.4'
- unparsed cell T2:row11:col2 = '42 to 68'
- unparsed cell T2:row11:col5 = '32 to 53'
- unparsed cell T2:row12:col2 = '59 to 70'
- unparsed cell T2:row12:col3 = 'ω2CL (%CV)'
- unparsed cell T2:row12:col5 = '62 to 76'
- unparsed cell T2:row13:col2 = '43 to 111'
- unparsed cell T2:row13:col3 = 'ω2V1 (%CV)'
- unparsed cell T2:row13:col5 = '59 to 109'
- unparsed cell T2:row14:col2 = '57 to 80'
- unparsed cell T2:row14:col3 = 'σ2V2 (%CV)'
- unparsed cell T2:row14:col5 = '59 to 94'
- unparsed cell T2:row15:col2 = '32 to 35'
- unparsed cell T2:row15:col3 = 'σ2proportional (%CV)'
- unparsed cell T2:row15:col5 = '32 to 35'
- unparsed cell T2:row16:col2 = '0.0 to 0.04'
- unparsed cell T2:row16:col5 = '0.0 to 0.06'
- LLM selected parameter table(s) 2
- captured model equation CLi = [θ1+θ2(Wgti−92)+θ3SLDCHFi]×exp(ηiCL) V1i=θ6×exp(ηiV1) V2i=[θ4+θ5(Wgti−92)]×exp(ηiV2) Q=θ7

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 32.0 | not captured | not captured | ['T2:row3:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fentanyl/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Choi_2016` / `Choi_2016::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
